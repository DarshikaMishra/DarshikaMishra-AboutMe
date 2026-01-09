"use client";

import { useEffect, useState } from "react";
import { Page } from "@/components/ui/Page";

import styles from "./page.module.css";
import Link from "next/link";

interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: Date; // or Date if you convert it
  endDate: Date;
  description: string;
}

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/api/experience");

        if (!response.ok) {
          throw new Error("Response status: " + response.status);
        }

        const result = await response.json();
        console.log("result" + result.data);
        setExperiences(result.data);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  console.log("returning page");
  return (
    <Page>
      <div className={styles.page}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.expBackground}>
            <div className={styles.label}>Title:</div> {exp.title}
            <div className={styles.label}>Company: </div> {exp.company}
            <div className={styles.label}>Location: </div> {exp.location}
            <div className={styles.label}>Description: </div>
            {exp.description}
            <div className={styles.label}>Start Date: </div>{" "}
            <span>
              {Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
                timeStyle: "short",
              }).format(new Date(exp.startDate))}
            </span>
            <div className={styles.label}>End Date: </div>{" "}
            <span>
              {Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
                timeStyle: "short",
              }).format(new Date(exp.endDate))}
            </span>
          </div>
        ))}
      </div>
    </Page>

    // <div className="flex flex-col items-center justify-center bg-white p-5">
    //   <h1>Experiences</h1>
    // </div>
  );
}
