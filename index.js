const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get("/*", (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')))

app.listen(port, console.log(`Application is running on port: ${port}: go to http://localhost:${port}`));