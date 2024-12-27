import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const resendEmail = process.env.RESEND_EMAIL_ADDRESS ?? "";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Invalid Content-Type");
      return new Response(JSON.stringify({ error: "Invalid Content-Type" }), {
        status: 400,
      });
    }

    const json = await request.json();
    const { name, email, message } = json;
    const { data, error } = await resend.emails.send({
      from: resendEmail,
      to: [resendEmail],
      subject: "Message from matg.dev",
      html: `Message from ${name} (${email}):<br><br>${message}`,
    });

    if (error) {
      console.log("Error sending email:", error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
