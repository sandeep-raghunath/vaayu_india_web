import Image from "next/image";
import React from "react";

export default function PressIntro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        {/* Left text */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Press & Media</h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest news, announcements, and stories about Vaayu’s journey in
            sustainable cooling. From product launches to global recognitions, explore how we’re
            making headlines across industries and borders.
          </p>
        </div>

        {/* Right image */}
        <div className="overflow-hidden rounded-2xl shadow-md">
          <Image
            src="/images/press/press-intro.jpg"
            alt="Press Media"
            width={800}
            height={500}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
