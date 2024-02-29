import { useGenerateBubbleKeyframes } from '@/hooks/view/bubble';
import { useEffect, useRef } from 'react';

const Bubble = () => {
  const generateBubble = useGenerateBubbleKeyframes();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
    animateBubble();
  }, []);
  return (
    <div
      ref={ref}
      className="w-[30px] h-[30px] z-10 absolute transition-all pointer-none border lg:border-2 bg-primary/10 border-primary/50 rounded-[50%]"
    />
  );
};

export default Bubble;
