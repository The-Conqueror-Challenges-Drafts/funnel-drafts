import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const cookieHeader = request.headers.get("cookie") ?? "";

	let email: string | undefined;
	let first_name: string | undefined;
	let last_name: string | undefined;
	try {
		const body = await request.json();
		email = body?.email ?? body?.data?.attributes?.email;
		first_name = body?.first_name ?? body?.data?.attributes?.first_name;
		last_name = body?.last_name ?? body?.data?.attributes?.last_name;
	} catch {
		return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
	}

	if (!email || typeof email !== "string") {
		return NextResponse.json({ error: "'email' is required" }, { status: 400 });
	}

	try {
		const klaviyoResponse = await fetch(
			"https://klaviyo-server.vercel.app/api/profiles",
			{
				method: "POST",
				headers: {
					accept: "application/vnd.api+json",
					"content-type": "application/vnd.api+json",
					revision: "2025-10-15",
					// Authorization can be enabled if needed:
					// Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`,
				},
				body: JSON.stringify({
					data: {
						type: "profile",
						attributes: { email, first_name, last_name },
					},
					cookies: cookieHeader,
				}),
			}
		);

		const contentType = klaviyoResponse.headers.get("content-type") || "";
		const text = await klaviyoResponse.text();
		let payload: unknown;
		try {
			payload = contentType.includes("application/json") ? JSON.parse(text) : { raw: text };
		} catch {
			payload = { raw: text };
		}

		return NextResponse.json(payload, { status: klaviyoResponse.status });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to contact Klaviyo server" },
			{ status: 502 }
		);
	}
}


