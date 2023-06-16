import express, {Response, Request, Express} from "express"
import dotenv from "dotenv"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000

app.get("/api/user", async (req: Request, res: Response) => {
  res.json({msg: "Get user endpoint"})
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})