import { useEffect, useRef } from 'react';
import vertexShader from './bubble_vertex.glsl';
import fragmentShader from './bubble_fragment.glsl';

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

const BUBBLE_AMOUNT = 20;
const RADIUS_FACTOR = 0.03;
const INIT_RADIUS = 0.001;
const SPEED = 0.1;

const Bubbles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 泡の位置/半径
  // TODO 時間経過で動かす
  const bubbleInfo = useRef<Float32Array>(
    new Float32Array(new Array(BUBBLE_AMOUNT * 4).fill(0.0))
  );
  // init Array on mount
  useEffect(() => {
    const now = performance.now() / 1000.0;
    for (let i = 0; i < BUBBLE_AMOUNT; i++) {
      // x
      bubbleInfo.current[i * 4] = Math.random() * 2 - 1;
      // y
      bubbleInfo.current[i * 4 + 1] = -2.0;
      // radius
      bubbleInfo.current[i * 4 + 2] = INIT_RADIUS;
      // startTime
      bubbleInfo.current[i * 4 + 3] = now + i + Math.random() * 90.0;
    }
  }, []);
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
    return () => {
      window.removeEventListener('resize', () => {
        resize(canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      });
    };
  }, [canvasRef.current]);
  useEffect(() => {
    // init shaders
    const gl = canvasRef.current?.getContext('webgl2', {
      // premultipliedAlpha: false,
    });
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
    const vertices = new Float32Array([
      -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    const resolutionLocation = gl.getUniformLocation(program, 'resolution');
    const bubbleInfoLocation = gl.getUniformLocation(program, 'bubble_info');
    const timeLocation = gl.getUniformLocation(program, 'time');

    const updateBubbleInfo = (currentTime: number) => {
      for (let i = 0; i < BUBBLE_AMOUNT; i++) {
        const startTime = bubbleInfo.current[i * 4 + 3];
        const elapsedTime = currentTime - startTime;
        if (elapsedTime < 0.0) {
          continue;
        }
        // x
        const nx = bubbleInfo.current[i * 4] + Math.random() * 0.0002 - 0.0001;
        // y
        const ny = SPEED * elapsedTime - 1.5;
        // radius
        const nr = Math.sqrt(INIT_RADIUS ** 2 + elapsedTime * RADIUS_FACTOR);
        // console.log(nr);
        // FIXME 見えている部分がなくなったらリセット
        if (ny - nr > 2.0) {
          // x
          bubbleInfo.current[i * 4] = Math.random() * 2 - 1;
          // y
          bubbleInfo.current[i * 4 + 1] = -1.5;
          // radius
          bubbleInfo.current[i * 4 + 2] = INIT_RADIUS;
          // startTime
          bubbleInfo.current[i * 4 + 3] = currentTime + Math.random() * 10.0;
          continue;
        }
        bubbleInfo.current[i * 4] = nx;
        bubbleInfo.current[i * 4 + 1] = ny;
        bubbleInfo.current[i * 4 + 2] = nr;
      }
    };

    // draw
    let loopend = false;
    const loop = () => {
      if (loopend) {
        return;
      }
      const currentTime = performance.now() / 1000;
      updateBubbleInfo(currentTime);
      gl.useProgram(program);
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      // gl.useProgram(program);
      gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform4fv(bubbleInfoLocation, bubbleInfo.current);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    // avoid memory leak
    return () => {
      loopend = true;
    };
  }, []);
  return (
    <canvas
      id="bubbles"
      className="h-[100dvh] w-full fixed top-0 left-0 mix-blend-dodge z-10 pointer-events-none"
      ref={canvasRef}
    />
  );
};

export default Bubbles;
