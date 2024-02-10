import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  // body, headers, query parameters, middlewares, connecting to a database
  // return c.text('Hello Hono!')
  return c.json({
    message: "from Hono"
  })
})

export default app
