"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
} from "motion/react";

interface AnimatedNumberProps {
  value: number;
  unit: string;
  duration?: number;
}

export default function AnimatedNumber({
  value,
  unit,
  duration = 2,
}:AnimatedNumberProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  const inView = useInView(containerRef, { once: true, amount: 0.05 });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: duration,
        onUpdate(latest) {
          if (numberRef.current) {
            numberRef.current.textContent = Math.round(latest).toString();
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return (
    <span
      ref={containerRef}
      className="text-4xl md:text-5xl font-extrabold text-white flex items-baseline"
    >
      <span ref={numberRef}>0</span>
      <span className="text-3xl md:text-4xl font-extrabold text-white ml-1">
        {unit}
      </span>
    </span>
  );
};