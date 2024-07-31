import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const port = process.env.PORT || 3001;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, '..', 'public'); // this path expects that you put the server file inside of a folder, such as server. If you want to make it in the top level directory, get rid of '..'
app.use(express.static(publicPath));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello from server!" });
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/formSubmit', (req, res) => {
    console.log("post request received");
    res.sendStatus(201)
});

app.listen(3001, "0.0.0.0", () => {
    console.log(`Server is running on port 3001.`);
  });

