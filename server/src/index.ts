import { Hono } from "hono";
import { cors } from "hono/cors";
import type { ApiResponse, Book } from "shared/dist";
import axios from "axios";

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
app.get('/books', async (c) => {
	const query = c.req.query('q') || '';
	const page = c.req.query('page') || '1';
    const author = c.req.query('author') || '';
    const title = c.req.query('title') || '';
    const languages = c.req.query('languages') || '';
  
	try {
        const params: { [key: string]: string } = {
            search: query,
            page: page,
        };

        if (author) params.author = author;
        if (title) params.title = title;
        if (languages) params.languages = languages;

	  const response = await axios.get(`https://gutendex.com/books`, {
		params: params
	  });

      const books: Book[] = response.data.results.map((book: any) => ({
        id: book.id,
        title: book.title,
        authors: book.authors,
        subjects: book.subjects,
        bookshelves: book.bookshelves,
        languages: book.languages,
        copyright: book.copyright,
        media_type: book.media_type,
        formats: book.formats,
        download_count: book.download_count,
      }));

	  return c.json({
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        results: books,
      });
	} catch (err: any) {
	  return c.json({ error: 'Failed to fetch from Gutendex', details: err.message }, 500)
	}
  })
  
  // Single book by ID
  app.get('/book/:id', async (c) => {
	const id = c.req.param('id')
	try {
	  const response = await axios.get(`https://gutendex.com/books/${id}`)
      const book: Book = {
        id: response.data.id,
        title: response.data.title,
        authors: response.data.authors,
        subjects: response.data.subjects,
        bookshelves: response.data.bookshelves,
        languages: response.data.languages,
        copyright: response.data.copyright,
        media_type: response.data.media_type,
        formats: response.data.formats,
        download_count: response.data.download_count,
      };
	  return c.json(book);
	} catch (err: any) {
	  return c.json({ error: 'Book not found', details: err.message }, 404)
	}
})




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