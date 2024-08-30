// to be an api, it must have the +api.ts
// we are in the api of /user
import { neon } from "@neondatabase/serverless";

export async function POST(req: Request) {
  try {
    const sql = neon(process.env.DATABASE_URL as string);
    const { name, email, clerkId } = await req.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        {
          error: "Messing Required Field",
        },
        {
          status: 400,
        }
      );
    }

    const res = await sql`
    INSERT INTO users (
    name,
    email,
    clerk_id
)
    VALUES (
    ${name},
    ${email},
    ${clerkId}
)
    `;

    return new Response(JSON.stringify({ data: res }), { status: 201 });
  } catch (err) {
    console.log(err)
    return Response.json({error:err}, {status:500})
  }
}
