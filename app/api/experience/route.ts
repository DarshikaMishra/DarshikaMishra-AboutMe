import prisma from "@/lib/prisma";

//import { connectToDatabase } from "@/lib/mongoose";

export async function GET(request: Request) {
  //const con = await connectToDatabase();

  const exps = await prisma.experience.findMany();

  return new Response("from experience get, connected, " + exps);
}

export async function POST(request: Request) {
  return new Response("from experience post");
}
