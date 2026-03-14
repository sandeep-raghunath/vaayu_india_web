"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Efficiency() {
  const router = useRouter();
  return (
    <section className="px-4 py-12 sm:py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        {/* Left Image */}
        <motion.div
          className="w-full overflow-hidden rounded-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <Image
            src="/images/home/efficiency/efficiency.png"
            alt="Vaayu Cooling System"
            width={525}
            height={700}
            className="h-auto w-full max-w-full object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 525px"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="px-2 sm:px-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="mb-3 text-xl leading-snug font-medium text-black sm:text-3xl md:text-4xl">
            High Cooling Efficiency. <br />
            Lower Energy Bills.
          </h2>
          <p className="mb-6 text-sm leading-snug text-black sm:text-lg md:text-2xl">
            Vaayu provides <strong>energy-efficient air cooling systems </strong>designed to keep
            large spaces cool while using significantly less electricity than traditional air
            conditioners. Our solutions deliver fresh air, consistent performance, and lower
            operating costs for commercial and industrial environments.
          </p>

          <h3 className="mb-3 text-sm leading-relaxed text-black sm:text-lg md:text-2xl">
            Our Cooling Solutions:
          </h3>

          <ul className="mb-6 space-y-4 sm:space-y-8">
            <li className="border-b border-gray-200 pb-2">
              <p className="text-sm font-bold text-black sm:text-lg">
                Single Stage Evaporative Cooling
              </p>
              <p className="text-xs text-black sm:text-base">
                Reliable and cost-effective cooling for everyday industrial and commercial use.
              </p>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <p className="text-sm font-bold text-black sm:text-lg">
                Dual Stage Evaporative Cooling
              </p>
              <p className="text-xs text-black sm:text-base">
                Enhanced cooling performance with higher efficiency for hotter climates and larger
                spaces.
              </p>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <p className="text-sm font-bold text-black sm:text-lg">Hybrid Air Washer</p>
              <p className="text-xs text-black sm:text-base">
                Advanced hybrid technology that combines powerful cooling with low energy
                consumption and improved air quality.
              </p>
            </li>
            <li className="border-b border-gray-200 pb-2">
              <p className="text-sm font-bold text-black sm:text-lg">
                Treated Fresh Air (TFA) &amp; Fresh Air Handling Units (FAHU)
              </p>
              <p className="text-xs text-black sm:text-base">
                Designed to supply <strong>100% fresh, clean, and cool air,</strong> these systems
                improve ventilation while maintaining comfortable indoor temperatures for large
                commercial and industrial spaces.
              </p>
            </li>
          </ul>

          <p className="mb-4 text-xs leading-normal text-black sm:text-base md:text-base">
            With Vaayu’s energy-efficient cooling solutions, you get reliable performance, fresh air
            circulation, and significantly lower electricity costs.
          </p>

          <button
            className="bg-primary rounded-full px-4 py-2 text-sm font-medium text-white transition hover:scale-105 sm:text-base"
            onClick={() => router.push("/product")}
          >
            Explore Our Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
