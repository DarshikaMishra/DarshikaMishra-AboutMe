import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log("params new " + JSON.stringify(id));
  const exps = await prisma.experience.findMany({
    where: {
      id: id,
    },
  });
  if (exps.length > 0) {
    return NextResponse.json({ data: exps, status: "success" });
  } else {
    return NextResponse.json({ data: exps, status: "No record found" });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deletedExp = await prisma.experience.delete({
      where: {
        id: id,
      },
    });
    console.log("deletedExp: " + deletedExp);
    return NextResponse.json({ data: deletedExp, status: "success" });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Error deleting experience" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { company, title, location, startDate, endDate, description } = body;

  try {
    const newExp = await prisma.experience.update({
      where: {
        id: id,
      },
      data: {
        company,
        title,
        location,
        startDate: new Date(Date.parse(startDate)),
        endDate: new Date(Date.parse(endDate)),
        description,
      },
    });
    return Response.json({ data: newExp, status: "success" });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Error updating experience" },
      { status: 500 }
    );
  }
}
