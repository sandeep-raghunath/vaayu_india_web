import React from "react";
import Image from "next/image";

export default function Roadmap() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center">
      <Image
        src="/images/about/roadmap.png"
        alt="Vaayu Roadmap"
        width={1600}
        height={900}
        sizes="100vw"
        className="h-auto w-full rounded-2xl shadow-lg"
      />
    </section>
  );
}
