const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const path = require('path');
const pages = require('./server/renderPages');
const { resolveAny } = require('dns');
const { connect } = require('http2');

// console.log(path);
let app = express();

// bodyParser
// app.use(bodyParser.urlencoded({ extended: false }));

// set view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//  ---------- Pages Start ----------
app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/mainMenu', (req, res) => {
    res.render('pages/mainMenu');
});

app.get('/projectLogDirection', (req, res) => {
    res.render('pages/projectLogDirection');
});

app.get('/projectLogMyPlants', (req, res) => {
    res.render('pages/projectLogMyPlants');
});

app.get('/projectLogMachines', (req, res) => {
    res.render('pages/projectLogMachines');
});


// ---------- Pages End ----------
// ---------- SQL start ----------


// create connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smartassemblyapp'
})


// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'smartassemblyapp'
// });

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('MySql connected')
// });

app.get('/projectLogList', (req, res) => {
    pool.getConnection((err, connection) => {
    if (err) throw err;
    let sql = 'SELECT * FROM todos';
    connection.query(sql, (err, todos) => {
        if (!err) {
            res.render('pages/projectLogList',{ todos });
        } else {
            console.log(err);
    }
    console.log(todos);
    })
        // console.log(`connected as Id ${connection.threadId}`)

    })
    // db.getConnection((err, connection) => {
    //     if (err) throw err;
    //     let sql = 'SELECT * FROM todos';
    //     connection.query(sql, (err, result) => {
    //         connection.release(); //return to connection pool

    //         if (!err) {
    //             res.send(result)
    //         } else {
    //             console.log(err)
    //         }
    //     })
    // })
    // let sql = 'SELECT * FROM todos';
    // let query = db.query(sql, (err, result) => {
    // if (err) throw err;
    // console.log(result);
    // })
    // render page
});

// insert todo
app.post('/addToDo', (req, res) => {
    pool.getConnection((err, connection) => {
    if (err) throw err;
    let urgency = req.body.urgency;
    let assemblyUnit = req.body.assemblyUnit;
    let todoText = req.body.todoText;
    let header = req.body.header;
    let todoDate = req.body.todoDate;
    console.log(todoDate);
    let sql = `INSERT INTO todos (assemblyunit, tododate, header, todotext, todostatus, fk_project, fk_user) VALUES ('${assemblyUnit}', '${todoDate}', '${header}', '${todoText}', '${urgency}', '1', '1')`;
    connection.query(sql, (err, result) => {
        if (!err) {
            res.redirect('/projectLogList');
        } else {
            console.log(err);
    }
    console.log(result);
    })
        // console.log(`connected as Id ${connection.threadId}`)

    })
//     let urgency = req.body.urgency;
//     let assemblyUnit = req.body.assemblyUnit;
//     let todoText = req.body.todoText;
//     let header = req.body.header;
//     let todoDate = req.body.todoDate;
//     console.log(todoDate);
//     let sql = `INSERT INTO todos (assemblyunit, tododate, header, todotext, todostatus, fk_project, fk_user) VALUES ('${assemblyUnit}', '${todoDate}', '${header}', '${todoText}', '${urgency}', '1', '1')`;
//     let query = db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.redirect('/projectLogList')
//     })
});

// ---------- SQL end ----------






// ---------- App start ----------
app.listen('3000', () => {
    console.log('server started on port 3000')
});