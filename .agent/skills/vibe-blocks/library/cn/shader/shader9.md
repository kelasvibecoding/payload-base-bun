# Shader 9

## Metadata
- **Category**: Shader
- **Objective**: 3D torus knot with mouse interaction
- **Use Case**: Interactive backgrounds, 3D visualizations, creative coding demos
- **Visual Style**: 3D raymarched torus knot with dynamic lighting
- **Interactivity**: Mouse movement creates localized glow effects

## Description
A Three.js shader-based 3D torus knot rendered with raymarching techniques. Features a complex 3D shape that rotates and evolves over time, with interactive mouse controls that create localized red glow effects near the cursor position. The shader uses advanced raymarching algorithms to render the 3D torus knot with proper lighting, shadows, and depth. When the mouse moves near the 3D shape, it creates a red glow effect that highlights the area. Perfect for creating immersive, interactive 3D backgrounds for websites, creative coding projects, or artistic displays that combine 3D rendering with user interaction.

## Source Code
```tsx
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}

const ShaderPlane = ({
  vertexShader,
  fragmentShader,
  uniforms,
}: ShaderPlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  const mouseLerp = useRef(new THREE.Vector2(0, 0));

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);

      const aspect = size.width / size.height;
      const targetX = state.pointer.x * aspect;
      const targetY = state.pointer.y;

      mouseLerp.current.lerp(new THREE.Vector2(targetX, targetY), 0.1);

      material.uniforms.u_mouse.value.copy(mouseLerp.current);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.FrontSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};

interface ShaderBackgroundProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: { [key: string]: { value: unknown } };
  className?: string;
}

const Shader9 = ({
  vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
    gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader = `
    precision highp float;

    varying vec2 vUv;
    uniform float u_time;
    uniform vec3 u_resolution;
    uniform sampler2D u_channel0;
    uniform vec2 u_mouse;

    #define T u_time / 2.0
    #define PI 3.141596
    #define TAU 6.283185
    #define S smoothstep
    const float EPSILON = 1e-6;

    mat2 rotate(float a){
      float s = sin(a);
      float c = cos(a);
      return mat2(c,-s,s,c);
    }

    void mainImage(out vec4 O, in vec2 I){
      vec2 R = u_resolution.xy;
      vec2 uv = (I*2.0 - R) / R.y;

      O.rgb = vec3(0.05, 0.05, 0.1);
      O.a = 1.0;

      vec3 ro = vec3(0.0, 0.0, -13.0);
      vec3 rd = normalize(vec3(uv, 1.0));

      float zMax = 20.0;
      float z = 0.1;

      vec3 col = vec3(0.05, 0.05, 0.075);
      float glow = 0.0;

      for (float i = 0.0; i < 100.0; i++) {
        vec3 p = ro + rd * z;

        p.xz = rotate(p.y * 0.4 + T) * p.xz;

        float ang = acos(p.x / 4.0);
        float n = 6.0;
        float doff = cos(ang * n);

        float d = length(p) - (6.0 + doff * 0.6);
        d = abs(d) + 0.1;

        vec3 c = (0.7 + 0.5 * sin(vec3(2, 1, 1) + p.x));
        glow += pow(0.015 / d, 2.0);
        col += glow * c;

        if (d < 0.5) {
        float distToMouse = length(uv - u_mouse);
        float influence = 1.0 - smoothstep(0.0, 0.5, distToMouse); 
        col = mix(col, vec3(1.0, 0.0, 0.0), influence);
    }

        if (d < EPSILON || z > zMax) break;
        z += max(d * 0.1, EPSILON * 2.0);
      }

      col = col / (1.0 + col);
      O.rgb = col;
    }
      

    void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
    }
  `,
  uniforms = {},
  className,
}: ShaderBackgroundProps) => {
  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      u_mouse: { value: new THREE.Vector2(0, 0) },
      ...uniforms,
    }),
    [uniforms],
  );

  return (
    <section className={cn(className, "absolute inset-0 w-full h-screen")}>
      <Canvas>
        <ShaderPlane
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={shaderUniforms}
        />
      </Canvas>
    </section>
  );
};

export { Shader9 };
```
