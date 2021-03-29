const mysql = require('mysql');
const express = require('express');

let app = express();

// set view engine
app.set('view engine', 'ejs');

// index pages
// app.get('/', (req, res) => {
//     res.render('pages/index');
// })

//  about pages
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// index page
app.get('/', (req, res) => {
    let mascots = [
        { name: 'Sammy', organization: "Digitalocean", birth_year: 2012 },
        { name: 'Tux', organization: "Linux", birth_year: 1996 },
        { name: 'Moby Dick', organization: "Docker", birth_year: 2013 },
    ];
    let tagline = "No programming concept is complete withoout a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});



// #####
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################
// #################################


// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql connected')
});



// Create db
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send('database created');
    });
});

// create tables
app.get('/createposttable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), body VARCHAR(255))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created....');
    });
});

// insert post 1
app.get('/addpost1', (req, res) => {
    let post = { title: 'Post One', body: 'This is post number one' };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post 1 added....');
    })
});

// insert post 2
app.get('/addpost2', (req, res) => {
    let post = { title: 'Post One', body: 'This is post number one' };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post 2 added....');
    })
});

// select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send('post fetched...');
    })
});

// select single post
app.get('/getposts/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('single post fetched...');
    })
});

// Update Posts
app.get('/updateposts/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('post updated...');
    })
});

// Delete Post
app.get('/deleteposts/:id', (req, res) => {
    let sql = `Delete FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('post deleted...');
    })
});

// let mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'node_crud',
//     multipleStatements: true
// });

// mysqlConnection.connect(() => {
//     if (!err) {
//         console.log("connected")
//     } else {
//         console.log("Connection Failed")
//     }
// });


app.listen('3000', () => {
    console.log('server started on port 3000')
});