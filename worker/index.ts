// Cloudflare Worker for eldenhub.appforgelabs.com.
// Static files come from the Next static export in ./out (see wrangler.jsonc).
// The only dynamic route is POST /api/send-feedback, which emails the message
// to FEEDBACK_TO through Resend. Secrets: RESEND_API_KEY, FEEDBACK_TO.

type TEnv = {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  RESEND_API_KEY: string;
  FEEDBACK_TO: string;
};

const MAX_MESSAGE_LENGTH = 5000;

function json(status: number, body: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function sendFeedback(request: Request, env: TEnv): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(`Method ${request.method} Not Allowed`, {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  let message: unknown;
  try {
    message = ((await request.json()) as { message?: unknown }).message;
  } catch {
    return json(400, { status: "error", message: "Invalid JSON" });
  }
  if (
    typeof message !== "string" ||
    message.trim().length === 0 ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return json(400, { status: "error", message: "Invalid message" });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "EldenHub Feedback <feedback@appforgelabs.com>",
      to: env.FEEDBACK_TO,
      subject: "Elden Ring Builds Feedback",
      text: message,
    }),
  });

  if (!response.ok) {
    console.log("resend error", response.status, await response.text());
    return json(500, { status: "error", message: "Error sending email" });
  }
  return json(200, { status: "ok", message: "Email successfully sent" });
}

export default {
  async fetch(request: Request, env: TEnv): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/send-feedback") return sendFeedback(request, env);
    return env.ASSETS.fetch(request);
  },
};
