import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log("params new " + JSON.stringify(id));
  const projects = await prisma.projects.findMany({
    where: {
      id: decodeURIComponent(id),
    },
  });

  if (projects.length > 0) {
    return NextResponse.json({ data: projects, status: "success" });
  } else {
    return NextResponse.json({ data: projects, status: "No record found" });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deletedProj = await prisma.projects.delete({
      where: {
        id: id,
      },
    });
    console.log("deletedProj: " + deletedProj);
    return NextResponse.json({ data: deletedProj, status: "success" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error deleting project" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const {
    projectName,
    startDate,
    endDate,
    description,
    deploymentLink,
    githubLink,
  } = body;

  try {
    const newProj = await prisma.projects.update({
      where: {
        id: id,
      },
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
    return Response.json({ error: "Error updating project" }, { status: 500 });
  }
}
