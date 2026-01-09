"use client";

import { useEffect, useState } from "react";

import styles from "./page.module.css";
import { Page } from "@/components/ui/Page";
import Link from "next/link";

interface Project {
  id: string;
  projectName: string;
  deploymentLink: string;
  githubLink: string;
  startDate: Date; // or Date if you convert it
  endDate: Date;
  description: string;
}

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/api/project");

        if (!response.ok) {
          throw new Error("Response status: " + response.status);
        }

        const result = await response.json();
        console.log("result" + result.data);
        setProjects(result.data);
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
        {projects.map((exp) => (
          <div key={exp.id} className={styles.projBackground}>
            <div className={styles.label}>Project Name:</div> {exp.projectName}
            <div className={styles.label}>Description: </div> {exp.description}
            <div className={styles.label}>Deployment Link: </div>{" "}
            {exp.deploymentLink}
            <div className={styles.label}>Github Link: </div>
            {exp.githubLink}
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
