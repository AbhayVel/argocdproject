const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const JWT_SECRET = 'my_secret_key01234567890'; // move to env in real apps

// Mock user (replace with DB)
const users = [
  {
    id: 1,
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10)
  }
];

// LOGIN API
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // 1. Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email & password required' });
  }

  // 2. Find user
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // 3. Compare password
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // 4. Generate JWT
  const token = jwt.sign(
    { userId: user.id, email: user.email , role: "admin"},
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    message: 'Login successful',
    token
  });
});

module.exports = router;