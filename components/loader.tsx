import Image from "next/image";
import { useState, useEffect } from "react";

export const Loader = () => {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prevCount) => (prevCount < 3 ? prevCount + 1 : 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    const dots = Array.from({ length: dotCount }, (_, index) => index + 1);
    return dots.map((dot) => (
      <span key={dot} className="text-black">
        .
      </span>
    ));
  };

  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className="text-sm text-black">
        QuantumMind Is Thinking{renderDots()}
      </p>
    </div>
  );
};
