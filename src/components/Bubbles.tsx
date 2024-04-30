import { useEffect, useRef } from 'react';
import vertexShader from './bubble_vertex.glsl';
import fragmentShader from './bubble_fragment.glsl';

// TODO use WebGL2

const compileShader = (
  gl: WebGL2RenderingContext,
  shaderSource: string,
  shaderType: number
) => {
  const shader = gl.createShader(shaderType);
  if (!shader) {
    return null;
  }
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Error compiling shader: ', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const createProgram = (
  gl: WebGL2RenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader
) => {
  const program = gl.createProgram();
  if (!program) {
    return null;
  }
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Error linking program: ', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
};

// Hi-DPIにも対応する
const resize = (canvas: HTMLCanvasElement): void => {
  const { width, height, clientWidth, clientHeight } = canvas;
  const realToCSSPixels = window.devicePixelRatio;
  const displayWidth = Math.floor(clientWidth * realToCSSPixels);
  const displayHeight = Math.floor(clientHeight * realToCSSPixels);

  if (width !== displayWidth || height !== displayHeight) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
};

const Bubbles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 板ポリ
  const positions = useRef<Float32Array>(
    new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0])
  );
  // 泡の位置
  // 最初はランダムに配置
  // 毎フレームごとにGPUで計算して更新
  const bubblePositions = useRef<Float32Array>(
    (() => {
      const res = [];
      for (let i = 0; i < 100; i++) {
        res.push(Math.random() * 2 - 1);
        res.push(Math.random() * 2 - 1);
      }
      return new Float32Array(res);
    })()
  );
  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl2');
    if (!canvas || !gl) {
      return;
    }
    resize(canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    window.addEventListener('resize', () => {
      resize(canvas);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    });
  }, [canvasRef.current]);
  useEffect(() => {
    // init shaders
    const gl = canvasRef.current?.getContext('webgl2');
    if (!gl) {
      return;
    }
    const vertexShaderObj = compileShader(gl, vertexShader, gl.VERTEX_SHADER);
    if (!vertexShaderObj) {
      return;
    }
    const fragmentShaderObj = compileShader(
      gl,
      fragmentShader,
      gl.FRAGMENT_SHADER
    );
    if (!fragmentShaderObj) {
      return;
    }
    const program = createProgram(gl, vertexShaderObj, fragmentShaderObj);
    if (!program) {
      return;
    }
    gl.useProgram(program);
    // pass a_position data to vertex shader (2D position data)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      // -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5,
      -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    const loop = () => {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(loop);
    };
    loop();
  }, []);
  return (
    <canvas
      id="bubbles"
      className="h-[100dvh] w-full fixed top-0 left-0"
      ref={canvasRef}
    ></canvas>
  );
};

export default Bubbles;
