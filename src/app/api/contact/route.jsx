export async function POST(request) {
  const body = await request.json();

  // Simulate saving the contact message (e.g., saving to a database or sending an email)
  console.log("New contact message:", body);

  return new Response(JSON.stringify({ message: "Thank you for contacting us!" }), { status: 200, headers: { "Content-Type": "application/json" } });
}
