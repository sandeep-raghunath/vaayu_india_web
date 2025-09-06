"use client";
import React, { useState } from "react";

export default function CareerOpenRoles() {
  const departments = ["All Departments", "Engineering", "Marketing", "Sales", "HR", "Design"];
  const locations = [
    "All Locations",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Indore",
  ];

  const jobs = [
    { title: "Product Development", dept: "Engineering", type: "Full-Time", location: "Mumbai" },
    { title: "UI/UX Designer", dept: "Design", type: "Full-Time", location: "Bangalore" },
    { title: "Sales Executive", dept: "Sales", type: "Full-Time", location: "Delhi" },
    { title: "HR Specialist", dept: "HR", type: "Part-Time", location: "Pune" },
    { title: "Marketing Manager", dept: "Marketing", type: "Full-Time", location: "Hyderabad" },
    { title: "Backend Engineer", dept: "Engineering", type: "Full-Time", location: "Chennai" },
    { title: "Frontend Developer", dept: "Engineering", type: "Internship", location: "Kolkata" },
    { title: "Recruitment Associate", dept: "HR", type: "Full-Time", location: "Ahmedabad" },
    { title: "Graphic Designer", dept: "Design", type: "Full-Time", location: "Jaipur" },
    { title: "Business Development Manager", dept: "Sales", type: "Full-Time", location: "Indore" },
  ];

  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLoc, setSelectedLoc] = useState("All Locations");

  const filteredJobs = jobs.filter(
    (job) =>
      (selectedDept === "All Departments" || job.dept === selectedDept) &&
      (selectedLoc === "All Locations" || job.location === selectedLoc)
  );

  return (
    <section id="open-roles" className="mx-auto max-w-7xl bg-gray-50 px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
        Open Roles At Vaayu
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        We&apos;re looking for mission-driven individuals who care about clean technology, climate,
        and meaningful innovation.
      </p>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <select
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
          className="rounded-lg border px-4 py-2 text-gray-700 shadow-sm"
        >
          {departments.map((dept) => (
            <option key={dept}>{dept}</option>
          ))}
        </select>

        <select
          value={selectedLoc}
          onChange={(e) => setSelectedLoc(e.target.value)}
          className="rounded-lg border px-4 py-2 text-gray-700 shadow-sm"
        >
          {locations.map((loc) => (
            <option key={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Job Listings */}
      <div className="mt-10 space-y-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, idx) => (
            <div key={idx} className="flex items-center justify-between rounded-lg border-b pb-4">
              <div>
                <h3 className="font-semibold text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-500">
                  {job.dept} | {job.type} | {job.location}
                </p>
              </div>
              <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800">
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No roles found for selected filters.</p>
        )}
      </div>
    </section>
  );
}
