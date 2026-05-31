"use client";

import { useEffect, useState } from "react";

export default function LineLoader({ percent = 0 }: { percent: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percent);
    }, 100);

    return () => clearTimeout(timer);
  }, [percent])
  
    return (
    <div className="w-[70%] h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gray-400 transition-[width] duration-1000 ease-in-out"
        style={{ width: `${width}%` }}/>
    </div>
  );
}