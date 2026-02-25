# Shader 2

## Metadata
- **Category**: Shader
- **Objective**: Provide a WebGL-powered, spiraling neon portal effect for high-impact hero backgrounds.
- **Use Case**: Gaming landing pages, Cyberpunk aesthetics, or tech platforms wanting an aggressive, highly dynamic background tunnel.
- **Visual Style**: Circular, geometric "Hyperspace Tunnel" architecture. Relies on GLSL to calculate complex mat2 rotations based on time, generating a pulsing, inward-moving spiral of light. It utilizes a `u_color` hex override to tint the neon output (defaulting to a hyper-violet `#cc33ff`). The colors are mixed through `color1`, `color2`, and `color3` bands to create depth banding.
- **Interactivity**: Fluid, continuous forward motion tied to `state.clock.elapsedTime`. Fully responsive to the canvas viewport via `u_resolution`.

## Description
Shader 2 is the "Neon Vortex" component. It prioritizes the "Aggressive Innovation" brand archetype by creating a high-speed, structural light-tunnel effect. Unlike fluid/organic shaders, this effect relies on sharp mathematical curves (`mat2` rotations and discrete ring calculations) to feel highly calculated and structural. It's the perfect background for an AI inference landing page, a crypto platform, or a developer event where "speed" and "depth" are the primary emotional drivers.

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
}

const Shader2 = ({
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
    uniform sampler2D u_channel0;

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
	{
		vec2 p = 6.*(( fragCoord.xy-.5* u_resolution.xy )/u_resolution.y)-.5 ;
		vec2 i = p;
		float c = 0.0;
		float r = length(p+vec2(sin(u_time),sin(u_time*.300+5.))*0.05);
		float d = length(p);
		float rot = d+u_time+p.x*.0500;
		for (float n = 0.0; n < 4.0; n++) {
			p *= mat2(cos(rot-sin(u_time/5.0)), sin(rot), -sin(rot), cos(rot))*-0.2;
			float t = r-u_time/(n+3.0);
			i -= p + vec2(sin(t - i.x-r) + sin(t + i.y) / 50. ,sin(t - i.y / 12.0) + cos(t + i.x)+r) /20.;
			c += 2.0/length(vec2((sin(i.x+t)/.15), (cos(i.y+t)/.15)));
		}
		c /= 8.0;
		vec3 color1 = u_color * 0.8;
		vec3 color2 = u_color * 1.0;
		vec3 color3 = u_color * 0.6;

		vec3 finalColor = mix(color1, color2, 0.8);
		finalColor = mix(finalColor, color3, 0.2);

		finalColor *= smoothstep(0.0, 0.6, c * 0.5);
		finalColor *= u_color;
		fragColor = vec4(finalColor, 1.0);
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
  color = "#cc33ff",
}: ShaderBackgroundProps) => {
  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      u_color: { value: new THREE.Color(color) },
      ...uniforms,
    }),
    [uniforms, color],
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

export { Shader2 };
```
