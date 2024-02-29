import { useRef } from 'react';

const useRandomGenerator = ({
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
  const num = useRef(init);
  return {
    getNext() {
      const newNum = Math.max(
        min,
        Math.min(max, num.current - maxDiff / 2 + Math.random() * maxDiff)
      );
      num.current = newNum;
      return newNum;
    },
    reset() {
      num.current = init;
    },
  };
};

export const useGenerateBubbleKeyframes = () => {
  const getR = useRandomGenerator({
    init: 1.6,
    maxDiff: 1.4,
    min: 0.2,
    max: 3.0,
  });
  const getV = useRandomGenerator({
    init: 25,
    maxDiff: 2,
    min: 20,
    max: 30,
  });
  const getTheta = useRandomGenerator({
    init: 270,
    maxDiff: 10,
    min: 210,
    max: 330,
  });
  return () => {
    const keyframes = [];
    const r = getR.getNext();
    let x = Math.random() * 100;
    let y = 110;
    getV.reset();
    getTheta.reset();
    while (y > -10) {
      const v = getV.getNext();
      const theta = getTheta.getNext();
      const dx = (v * Math.cos((theta * Math.PI) / 180)) / 10;
      const dy = (v * Math.sin((theta * Math.PI) / 180)) / 10;
      x += dx;
      y += dy;
      keyframes.push({
        transform: `translate(${x}dvw, ${y}dvh) scale(${r})`,
        opacity: (y / 2 + 10) / 100,
      });
    }
    return keyframes;
  };
};
