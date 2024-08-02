import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import addDocs from './database-stuff/add_docs.js';

const port = process.env.PORT || 3001;
const app = express();

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

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

app.post('/newUser', (req, res) => {
    const user = JSON.parse(req.body);
    console.log(user);
    addDocs(user)
    .then(() => {
        console.log("User added to database");
    })
    .catch((e) => {
        console.error(e);
    });

    res.sendStatus(201)
});

app.listen(port, () => {
    console.log(`Server is running.`);
});

