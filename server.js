const express = require('express');
const app = express();

const port = process.env.PORT || 1234;

app.use(express.static('./my-app/build'));

app.get('/api/users', (req, res) => {
  res.json({ some: 'users' });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
