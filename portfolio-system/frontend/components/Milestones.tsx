"use client";

import React from "react";
import { Milestone } from "../app/fallbackData";

interface MilestonesProps {
  milestones: Milestone[];
}

export default function Milestones({ milestones }: MilestonesProps) {
  // Helpers to assign style properties based on milestone attributes
  const getMilestoneConfig = (type: string) => {
    switch (type) {
      case "internship":
        return {
          colorClass: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
          dotColor: "bg-emerald-500",
          icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        };
      case "award":
        return {
          colorClass: "text-amber-400 border-amber-500/30 bg-amber-950/20",
          dotColor: "bg-amber-500",
          icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          )
        };
      case "certification":
        return {
          colorClass: "text-purple-400 border-purple-500/30 bg-purple-950/20",
          dotColor: "bg-purple-500",
          icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        };
      case "education":
      default:
        return {
          colorClass: "text-indigo-400 border-indigo-500/30 bg-indigo-950/20",
          dotColor: "bg-indigo-500",
          icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          )
        };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "upcoming":
        return "Upcoming";
      case "in-progress":
      default:
        return "In Progress";
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-950/50 text-emerald-400 border-emerald-500/20";
      case "upcoming":
        return "bg-indigo-950/50 text-indigo-400 border-indigo-500/20";
      case "in-progress":
      default:
        return "bg-zinc-900 text-zinc-400 border-zinc-800";
    }
  };

  return (
    <section id="milestones" className="py-20 px-4 md:px-8 bg-zinc-950 border-b border-zinc-900 relative">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Academic & Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Milestones</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Timeline of education, key industry recognitions, and professional development milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {milestones.map((milestone) => {
            const config = getMilestoneConfig(milestone.type);
            return (
              <div key={milestone.id} className="relative group">
                
                {/* Connector Dot */}
                <span className={`absolute -left-[31px] md:-left-[47px] top-1.5 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-300`}>
                  <span className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full ${config.dotColor} group-hover:scale-125 transition-transform duration-300`} />
                </span>

                {/* Milestone Card */}
                <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 shadow-xl hover:shadow-indigo-500/5 relative flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  
                  {/* Left Column: Icon and Info */}
                  <div className="flex items-start space-x-4">
                    {/* Category Icon */}
                    <div className={`p-2.5 rounded-lg border flex-shrink-0 ${config.colorClass}`}>
                      {config.icon}
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base md:text-lg font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        {/* Status Badge */}
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getStatusBadgeClass(milestone.status)}`}>
                          {getStatusLabel(milestone.status)}
                        </span>
                      </div>

                      {/* Organization & Date */}
                      <div className="flex flex-wrap items-center text-xs md:text-sm text-zinc-400 gap-x-2 font-medium">
                        <span className="text-zinc-300">{milestone.organization}</span>
                        <span className="text-zinc-600 font-normal">|</span>
                        <span className="font-mono text-zinc-500 text-xs">{milestone.date}</span>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed pt-1">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
