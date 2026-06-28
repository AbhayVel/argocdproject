const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

   userList = [
  {
    id: 1,
    firstName: "Vishal",
    lastName: "Moharikar",
    age: 32,
    gender: "m",
    sublects: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Java" }
    ],
    startDate: "01-02-2026",
    isActive: true
  },
  {
    id: 2,
    firstName: "Sneha",
    lastName: "Patil",
    age: 28,
    gender: "f",
    sublects: [
      { id: 3, name: "React" },
      { id: 4, name: "NodeJS" }
    ],
    startDate: "05-02-2025",
    isActive: true
  },
  {
    id: 3,
    firstName: "Rahul",
    lastName: "Sharma",
    age: 35,
    gender: "m",
    sublects: [
      { id: 5, name: "Python" },
      { id: 6, name: "Django" }
    ],
    startDate: "10-02-2026",
    isActive: false
  },
  {
    id: 4,
    firstName: "Pooja",
    lastName: "Kulkarni",
    age: 30,
    gender: "f",
    sublects: [
      { id: 7, name: "C#" },
      { id: 8, name: ".NET Core" }
    ],
    startDate: "12-02-2024",
    isActive: true
  },
  {
    id: 5,
    firstName: "Amit",
    lastName: "Joshi",
    age: 27,
    gender: "m",
    sublects: [
      { id: 9, name: "SQL" },
      { id: 10, name: "MongoDB" }
    ],
    startDate: "15-02-2026",
    isActive: false
  },
  {
    id: 6,
    firstName: "Neha",
    lastName: "Deshmukh",
    age: 29,
    gender: "f",
    sublects: [
      { id: 11, name: "Azure" },
      { id: 12, name: "Docker" }
    ],
    startDate: "18-02-2026",
    isActive: true
  },
  {
    id: 7,
    firstName: "Saurabh",
    lastName: "Jadhav",
    age: 33,
    gender: "m",
    sublects: [
      { id: 13, name: "Kubernetes" },
      { id: 14, name: "DevOps" }
    ],
    startDate: "20-02-2021",
    isActive: true
  },
  {
    id: 8,
    firstName: "Priya",
    lastName: "Naik",
    age: 26,
    gender: "f",
    sublects: [
      { id: 15, name: "HTML" },
      { id: 16, name: "CSS" }
    ],
    startDate: "22-02-2022",
    isActive: false
  },
  {
    id: 9,
    firstName: "Karan",
    lastName: "Mehta",
    age: 31,
    gender: "m",
    sublects: [
      { id: 17, name: "Flutter" },
      { id: 18, name: "Dart" }
    ],
    startDate: "25-02-2019",
    isActive: true
  },
  {
    id: 10,
    firstName: "Anjali",
    lastName: "Rane",
    age: 24,
    gender: "f",
    sublects: [
      { id: 19, name: "TypeScript" },
      { id: 20, name: "RxJS" }
    ],
    startDate: "28-02-2026",
    isActive: true
  }
   
];

// LOGIN API
router.get('/list', async (req, res) => {
  
    

  res.json({
    message: 'User data List',
    data: userList
  });
});

module.exports = router;