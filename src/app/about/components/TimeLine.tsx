"use client";

import Link from "next/link";
import { workExperiences } from "@/app/experience/data/experiences";
import { activePalette } from "@/logic/_core/common/colors";
import { motion } from "motion/react";

const COLUMNS_PER_YEAR = 4;

const getQuarterIndex = (date: Date): number =>
  date.getFullYear() * COLUMNS_PER_YEAR +
  Math.floor(date.getMonth() / 3);

const getDurationYears = (start: Date, end: Date): number => {
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();

  return Math.max(1, Math.ceil(months / 12));
};

const TimeLine = () => {
  const currentDate = new Date();
  const currentQuarter = getQuarterIndex(currentDate);

  const timelineItems = workExperiences.map((experience) => {
    const startQuarter = getQuarterIndex(experience.period.start);
    const endQuarter = experience.period.end
      ? getQuarterIndex(experience.period.end)
      : currentQuarter;

    return {
      experience,
      startColumn: startQuarter,
      columnSpan: Math.max(2, endQuarter - startQuarter + 1),
      durationYears: getDurationYears(
        experience.period.start,
        experience.period.end ?? currentDate
      ),
    };
  });

  const minQuarter = Math.min(
    ...timelineItems.map((item) => item.startColumn)
  );

  const maxQuarter = Math.max(
    ...timelineItems.map(
      (item) => item.startColumn + item.columnSpan - 1
    )
  );

  const totalColumns = maxQuarter - minQuarter + 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="timeline-grid gap-y-4"
      style={
        {
          "--timeline-columns": totalColumns,
        } as React.CSSProperties
      }
    >
      {timelineItems.map(
        ({ experience, startColumn, columnSpan, durationYears }) => {
          const gridColumnStart = startColumn - minQuarter + 1;

          return (
            <Link
              key={experience.id}
              href={`/experience?id=${encodeURIComponent(experience.company)}`}
              style={
                {
                  "--timeline-start": gridColumnStart,
                  "--timeline-span": columnSpan,
                } as React.CSSProperties
              }
              className={`
                timeline-item
                flex justify-between items-center
                rounded-4xl py-4 px-8
                ${activePalette.bg.primary["500"]} text-white
                ${activePalette.bg.selection} cursor-pointer
                ${activePalette.bg.hover["600"]} hover:shadow-2xl
              `}
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-xl lg:text-2xl">
                  {experience.company}
                </h2>

                <h3 className="font-normal text-md lg:text-lg">
                  {experience.role}
                </h3>
              </div>

              <span className="text-3xl font-semibold">
                {durationYears}
                {!experience.period.end ? "+" : ""}
              </span>
            </Link>
          );
        }
      )}
    </motion.div>
  );
};

export default TimeLine;