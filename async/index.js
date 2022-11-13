const express = require('express')
const app = express();
const port = 8100;

app.get("/", (req, res) => res.send("Running on express"))

app.listen(port,console.log(`Application running on port: ${port}: go to http://localhost:${port}`));