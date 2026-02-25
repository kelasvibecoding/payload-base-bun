# Shader 6

## Metadata
- **Category**: Shader
- **Objective**: Dithered black and white pattern animation
- **Use Case**: Website backgrounds, retro-style visual effects, artistic displays
- **Visual Style**: Monochrome dithered patterns with time-based evolution
- **Interactivity**: Non-interactive, purely animated

## Description
A Three.js shader-based background effect that creates dithered black and white patterns. Features time-based motion with Bayer dithering algorithms to create retro-style monochrome patterns. The shader uses mathematical dithering functions to generate organic, flowing black and white patterns that evolve over time. Perfect for creating retro, artistic backgrounds for websites, visual effects, or creative displays that don't require user interaction.

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
  color?: string;
  backgroundColor?: string;
}

const Shader6 = ({
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
    uniform vec3 u_color;
    uniform vec3 u_bg_color;

    float bayerDither(vec2 fragCoord) {
        float scale = 4.0;
        int x = int(mod(floor(fragCoord.x / scale), 4.0));
        int y = int(mod(floor(fragCoord.y / scale), 4.0));
        int idx = x + y * 4;
        float bayer[16];
        bayer[0] = 0.0;  bayer[1] = 8.0;  bayer[2] = 2.0;  bayer[3] = 10.0;
        bayer[4] = 12.0; bayer[5] = 4.0;  bayer[6] = 14.0; bayer[7] = 6.0;
        bayer[8] = 3.0;  bayer[9] = 11.0; bayer[10] = 1.0; bayer[11] = 9.0;
        bayer[12] = 15.0; bayer[13] = 7.0; bayer[14] = 13.0; bayer[15] = 5.0;
        return bayer[idx] / 16.0;
    }

    #define SPECULAR

    void mainImage(out vec4 col, in vec2 pc)
    {
        float time = u_time / 3.0;
        vec2 a = vec2(u_resolution.x / u_resolution.y, 1.0);
        vec2 c = pc.xy / u_resolution.xy * a * 3.5 + time * 0.3;

        float i = .13, a;
        vec2 r = u_resolution;

        vec2 p = (fragCoord+fragCoord - r) / r.y / .9;
        vec2 d = vec2(-1,1);
        vec2 b = p - i*d;
        vec2 c = p * mat2(1, 1, d/(.1 + i/dot(b,b)));
        vec2 v = c * mat2(cos(.5*log(a=dot(c,c))))/i;
        vec2 w = vec2(0.0);

        for(; i++<9.; w += 1.1+sin(v)))
            v += 0.9* sin(v.yx/i+u_time) / i + .3;

        i = length(5.0);

        vec4 base = 0.9 - exp( -exp( c.x * vec4(0.0,0.0,0,0) )
                       /  vec4(length(w))
                       / ( 2. + i*i/4. - i )
                       / ( .5 + 1. / a )
                       / ( .03 + abs( length(p)-.7 ) )
                 );

        float streak = lightImpulses(v, u_time);
        base.rgb += streak * 0.015;

        return base;
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

export { Shader6 };
```
