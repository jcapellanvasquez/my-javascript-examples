import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 8100;

app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get("/*", (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')))

app.listen(port, console.log(`Application is running on port: ${port}: go to http://localhost:${port}`));

export { app };