const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());

app.all('*', (req, res) => {
    const request = req.originalUrl;

    const jsonResponse = {
        message: `you requested the path number: ${request}`,
    };

    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Server is active. port : ${port}`);
});

module.exports = app;