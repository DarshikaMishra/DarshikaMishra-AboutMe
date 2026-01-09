import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const exps = await prisma.experience.findMany();

  return NextResponse.json({ data: exps, status: "success" });
}

export async function POST(request: NextRequest) {
  const { company, title, location, startDate, endDate, description } =
    await request.json();

  console.log(
    "company: " +
      company +
      " title: " +
      title +
      " location: " +
      location +
      " startDate: " +
      startDate +
      " endDate: " +
      endDate +
      " description: " +
      description
  );

  try {
    const newExp = await prisma.experience.create({
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
      { error: "Error creating experience" },
      { status: 500 }
    );
  }
}
