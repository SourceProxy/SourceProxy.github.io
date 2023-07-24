const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000; // Change this to the appropriate port number for your website

app.use(express.json());

app.post('/proxy', async (req, res) => {
  const url = req.body.url;

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Invalid URL');
  }
});

