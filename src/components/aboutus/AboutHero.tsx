import React from "react";

export default function AboutHero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2">
      <div>
        <h1 className="mb-4 text-4xl font-bold">About Us.</h1>
        <h2 className="mb-4 text-xl font-semibold">Beyond Cool.</h2>
        <p className="mb-4 text-gray-700">
          Vaayu Aircon is rewriting the rules. Our smart Hybrid AHUs slash energy and water use,
          future-proofing your business and the planet.
        </p>
        <p className="text-gray-700">
          At Vaayu Aircon, we don’t just cool spaces—we redefine them. We engineer next-generation
          Hybrid AHUs that deliver powerful, sustainable performance while drastically cutting
          energy and water consumption. We're leading the charge with smart, scalable tech for a
          cooler future.
        </p>
      </div>
      <div>
        <img
          src="/images/about/team-trophy.jpg"
          alt="Vaayu team with awards"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
