# Shader 5

## Metadata
- **Category**: Shader
- **Objective**: 3D raymarching with neon glow effects
- **Use Case**: Website backgrounds, visual effects, artistic displays
- **Visual Style**: 3D neon glow with raymarching and mathematical patterns
- **Interactivity**: Non-interactive, purely animated

## Description
A Three.js shader-based background effect that uses 3D raymarching techniques to create neon glow effects. Features complex mathematical patterns including spheres and gyroid structures with time-based animation. The shader generates immersive 3D environments with glowing neon lights, depth, and dynamic movement. Perfect for creating visually striking, futuristic backgrounds for websites, visual effects, or artistic displays that don't require user interaction.

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

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
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

const Shader5 = ({
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

    #define T           u_time + 50.
    #define P(z)        vec3(0.0, 0.0, 0.)
    #define rot(a)      mat2(cos(a + vec4(0, 33, 11, 0)))

    float sphere(vec3 p, vec3 center, float radius) {
        return length(p - center) - radius;
    }

    float hash12(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * 0.1031);
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.x + p3.y) * p3.z);
    }

    float interleavedGradientNoise(vec2 pixel) {
        pixel = floor(pixel);
        const vec2 magic = vec2(0.06711056, 0.00583715);
        return fract(52.9829189 * fract(dot(pixel, magic)));
    }

    float BlueNoise(vec2 p, float time) {
        float ig = interleavedGradientNoise(p);
        float jitter = hash12(p + time);
        return fract(ig + jitter * 0.5);
    }

    void mainImage(out vec4 fragColor, in vec2 u) {
        float time = u_time / 3.0;
        vec2 a = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 c = pc.xy / u_resolution.xy * a * 3.5 + time * 0.3;

        float k = 0.1 + cos(c.y + sin(0.148 - time)) + 2.4 * time;
        float w = 0.9 + sin(c.x + cos(0.628 + time)) - 0.7 * time;
        float d = length(c);
        float s = 7.0 * cos(d + w) * sin(k + w);

        col = vec4(0.5 + 0.5 * cos(s + vec3(2, 1, 1)), 1.0);
    }

    void main() {
        vec2 fragCoord = vUv * u_resolution.xy;
        vec4 col;
        mainImage(col, fragCoord);

        float gray = dot(col.rgb, vec3(0.299, 0.587, 0.114));
        float threshold = bayerDither(fragCoord);
        float bw = step(threshold, gray);
        col.rgb = mix(u_bg_color, u_color, bw);

        gl_FragColor = col;
    }
  `,
  uniforms = {},
  className,
  color = "#ffaa08",
  backgroundColor = "#000000",
}: ShaderBackgroundProps) => {
  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      u_color: { value: new THREE.Color(color) },
      u_bg_color: { value: new THREE.Color(backgroundColor) },
      ...uniforms,
    }),
    [uniforms, color, backgroundColor],
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

export { Shader5 };
```
