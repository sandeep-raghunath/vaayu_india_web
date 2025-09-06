import React from "react";
import { Sparkles, Snowflake, Lightbulb } from "lucide-react";

export default function CareerMission() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-12 text-left text-3xl font-semibold text-gray-900 md:text-4xl">
        At Vaayu, Every Role Contributes
        <br />
        To A Bigger Mission
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="flex h-60 flex-col justify-between rounded-xl bg-gradient-to-br from-yellow-50 to-white p-6 shadow-md">
          <Sparkles className="h-8 w-8 text-yellow-600" />
          <p className="font-medium text-gray-800">Reducing environmental impact</p>
        </div>

        {/* Card 2 */}
        <div className="flex h-60 flex-col justify-between rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-md">
          <Snowflake className="h-8 w-8 text-blue-600" />
          <p className="font-medium text-gray-800">Rethinking air cooling for tomorrow</p>
        </div>

        {/* Card 3 */}
        <div className="flex h-60 flex-col justify-between rounded-xl bg-gradient-to-br from-yellow-50 to-white p-6 shadow-md">
          <Lightbulb className="h-8 w-8 text-yellow-600" />
          <p className="font-medium text-gray-800">Creating change through innovation</p>
        </div>
      </div>
    </section>
  );
}
