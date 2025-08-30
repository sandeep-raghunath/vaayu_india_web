import React from "react";

export default function Leadership() {
  return (
    <section className="mx-auto max-w-7xl space-y-16 px-16 py-16">
      {/* Priyanka */}
      <div className="grid items-center gap-1 md:grid-cols-2">
        <img src="/images/about/priyanka.png" alt="Dr. Priyanka Mokshmar" className="rounded-xl" />
        <div>
          <h3 className="text-2xl font-bold">Dr. Priyanka Mokshmar</h3>
          <p className="text-gray-500">Founder & CMD, Vaayu Aircon</p>
          <p className="mt-4 text-gray-700">
            Meet the force revolutionizing HVAC. With 12+ years of expertise, Dr. Mokshmar founded
            Vaayu to build what's next: intelligent, sustainable air solutions.
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-2 text-gray-700">
            <li>
              <strong>Innovator:</strong> Her vision has led Vaayu to win the SKOCH Award, be named
              a Top 100 SME, and secure her a spot as a Top Woman in Tech.
            </li>
            <li>
              <strong>Global Ambassador:</strong> She represents Indian ingenuity on the world
              stage.
            </li>
            <li>
              <strong>Mentor:</strong> She’s igniting the future for women in tech via platforms
              like NITI Aayog and Goldman Sachs.
            </li>
          </ul>
        </div>
      </div>

      {/* Pranav */}
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold">Mr. Pranav Mokshmar</h3>
          <p className="text-gray-500">Managing Director, Vaayu</p>
          <p className="text-sm text-gray-500">
            Hybrid AHU Visionary | Sustainable Cooling Advocate | HVAC Innovator
          </p>
          <p className="mt-4 text-gray-700">
            Pranav Mokshmar, a pioneer in Hybrid AHU tech, combines deep engineering expertise with
            a mission for sustainability...
          </p>
        </div>
        <img src="/images/about/pranav.png" alt="Mr. Pranav Mokshmar" className="rounded-xl" />
      </div>
    </section>
  );
}
