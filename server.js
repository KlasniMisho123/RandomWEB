import express from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.get('/search', (req, res) => {

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});