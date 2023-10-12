import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // To handle JSON payloads in POST/PUT requests
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/greet', (req, res) => {
    const name = req.body.name;
    res.send(`Bonjour ${name}... Vous êtes bien matinal...`);
 });