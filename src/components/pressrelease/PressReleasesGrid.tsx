"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";

const initialReleases = [
  "/images/press/release1.jpg",
  "/images/press/release2.jpg",
  "/images/press/release3.jpg",
  "/images/press/release4.jpg",
  "/images/press/release5.jpg",
  "/images/press/release6.jpg",
];

export default function PressReleasesGrid() {
  const [visible, setVisible] = useState(6);

  const showMore = () => setVisible((prev) => prev + 6);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900">Read Latest Press Release</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {initialReleases.slice(0, visible).map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl bg-indigo-50 p-4 shadow-sm">
            <Image
              src={img}
              alt={`Press Release ${idx + 1}`}
              width={500}
              height={700}
              className="h-auto w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* View more button */}
      {visible < initialReleases.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={showMore}
            className="rounded-full border border-indigo-500 px-6 py-2 text-indigo-600 transition hover:bg-indigo-50"
          >
            View more
          </button>
        </div>
      )}
    </section>
  );
}
