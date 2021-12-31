import express from "express";
import connectMongoDB from "./database/mongodb";
import Form from "./models/Form";
import * as dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO

const app = express();

app.use(express.json());

try {
  const databaseUriUrl: any = uri;
  connectMongoDB(databaseUriUrl);
} catch (e: any) {
  console.error(e.message);
  process.exit(0);
}

const PORT = 8000;

app.get("/", async (req, res) => {
  res.send("tairone Wonderlands");
});

app.get("/api", async (req, res) => {
  res.send("Bem-Vindo a PrimeControl");
});

app.post("/users-form/create", async (req, res) => {
  const body = req.body;
  try {
    const formCreated = await Form.create({ ...body });
    res.status(201).json(formCreated);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.get("/users-form", async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(201).json(forms);
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
