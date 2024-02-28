import { useState, useCallback } from 'react';

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
  const [num, setNum] = useState(init);
  return {
    getNext() {
      const newNum = Math.max(
        min,
        Math.min(max, num - maxDiff / 2 + Math.random() * maxDiff)
      );
      setNum(newNum);
      return newNum;
    },
    reset() {
      setNum(init);
    },
  };
};

export const useGenerateBubbleKeyframes = () => {
  const getR = useRandomGenerator({
    init: 1,
    maxDiff: 1,
    min: 0.5,
    max: 3.0,
  });
  const getV = useRandomGenerator({
    init: 25,
    maxDiff: 2,
    min: 20,
    max: 30,
  });
  const getTheta = useRandomGenerator({
    init: 90,
    maxDiff: 10,
    min: 30,
    max: 150,
  });
  return useCallback(() => {
    // TODO startを決めた後、次の点を打っていく
    // TODO 画面外に出たら終了
    const keyframes = [];
    const r = getR.getNext();
    let x = 30 + Math.random() * 60;
    let y = 0;
    getV.reset();
    getTheta.reset();
    while (y < 100) {
      const v = getV.getNext();
      const theta = getTheta.getNext();
      const dx = (v * Math.cos((theta * Math.PI) / 180)) / 10;
      const dy = (v * Math.sin((theta * Math.PI) / 180)) / 10;
      x += dx;
      y += dy;
      keyframes.push({
        transform: `translate(${x}vw, ${y}vh) scale(${r})`,
      });
    }
    console.log(keyframes);
    return keyframes;
  }, []);
};
