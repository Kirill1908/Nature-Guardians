"use client";

import { donutChart } from "@/data/donutChart";
import { Logo } from "../../ui/Logo/Logo";

const SIZE = 262;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = 100;
const STROKE = 60;
const GAP = 0;

const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ~628.3

export default function DonutChart() {
  return (
    <div className="relative w-93.75 h-93.75">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        width={SIZE}
        height={SIZE}
        className="w-full h-full block"
        // style={{ display: "block", width:"100%", height:"100%" }}
      >
        {/* Background ring */}
        <circle
          cx={CX}
          cy={CY}
          r={RADIUS}
          fill="none"
          stroke="#1a1a1a"
          strokeWidth={STROKE}
        />

        {donutChart.map((item, index) => {
          const previousPercentSum = donutChart
            .slice(0, index)
            .reduce((sum, currentItem) => sum + currentItem.percent, 0);

          const offsetDeg = +(previousPercentSum / 100) * 360;
          const sliceDeg = (item.percent / 100) * 360 - GAP;
          const dashLen = (sliceDeg / 360) * CIRCUMFERENCE;
          const offset = (offsetDeg / 360) * CIRCUMFERENCE;

          return (
            <circle
              key={item.label}
              cx={CX}
              cy={CY}
              r={RADIUS}
              fill="none"
              stroke={item.color}
              strokeWidth={STROKE}
              strokeDasharray={`${dashLen} ${CIRCUMFERENCE - dashLen}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${CX} ${CY})`}
              style={{ transition: "stroke-dasharray 0.6s ease" }}
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Logo variant="footer" className="w-40" />
      </div>
    </div>
  );
}
