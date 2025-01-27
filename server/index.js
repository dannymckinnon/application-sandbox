const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ fruits: ['apple', 'asdfasdfsad', 'banana'] });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
