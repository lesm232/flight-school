const express = require('express');
const app = express();
const path = require('path')
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.get('/favicon.ico', (req, res) => {
    res.sendFile('/favicon.png', {
        root: path.join(__dirname, './')
    })
})

app.get('/', (req, res) => res.redirect('/BowMaster'));

app.use('/BowMaster', express.static('BowMaster'));

app.get('/BowMaster', (req, res) => {
    res.sendFile('/BowMaster/login.html', {
        root: path.join(__dirname, './')
    })
});

app.get('/BowMaster/login', (req, res) => {
    res.sendFile('/BowMaster/login.html', {
        root: path.join(__dirname, './')
    })
});

app.post('/loginHandler', function (req, res) {
    console.log('username: ' + req.body.username + ' password: ' + req.body.password);
    res.redirect('/BowMaster/home')
});

app.get('/BowMaster/home', (req,res) => {
    res.sendFile('/BowMaster/home.html', {
        root: path.join(__dirname, './')
    })
});

app.get('/BowMaster/notes', (req,res) => {
    res.sendFile('/BowMaster/notes.html', {
        root: path.join(__dirname, './')
    })
});

app.get('/BowMaster/scores', (req,res) => {
    res.sendFile('/BowMaster/scores.html', {
        root: path.join(__dirname, './')
    })
});

app.get('/BowMaster/logout', (req,res) => {
    res.redirect('/BowMaster/login')
});

app.listen(port, () => console.log(`Front End Test listening on port ${port}!`));