# Shader 7

## Metadata
- **Category**: Shader
- **Objective**: Interactive fluid simulation with mouse interaction
- **Use Case**: Interactive backgrounds, creative coding demos, immersive experiences
- **Visual Style**: Dynamic fluid-like patterns with flow field visualization
- **Interactivity**: Mouse movement creates fluid disturbances and flow patterns

## Description
A Three.js shader-based interactive fluid simulation. Features real-time fluid dynamics that respond to mouse movement, creating ripples and flow patterns. Uses advanced rendering techniques including ping-pong FBO (Frame Buffer Object) rendering for fluid simulation, vector field visualization, and interactive mouse controls. The fluid responds to mouse position and movement with customizable brush size, strength, and decay parameters. Perfect for creating immersive, interactive backgrounds for websites, creative coding projects, or artistic displays that respond to user interaction.

## Source Code
```tsx
"use client";

import { useFBO } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

interface UniformMap {
  [key: string]: { value: unknown };
}

interface ShaderBackgroundProps {
  vertexShader?: string;
  fragmentShader?: string;
  uniforms?: UniformMap;
  className?: string;
  color?: string;
}

const defaultVertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

const defaultFragmentShader = `
    uniform float u_time;
    uniform vec3 u_resolution;
    uniform sampler2D u_fluid;
    uniform float u_distortionAmount;
    uniform vec3 u_color;

    #define time u_time

    const float arrow_density = 4.5;
    const float arrow_length = .45;

    const int iterationTime1 = 20;
    const int iterationTime2 = 20;
    const int vector_field_mode = 0;
    const float scale = 6.;

    const float velocity_x = 0.1;
    const float velocity_y = 0.2;

    const float mode_2_speed = 2.5;
    const float mode_1_detail = 200.;
    const float mode_1_twist = 50.;

    const bool isArraw = true;

    const vec3 luma = vec3(0.2126, 0.7152, 0.0722);

    float f(in vec2 p)
    {
        return tanh(p.x+sin(p.y+time*velocity_x)) * sin(p.y*p.x*0.1+time*velocity_y);
    }

    struct Field {
        vec2 vel;
        vec2 pos;
    };

    Field field(in vec2 p,in int mode)
    {
        Field field;
        if(mode == 0){
            vec2 ep = vec2(0.05,0.);
            vec2 rz= vec2(0);
            for( int i=0; i<iterationTime1; i++ )
            {
                float t0 = f(p);
                float t1 = f(p + ep.xy);
                float t2 = f(p + ep.yx);
                vec2 g = vec2((t1-t0), (t2-t0))/ep.xx;
                vec2 t = vec2(-g.y,g.x);

                p += (mode_1_twist*0.01)*t + g*(1./mode_1_detail);
                p.x = p.x + sin( time*mode_2_speed/10.)/10.;
                p.y = p.y + cos(time*mode_2_speed/10.)/10.;
                rz= g;
            }
            field.vel = rz;
            return field;
        }

        if(mode == 1){
            vec2 ep = vec2(0.05,0.);
            vec2 rz= vec2(0);
            for( int i=0; i<iterationTime1; i++ )
            {
                float t0 = f(p);
                float t1 = f(p + ep.xy);
                float t2 = f(p + ep.yx);
                vec2 g = vec2((t1-t0), (t2-t0))/ep.xx;
                vec2 t = vec2(-g.y,g.x);

                p += (mode_1_twist*0.01)*t + g*(1./mode_1_detail);
                p.x = p.x + sin( time*mode_2_speed/10.)/10.;
                p.y = p.y + cos(time*mode_2_speed/10.)/10.;
                rz= g;
            }

            field.vel = rz;
            for(int i=1; i<iterationTime2; i++){
                p.x+=0.3/float(i)*sin(float(i)*3.*p.y+time*mode_2_speed) + 0.5;
                p.y+=0.3/float(i)*cos(float(i)*3.*p.x + time*mode_2_speed) + 0.5;
            }
            field.pos = p;
            return field;
        }

        return field;
    }

    float segm(in vec2 p, in vec2 a, in vec2 b)
    {
        vec2 pa = p - a;
        vec2 ba = b - a;
        float h = clamp(dot(p-a,ba)/dot(ba,ba), 0., 1.);
        return length(pa - ba*h)*20.*arrow_density;
    }

    float fieldviz(in vec2 p,in int mode)
    {
        vec2 ip = floor(p*arrow_density)/arrow_density + .5/arrow_density;
        vec2 t = field(ip,mode).vel;
        float m = min(0.1,pow(length(t),0.5)*(arrow_length/arrow_density));
        vec2 b = normalize(t)*m;
        float rz = segm(p, ip, ip+b);
        vec2 prp = (vec2(-b.y,b.x));
        rz = min(rz,segm(p, ip+b, ip+b*0.65+prp*0.3));
        return clamp(min(rz,segm(p, ip+b, ip+b*0.65-prp*0.3)),0.,1.);
    }

    vec3 getRGB(in Field fld,in int mode){

        if(mode == 0){
            vec2 p = fld.vel;
            float magnitude = length(p);
            float angle = atan(p.y, p.x);
            float pulse = 0.5 + 0.5 * sin(angle * 2.0 + time * 0.75);
            float glow = smoothstep(0.0, 1.2, magnitude) * pow(pulse, 2.0);
            vec3 base = u_color * 0.03;
            vec3 accent = u_color * 0.9;
            return clamp(base + accent * glow, 0.0, 1.0);
        }

        if(mode == 1){
            vec2 p = fld.pos;
            float ripple = sin(p.x * 1.5 + time * 0.4) * 0.5 + 0.5;
            float swirl = cos(p.y * 1.5 - time * 0.6) * 0.5 + 0.5;
            vec3 base = u_color * 0.02;
            vec3 accent = u_color * 0.8;
            return clamp(base + accent * pow(ripple * swirl, 1.5), 0.0, 1.0);
        }

        return vec3(0.0);
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
        vec2 p = fragCoord.xy / u_resolution.xy-0.5 ;
        p.x *= u_resolution.x/u_resolution.y;
        p *= scale;

        vec3 col;
        int vector_mode = 0;
        Field fld = field(p,vector_mode);
        col = getRGB(fld,vector_mode);
        col = mix(col, col * 1.1, 0.25);
        col = pow(col, vec3(1.2));

        fragColor = vec4(col,1.0);
    }

    void main() {
        vec2 fluid = texture2D(u_fluid, vUv).xy;
        vec2 warpedUv = vUv + fluid * (0.5 * u_distortionAmount);
        vec2 warpedFragCoord = warpedUv * u_resolution.xy;

        vec4 col = vec4(0.0);
        mainImage(col, warpedFragCoord);

        gl_FragColor = col;
    }
  `;

const simulationVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fluidFragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec4 u_mouse;
  uniform int u_frame;
  uniform sampler2D iPreviousFrame;
  uniform float uBrushSize;
  uniform float uBrushStrength;
  uniform float uFluidDecay;
  uniform float uTrailLength;
  uniform float uStopDecay;
  varying vec2 vUv;

  vec2 ur, U;

  float ln(vec2 p, vec2 a, vec2 b) {
      return length(p-a-(b-a)*clamp(dot(p-a,b-a)/dot(b-a,b-a),0.,1.));
  }

  vec4 t(vec2 v, int a, int b) {
      return texture2D(iPreviousFrame, fract((v+vec2(float(a),float(b)))/ur));
  }

  vec4 t(vec2 v) {
      return texture2D(iPreviousFrame, fract(v/ur));
  }

  float area(vec2 a, vec2 b, vec2 c) {
      float A = length(b-c), B = length(c-a), C = length(a-b), s = 0.5*(A+B+C);
      return sqrt(s*(s-A)*(s-B)*(s-C));
  }

  void main() {
      U = vUv * u_resolution;
      ur = u_resolution.xy;

      if (u_frame < 1) {
          float w = 0.5+sin(0.2*U.x)*0.5;
          float q = length(U-0.5*ur);
          gl_FragColor = vec4(0.1*exp(-0.001*q*q),0,0,w);
      } else {
          vec2 v = U,
               A = v + vec2( 1, 1),
               B = v + vec2( 1,-1),
               C = v + vec2(-1, 1),
               D = v + vec2(-1,-1);

          for (int i = 0; i < 8; i++) {
              v -= t(v).xy;
              A -= t(A).xy;
              B -= t(B).xy;
              C -= t(C).xy;
              D -= t(D).xy;
          }

          vec4 me = t(v);
          vec4 n = t(v, 0, 1),
              e = t(v, 1, 0),
              s = t(v, 0,-1),
              w = t(v,-1, 0);
          vec4 ne = .25*(n+e+s+w);
          me = mix(t(v), ne, vec4(0.15,0.15,0.95,0.));
          me.z = me.z - 0.01*((area(A,B,C)+area(B,C,D))-4.);

          vec4 pr = vec4(e.z,w.z,n.z,s.z);
          me.xy = me.xy + 100.*vec2(pr.x-pr.y, pr.z-pr.w)/ur;

          me.xy *= uFluidDecay;
          me.z *= uTrailLength;

          if (u_mouse.z > 0.0) {
              vec2 mousePos = u_mouse.xy;
              vec2 mousePrev = u_mouse.zw;
              vec2 mouseVel = mousePos - mousePrev;
              float velMagnitude = length(mouseVel);
              float q = ln(U, mousePos, mousePrev);
              vec2 m = mousePos - mousePrev;
              float l = length(m);
              if (l > 0.0) m = min(l, 10.0) * m / l;

              float brushSizeFactor = 1e-4 / uBrushSize;
              float strengthFactor = 0.03 * uBrushStrength;

              float falloff = exp(-brushSizeFactor*q*q*q);
              falloff = pow(falloff, 0.5);

              me.xyw += strengthFactor * falloff * vec3(m, 10.);

              if (velMagnitude < 2.0) {
                  float distToCursor = length(U - mousePos);
                  float influence = exp(-distToCursor * 0.01);
                  float cursorDecay = mix(1.0, uStopDecay, influence);
                  me.xy *= cursorDecay;
                  me.z *= cursorDecay;
              }
          }

          gl_FragColor = clamp(me, -0.4, 0.4);
      }
  }
`;

const config = {
  brushSize: 12.0,
  brushStrength: 0.45,
  fluidDecay: 0.95,
  trailLength: 0.85,
  stopDecay: 0.85,
  distortionAmount: 1.5,
  lerpFactor: 0.15,
};

interface SimulationProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: UniformMap;
  color: string;
}

const ShaderPlane = ({
  vertexShader,
  fragmentShader,
  uniforms,
  color,
}: SimulationProps) => {
  const { size, gl } = useThree();

  const fluidMaterial = useRef<THREE.ShaderMaterial | null>(null);
  const displayMaterial = useRef<THREE.ShaderMaterial | null>(null);
  const fluidMeshRef = useRef<THREE.Mesh | null>(null);
  const displayMeshRef = useRef<THREE.Mesh | null>(null);

  const fluidTarget1 = useFBO(size.width, size.height, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  });
  const fluidTarget2 = useFBO(size.width, size.height, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  });

  const currentFluidTarget = useRef(fluidTarget1);
  const previousFluidTarget = useRef(fluidTarget2);
  const frameCount = useRef(0);

  const mouse = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const halfX = size.width / 2;
    const halfY = size.height / 2;

    mouse.current = { x: halfX, y: halfY, prevX: halfX, prevY: halfY };
    targetMouse.current = { x: halfX, y: halfY };
    smoothMouse.current = { x: halfX, y: halfY };
  }, [size]);

  useEffect(() => {
    const { domElement } = gl;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = domElement.getBoundingClientRect();
      targetMouse.current.x = event.clientX - rect.left;
      targetMouse.current.y = rect.height - (event.clientY - rect.top);
    };

    const handleMouseLeave = () => {};

    domElement.addEventListener("mousemove", handleMouseMove);
    domElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      domElement.removeEventListener("mousemove", handleMouseMove);
      domElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [gl]);

  const fluidUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(size.width, size.height) },
      u_mouse: { value: new THREE.Vector4(0, 0, 0, 0) },
      u_frame: { value: 0 },
      iPreviousFrame: { value: null },
      uBrushSize: { value: config.brushSize },
      uBrushStrength: { value: config.brushStrength },
      uFluidDecay: { value: config.fluidDecay },
      uTrailLength: { value: config.trailLength },
      uStopDecay: { value: config.stopDecay },
    }),
    [size.width, size.height],
  );

  const displayUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(size.width, size.height, 1) },
      u_fluid: { value: null },
      u_distortionAmount: { value: config.distortionAmount },
      u_color: { value: new THREE.Color(color) },
      ...uniforms,
    }),
    [size.width, size.height, uniforms, color],
  );

  useEffect(() => {
    frameCount.current = 0;
    fluidTarget1.setSize(size.width, size.height);
    fluidTarget2.setSize(size.width, size.height);

    if (fluidMaterial.current) {
      const resolution = fluidMaterial.current.uniforms.u_resolution
        .value as THREE.Vector2;
      resolution.set(size.width, size.height);
    }

    if (displayMaterial.current) {
      const resolution = displayMaterial.current.uniforms.u_resolution
        .value as THREE.Vector3;
      resolution.set(size.width, size.height, 1);
    }
  }, [size, fluidTarget1, fluidTarget2]);

  useEffect(() => {
    if (displayMaterial.current) {
      displayMaterial.current.uniforms.u_fluid.value =
        currentFluidTarget.current.texture;
    }
  }, []);

  useFrame(({ gl, clock, camera }) => {
    const time = clock.getElapsedTime();

    mouse.current.prevX = smoothMouse.current.x;
    mouse.current.prevY = smoothMouse.current.y;

    smoothMouse.current.x +=
      (targetMouse.current.x - smoothMouse.current.x) * config.lerpFactor;
    smoothMouse.current.y +=
      (targetMouse.current.y - smoothMouse.current.y) * config.lerpFactor;

    mouse.current.x = smoothMouse.current.x;
    mouse.current.y = smoothMouse.current.y;

    if (fluidMaterial.current) {
      fluidMaterial.current.uniforms.u_time.value = time;
      fluidMaterial.current.uniforms.u_frame.value = frameCount.current;
      fluidMaterial.current.uniforms.u_mouse.value.set(
        mouse.current.x,
        mouse.current.y,
        mouse.current.prevX,
        mouse.current.prevY,
      );
      fluidMaterial.current.uniforms.u_resolution.value.set(
        size.width,
        size.height,
      );
    }

    if (fluidMaterial.current && fluidMeshRef.current) {
      fluidMaterial.current.uniforms.iPreviousFrame.value =
        previousFluidTarget.current.texture;
      gl.setRenderTarget(currentFluidTarget.current);
      gl.render(fluidMeshRef.current, camera);
    }

    if (displayMaterial.current) {
      displayMaterial.current.uniforms.u_time.value = time;
      displayMaterial.current.uniforms.u_resolution.value.set(
        size.width,
        size.height,
        1,
      );
      displayMaterial.current.uniforms.u_fluid.value =
        currentFluidTarget.current.texture;
    }

    if (displayMaterial.current && displayMeshRef.current) {
      gl.setRenderTarget(null);
      gl.render(displayMeshRef.current, camera);
    }

    const temp = currentFluidTarget.current;
    currentFluidTarget.current = previousFluidTarget.current;
    previousFluidTarget.current = temp;

    frameCount.current += 1;
  });

  const fluidPlane = useMemo(
    () => (
      <mesh ref={fluidMeshRef}>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          ref={fluidMaterial}
          uniforms={fluidUniforms}
          vertexShader={simulationVertexShader}
          fragmentShader={fluidFragmentShader}
        />
      </mesh>
    ),
    [fluidUniforms],
  );

  const displayPlane = useMemo(
    () => (
      <mesh ref={displayMeshRef}>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          ref={displayMaterial}
          uniforms={displayUniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={THREE.FrontSide}
          depthTest={false}
          depthWrite={false}
        />
      </mesh>
    ),
    [displayUniforms, fragmentShader, vertexShader],
  );

  return (
    <>
      {fluidPlane}
      {displayPlane}
    </>
  );
};

const Shader7 = ({
  vertexShader = defaultVertexShader,
  fragmentShader = defaultFragmentShader,
  uniforms = {},
  className,
  color = "#bbffcc",
}: ShaderBackgroundProps) => {
  const [simKey, setSimKey] = useState(0);

  useEffect(() => {
    const handleResize = () => setSimKey((prev) => prev + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={cn(className, "absolute inset-0 w-full h-screen")} color={color}>
      <Canvas>
        <ShaderPlane
          key={simKey}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          color={color}
        />
      </Canvas>
    </section>
  );
};

export { Shader7 };
```
