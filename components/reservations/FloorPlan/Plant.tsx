"use client";

interface PlantProps {
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
}

const positions = {
  "top-left": "top-8 left-8",
  "top-right": "top-8 right-8",
  "bottom-left": "bottom-8 left-8",
  "bottom-right": "bottom-8 right-8",
};

export default function Plant({ position }: PlantProps) {
  return (
    <div className={`absolute ${positions[position]} pointer-events-none`}>
      {/* Shadow */}
      <div className="absolute left-1/2 top-[72px] h-5 w-12 -translate-x-1/2 rounded-full bg-black/35 blur-md" />

      <div className="relative flex flex-col items-center">
        {/* Leaves */}
        <div className="relative h-16 w-16">

          {/* Center */}
          <Leaf className="left-1/2 top-0 -translate-x-1/2 rotate-0 bg-[#2F7D32]" />

          {/* Upper */}
          <Leaf className="left-5 top-2 -rotate-35 bg-[#388E3C]" />
          <Leaf className="right-5 top-2 rotate-35 bg-[#388E3C]" />

          {/* Middle */}
          <Leaf className="left-2 top-5 -rotate-60 bg-[#2E7D32]" />
          <Leaf className="right-2 top-5 rotate-60 bg-[#2E7D32]" />

          {/* Bottom */}
          <Leaf className="left-4 top-8 -rotate-[80deg] bg-[#1B5E20]" />
          <Leaf className="right-4 top-8 rotate-[80deg] bg-[#1B5E20]" />

          {/* Small inner leaves */}
          <Leaf className="left-7 top-4 -rotate-20 h-7 w-2 bg-[#43A047]" />
          <Leaf className="right-7 top-4 rotate-20 h-7 w-2 bg-[#43A047]" />

          {/* Stem */}
          <div className="absolute left-1/2 bottom-1 h-4 w-[3px] -translate-x-1/2 rounded-full bg-[#5B3A24]" />
        </div>

        {/* Pot */}
        <div className="relative -mt-1">
          {/* Pot Rim */}
          <div className="absolute left-1/2 top-0 h-2 w-10 -translate-x-1/2 rounded-full bg-[#A77750]" />

          {/* Pot */}
          <div className="h-10 w-10 rounded-b-2xl rounded-t-lg border border-[#B8865A] bg-gradient-to-b from-[#9A6845] via-[#7A4E32] to-[#5B3822]" />

          {/* Highlight */}
          <div className="absolute left-2 top-2 h-5 w-1 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

function Leaf({ className }: { className?: string }) {
  return (
    <div
      className={`absolute h-9 w-3 rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.35)] ${className}`}
    />
  );
}