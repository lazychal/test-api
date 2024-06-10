import express, { Request, Response } from 'express';
const app = express()
const port = process.env.PORT || 3003;

app.get('/', (req: Request, res: Response) => {
  const message = 'Hello world!!!!!'
  res.send(message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})