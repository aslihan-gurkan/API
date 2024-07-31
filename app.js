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
        "Description": "",
        "Category": "Harmful"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "Harmful"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "Harmless"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "Harmful"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "mid"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "mid"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmless"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmless"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmless"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmless"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmless"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmful"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmful"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "mid"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmful"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmful"
    },
    {
        "code": "101",
        "name": "Riboflavin",
        "Description": "",
        "Category": "harmful"
    },

];

app.get('/api/ecodes', (req, res) =>
{
    res.json(eCodes);
});

app.get('/api/ecodes/mid', (req, res) => {
    const harmlessECodes = eCodes.filter(code => code.Category.toLowerCase() === 'mid');
    res.json(harmlessECodes);
});

app.get('/api/ecodes/harmless', (req, res) => {
    const harmlessECodes = eCodes.filter(code => code.Category.toLowerCase() === 'harmless');
    res.json(harmlessECodes);
});

app.get('/api/ecodes/harmful', (req, res) => {
    const harmfulECodes = eCodes.filter(code => code.Category.toLowerCase() === 'harmful');
    res.json(harmfulECodes);
});

app.listen(port, () => {
    console.log('E-Code API listening at http://localhost:${port}');
});