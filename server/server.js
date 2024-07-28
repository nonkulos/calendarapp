const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port "0.0.0.0".`);
  });

app.post('/formSubmit', (req, res) => {
    console.log("post request received");
    res.sendStatus(201)
});
