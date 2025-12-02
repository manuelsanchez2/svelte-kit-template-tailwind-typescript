import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

// ================================================================
// GET — SIMPLE VERSION
// ================================================================
export const GET: RequestHandler = async () => {
  const message = "Hello, this is an example from an API endpoint!"
  return json({ message })
}

// ================================================================
// POST — FULL STATUS-AWARE VERSION
// ================================================================
export const POST: RequestHandler = async ({ request }) => {
  const now = new Date()

  try {
    const data = await request.json()
    console.log("Received data:", data)
  } catch (error) {
    console.error("Error processing POST request:", error)
    return json(
      { error: "Internal Server Error" },
      {
        status: 500,
      }
    )
  }

  return json({ timestamp: now.toISOString() }, { status: 201 })
}
