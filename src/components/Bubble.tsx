import { useGenerateBubbleKeyframes } from '@/hooks/view/bubble';
import { useEffect, useRef } from 'react';

const Bubble = () => {
  const generateBubble = useGenerateBubbleKeyframes();
  const ref = useRef<HTMLDivElement>(null);
  const animateBubble = () => {
    setTimeout(() => {
      const keyframes = generateBubble();
      const animation = ref.current?.animate(keyframes, {
        duration: 20000,
      });
      if (!animation) {
        return;
      }
      animation.onfinish = (_) => {
        animateBubble();
      };
    }, Math.random() * 10000);
  };
  useEffect(() => {
    animateBubble();
  }, []);
  return (
    <div
      ref={ref}
      className="h-10 w-10 z-10 background-black border-3 absolute border-black rounded-[50%] transiion-all pointer-none opacity-30"
    />
  );
};

export default Bubble;
