import { useEffect, useRef } from 'react';

const makeRandomGenerator = ({
  init,
  maxDiff,
  min,
  max,
}: {
  init: number;
  maxDiff: number;
  min: number;
  max: number;
}) => {
  let num = init;
  return {
    getNext() {
      const newNum = Math.max(
        min,
        Math.min(max, num - maxDiff / 2 + Math.random() * maxDiff)
      );
      num = newNum;
      return newNum;
    },
    reset() {
      num = init;
    },
  };
};

const generateKeyframes = () => {
  const getR = makeRandomGenerator({
    init: 1.6,
    maxDiff: 1.4,
    min: 0.2,
    max: 3.0,
  });
  const getV = makeRandomGenerator({
    init: 25,
    maxDiff: 2,
    min: 20,
    max: 30,
  });
  const getTheta = makeRandomGenerator({
    init: 270,
    maxDiff: 10,
    min: 210,
    max: 330,
  });
  const keyframes = [];
  const r = getR.getNext();
  let x = Math.random() * 100;
  let y = 110;
  getV.reset();
  getTheta.reset();
  while (x >= -30 && x <= 130 && y >= -30) {
    const v = getV.getNext();
    const theta = getTheta.getNext();
    const dx = (v * Math.cos((theta * Math.PI) / 180)) / 10;
    const dy = (v * Math.sin((theta * Math.PI) / 180)) / 10;
    x += dx;
    y += dy;
    keyframes.push({
      transform: `translate(${x}dvw, ${y}dvh) scale(${r})`,
    });
  }
  return keyframes;
};

const Bubble = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const animateBubble = () => {
      const keyframes = generateKeyframes();
      const animation = ref.current?.animate(keyframes, {
        duration: 20000,
        delay: Math.random() * 10000,
      });
      if (!animation) {
        return;
      }
      animation.onfinish = (_) => {
        requestAnimationFrame(animateBubble);
      };
    };
    window.requestAnimationFrame(animateBubble);
  }, []);
  return (
    <div
      ref={ref}
      className="w-[30px] h-[30px] z-10 absolute transition-all border lg:border-2 bg-primary/10 border-primary/50 rounded-[50%] opacity-50"
    />
  );
};

export default Bubble;
