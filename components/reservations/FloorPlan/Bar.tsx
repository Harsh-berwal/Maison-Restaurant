"use client";

export default function Bar() {
  return (
    <div className="relative flex items-center">
      {/* Shadow */}
      <div className="absolute left-14 top-4 h-[260px] w-[110px] rounded-full bg-black/30 blur-2xl" />

      {/*  STOOLS  */}
      <div className="mr-5 flex flex-col gap-7 py-5">
        {[1, 2, 3].map((item) => (
          <div key={item} className="relative">
            {/* Shadow */}
            <div className="absolute h-9 w-9 rounded-full bg-black/25 blur-sm" />

            {/* Stool */}
            <div className="relative flex h-6 w-6 items-center justify-center rounded-full border border-[#C89A63] bg-gradient-to-br from-[#8A532D] via-[#6D3F24] to-[#4A2816] shadow-lg">
              <div className="h-5 w-5 rounded-full bg-[#B88457]" />
            </div>
          </div>
        ))}
      </div>

      {/*  BAR  */}
      <div
        className="
          relative
          h-[250px]
          w-[92px]
          overflow-hidden
          rounded-l-[48px]
          rounded-r-[28px]
          border
          border-[#9A6A45]
          bg-gradient-to-b
          from-[#704324]
          via-[#4F2D1B]
          to-[#2E1A10]
          shadow-[0_20px_40px_rgba(0,0,0,.45)]
        "
      >
        {/* Wood Grain */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-4 h-full w-[2px] bg-white/10" />
          <div className="absolute left-8 h-full w-[1px] bg-white/5" />
          <div className="absolute left-12 h-full w-[2px] bg-white/10" />
          <div className="absolute left-16 h-full w-[1px] bg-white/5" />
          <div className="absolute left-20 h-full w-[2px] bg-white/10" />
        </div>

        {/* Gloss */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />

        {/* Counter Top */}
        <div className="absolute left-1/2 top-4 h-5 w-[74px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#C89A63] to-[#9A6A45]" />

        {/* Decorative Lights */}
        <div className="absolute left-1/2 top-6 h-2 w-2 -translate-x-1/2 rounded-full bg-[#FFD46B] shadow-[0_0_10px_#FFD46B]" />

        <div className="absolute bottom-6 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#FFD46B] shadow-[0_0_10px_#FFD46B]" />

        {/* BAR Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rotate-90 text-lg font-semibold tracking-[0.45em] text-[#E7C38A]">
            BAR
          </span>
        </div>
      </div>
    </div>
  );
}