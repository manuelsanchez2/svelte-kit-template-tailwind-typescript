import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ fetch }) => {
  //  Invalidate the data when 'api:example' changes
  //  depends('api:example');

  const res = await fetch("/api/example")
  const data = await res.json()

  const { message } = data

  return { message }
}
