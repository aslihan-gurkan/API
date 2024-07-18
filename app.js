const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const eCodes = [
    {
        "code": "100",
        "name": "Curcuma",
        "Description": "Harmful bla bla",
        "Category": "Harmful"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "Vitamin B2",
        "Category": "Harmless"
    },

];

app.get('/api/ecodes', (req, res) =>
{
    res.json(eCodes);
});

app.listen(port, () => {
    console.log('E-Code API listening at http:/Localhost:${port}');
});