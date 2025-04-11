// app/api/services/route.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
      const services = await prisma.service.findMany();
      return new Response(JSON.stringify(services), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching services:", error);
      return new Response(JSON.stringify({ error: "Failed to fetch services" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  

export async function POST(req: Request) {
    const body = await req.json();
    const { name, status } = body;

    const newService = await prisma.service.create({
        data: { name, status },
    });

    return new Response(JSON.stringify(newService), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}
