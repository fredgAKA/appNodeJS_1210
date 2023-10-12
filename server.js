import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/api/greeting", (req, res) => {
  const { name } = req.body;
  res.send(`Bonjour ${name} et bienvenue !`);
});

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
