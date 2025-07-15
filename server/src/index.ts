import { Hono } from "hono";
import { cors } from "hono/cors";
import type { ApiResponse } from "shared/dist";

export const app = new Hono()

.use(cors())

.onError((err, c) => {
  console.error(`${err}`)
  return c.json({ error: err.message }, 500)
})

.get("/", (c) => {
	return c.text("Hello Hono!");
})

// Proxy search to Gutendex
// TODO: Implement server-side caching for Gutendex responses to improve performance and reduce external API calls.





.get("/hello", async (c) => {
	const data: ApiResponse = {
		message: "Hello BHVR!",
		success: true,
	};

	return c.json(data, { status: 200 });
})

.post("/auth/login", async (c) => {
    return c.json({ message: "Login system coming soon!" }, 501);
});


export default app;