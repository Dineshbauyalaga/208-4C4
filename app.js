const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8008;

app.use(express.static('public'));

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;
  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: 'Invalid URLs' });
  }

  try {
    const responses = await Promise.all(urls.map(url => axios.get(url)));
    const data = responses.map(response => response.data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});