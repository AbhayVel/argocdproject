const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

const JWT_SECRET = 'my_secret_key01234567890'; 

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token missing' });

  console.log(token);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch(ex) {
    console.log(ex)
    res.status(401).json({ message: 'Invalid token' });
  }
}


// ✅ Enable CORS (Angular → Node)
app.use(cors({
  origin: 'http://localhost:4200',   // Angular app URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use('/api/user', userRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});