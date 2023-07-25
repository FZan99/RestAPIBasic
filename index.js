const express = require('express')
const app = express()
const mysql = require('mysql2')
const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'root123',
  database: 'UserDB',
})

app.use(express.json())

let userList = [
  {
    id: 1,
    name: 'Zan',
    age: 24,
    married: false,
  },
  {
    id: 2,
    name: 'Zul',
    age: 24,
    married: false,
  },
  {
    id: 3,
    name: 'Akmal',
    age: 24,
    married: false,
  },
]

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users;', (err, result) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(200).json(result)
    }
  })
})

app.post('/users', (req, res) => {
  const { name, age, isMarried } = req.body

  // Use parameterized query to safely insert values
  db.query(
    'INSERT INTO users (name, age, isMarried) VALUES (?, ?, ?)',
    [name, age, isMarried],
    (err, result) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json(result)
      }
    },
  )
})

app.put('/users', (req, res) => {
  //update all names

  const newName = req.body.newName

  userList = userList.map((value) => {
    return { ...value, name: newName }
  })

  res.json(userList)
})

app.delete('/users/:id', (req, res) => {
  const id = req.params.id
  let idFound = false

  userList = userList.filter((obj) => {
    if (obj.id == id) {
      idFound = true
      return false // Filter out the object with id = 2
    }
    return true // Keep all other objects
  })

  if (idFound == false) {
    res.status(404).json({ error: 'User Id not found' })
  } else {
    res.json(userList)
  }
})

app.listen('3001', () => {
  console.log('server running on port 3001')
})
