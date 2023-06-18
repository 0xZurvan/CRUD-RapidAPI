import express, { Response, Request, Express } from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { Database } from "./lib/supabase.types";

dotenv.config();

const supabase = createClient<Database>(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());


app.get("/api/user", async (req: Request, res: Response) => {
  try {
    let { data, error } = await supabase.from("users").select("*");
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

app.post("/api/user", async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    const { data, error } = await supabase.from("user").insert([newUser]);

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: error });
  }
});

app.put("/api/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const { data, error } = await supabase
      .from("user")
      .update(updates)
      .eq("id", id);

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: error });
  }
});

app.delete("/api/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { data, error } = await supabase.from("user").delete().eq("id", id);

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Error: error });
  }
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
