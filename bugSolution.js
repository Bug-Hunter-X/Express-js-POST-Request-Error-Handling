const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  //Further validation can be added here (e.g., email format)
  const user = { name, email };
  console.log('User created:', user);
  res.status(201).json({ message: 'User created', user });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});