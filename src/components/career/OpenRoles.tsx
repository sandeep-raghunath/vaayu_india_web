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
    {
      title: "Draughtsman (Project Engineer)",
      dept: "Engineering",
      type: "Full-Time",
      location: "Mumbai",
      skills_Required: [
        "AutoCAD (mandatory)",
        "HVAC / MEP drawings knowledge preferred",
        "Preparation of GA, detailed & as-built drawings",
        "Site visits for measurements and field verification",
        "Ability to generate leads & visit sites",
        "Understand technical requirements of clients",
        "Preparing HVAC Ducting drawings/models",
        "Presenting drawing/models to clients",
        "Ducting drawings",
        "Quotation (Excel) formations",
      ],
    },
    {
      title: "Sales Engineer",
      dept: "Sales",
      type: "Full-Time",
      location: "Indore",
      skills_Required: [
        "Identify and develop new business opportunities",
        "Build and manage strong client relationships",
        "Present HVAC solutions and submit proposals to customers",
        "Support market expansion and brand presence",
        "Execute consultative/solution-based selling",
        "Generate and convert leads into sales",
        "Ready to travel to sites across India",
        "Able to take measurements on site and communicate with the design team",
      ],
    },
  ];

  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLoc, setSelectedLoc] = useState("All Locations");

  const [expandedJobs, setExpandedJobs] = useState({});

  const toggleReadMore = (index) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
      <div className="mt-10 space-y-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, idx) => (
            <div key={idx} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {job.dept} | {job.type} | {job.location}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={() => toggleReadMore(idx)}
                    className="mt-4 text-sm font-medium text-blue-600 hover:underline"
                  >
                    {expandedJobs[idx] ? "Show Less" : "Read More"}
                  </button>

                  {/* Hidden initially, shown on click */}
                  {expandedJobs[idx] && (
                    <div className="mt-5">
                      <h4 className="mb-3 font-medium text-gray-800">Skills Required:</h4>

                      <ul className="list-disc space-y-2 pl-6 text-sm text-gray-600">
                        {job.skills_Required.map((skill, skillIdx) => (
                          <li key={skillIdx}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800">
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No roles found for selected filters.</p>
        )}
      </div>
    </section>
  );
}
