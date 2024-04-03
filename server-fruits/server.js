const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.get('/fruits', async (req, res) => {
    try {
        const apiUrl = 'https://www.fruityvice.com/api/fruit/all';
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});