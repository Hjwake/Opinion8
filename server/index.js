const express = require('express');
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
 
const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: `${process.env.REACT_APP_DATABASE_PASSWORD}`,
    database: 'opinion8'
})

const saltRounds = 10;


app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            res.status(418).send(`Couldn't hash password.`)
        } else {
            db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], (err, result) => {
                if (err) {
                    res.status(418).send(`Couldn't register user.`)
                } else {
                    res.send({username: username})
                }
            });
        }
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    // Check if the user has entered a username that is present in the database
    db.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
        if (err) {
            res.status(418).send(err.message)
        }
        // Check for empty array
        else if (result.length < 1) {
            res.status(418).send(`Username not found.`)
        }
        // Correct username entered, compare entered password with hashed password
        else {
            bcrypt.compare(password, result[0].password, (err, match) => {
                if (match) {
                    res.send({username})
                }
                if (!match) {
                    res.status(418).send(`Incorrect password.`)
                }
            })
        }
    })
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
})