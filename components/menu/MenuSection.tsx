"use client";

import Image from "next/image";
import { starters, mains, desserts, chefSpecial, menuImages } from "./menuData";

export default function MenuSection() {
  return (
    <section className="bg-[#F8F3ED] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#D68652]" />
            <p className="font-serif text-5xl font-semibold tracking-[6px] text-[#5B1F08]">
              MENU
            </p>
            <span className="h-px w-16 bg-[#D68652]" />
          </div>

          <p className="mt-3 italic text-[#8B5E3C]">
            Thoughtfully curated. Beautifully prepared.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-20">
          {/* LEFT */}
          <div>
            <h2 className="mb-10 border-b border-[#D9C6B6] pb-4 font-serif text-3xl font-semibold tracking-[6px] text-[#A65B2A]">
              STARTERS
            </h2>

            <div className="space-y-10">
              {starters.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between">
                    <h3 className="font-serif text-xl font-semibold text-[#5B1F08]">
                      {item.name}
                    </h3>

                    <span className="text-lg font-semibold text-[#D68652]">
                      ${item.price}
                    </span>
                  </div>

                  <p className="mt-2 leading-7 text-[#6A6A6A]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER */}

          <div className="flex flex-col items-center">
            <Image
              src={menuImages.featured}
              alt=""
              width={420}
              height={520}
              className="h-[340px] w-full rounded-t-full object-cover shadow-xl"
            />

            <div className="mt-10 w-full rounded-xl bg-[#F2E8DD] p-10 text-center shadow-lg">
              <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-[#D68652]">
                CHEFS SPECIAL
              </p>

              <h3 className="font-serif text-4xl font-semibold text-[#5B1F08]">
                {chefSpecial.name}
              </h3>

              <p className="my-5 text-5xl font-semibold text-[#D68652]">
                ${chefSpecial.price}
              </p>

              <p className="leading-8 text-[#666666]">
                {chefSpecial.description}
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h2 className="mb-10 border-b border-[#D68652]/30 pb-4 text-3xl tracking-[5px] text-[#A65B2A]">
              MAINS
            </h2>

            <div className="space-y-10">
              {starters.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between">
                    <h3 className="font-serif text-xl font-semibold text-[#5B1F08]">
                      {item.name}
                    </h3>

                    <span className="text-lg font-semibold text-[#D68652]">
                      ${item.price}
                    </span>
                  </div>

                  <p className="mt-2 leading-7 text-[#6A6A6A]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-20">
          <Image
            src={menuImages.pasta}
            alt=""
            width={450}
            height={520}
            className="h-[420px] w-full rounded-tl-[90px] object-cover shadow-xl"
          />

          <div>
            <h2 className="mb-10 border-b border-[#D68652]/30 pb-4 text-3xl tracking-[5px] text-[#A65B2A]">
              DESSERTS
            </h2>

            <div className="space-y-10">
              {starters.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between">
                    <h3 className="font-serif text-xl font-semibold text-[#5B1F08]">
                      {item.name}
                    </h3>

                    <span className="text-lg font-semibold text-[#D68652]">
                      ${item.price}
                    </span>
                  </div>

                  <p className="mt-2 leading-7 text-[#6A6A6A]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Image
            src={menuImages.dessert}
            alt=""
            width={450}
            height={520}
            className="h-[420px] w-full rounded-tr-[90px] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
