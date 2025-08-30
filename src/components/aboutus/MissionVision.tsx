import React from "react";

export default function MissionVision() {
  return (
    <section className="mx-auto mt-10 grid max-w-6xl overflow-hidden rounded-2xl bg-gray-100 px-6 md:grid-cols-2">
      <div className="p-6">
        <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
        <p className="mb-6 text-gray-700">
          Our mission is to engineer sustainable air cooling systems that improve quality of life by
          creating comfortable, healthy environments while upholding our commitment to environmental
          stewardship.
        </p>
        <h3 className="mb-4 text-2xl font-semibold">Our Vision</h3>
        <p className="text-gray-700">
          We are dedicated to enhancing human comfort and wellness through innovative air cooling
          solutions that prioritize energy efficiency and environmental responsibility.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-blue-900 p-10 text-white">
        <p className="text-7xl font-bold">15</p>
        <p className="mt-2 text-lg">Years Of Innovation</p>
      </div>
    </section>
  );
}
