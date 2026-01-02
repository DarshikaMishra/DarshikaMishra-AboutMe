import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await prisma.projects.findMany();

  return NextResponse.json({ data: projects, status: "success" });
}

export async function POST(request: Request) {
  const {
    projectName,
    startDate,
    endDate,
    description,
    deploymentLink,
    githubLink,
  } = await request.json();
  console.log(
    "projectName: " +
      projectName +
      " startDate: " +
      startDate +
      " endDate: " +
      endDate +
      " description: " +
      description +
      " deploymentLink: " +
      deploymentLink +
      " githubLink: " +
      githubLink
  );

  try {
    const newProj = await prisma.projects.create({
      data: {
        projectName,
        startDate: new Date(Date.parse(startDate)),
        endDate: new Date(Date.parse(endDate)),
        description,
        deploymentLink,
        githubLink,
      },
    });
    return Response.json({ data: newProj, status: "success" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error creating project" }, { status: 500 });
  }
}
