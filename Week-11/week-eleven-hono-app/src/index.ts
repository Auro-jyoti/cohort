import { Hono } from 'hono'

const app = new Hono()

// app.get('/', (c) => {
//   // body, headers, query parameters, middlewares, connecting to a database
//   // return c.text('Hello Hono!')
//   return c.json({
//     message: "from Hono"
//   })
// })

app.post("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("params"));

  return c.text("Hello Hono!");
});

export default app
