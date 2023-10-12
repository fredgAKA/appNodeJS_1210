import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.post("/backend-route", (req, res) => {
    const { name } = req.body;
    const response = `Bon courage à toi pour ton projet P4 `;

    res.send(response);
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "docker.html"));
  });
app.listen(port, () => {
    console.log(`le port ${port}`);
});
