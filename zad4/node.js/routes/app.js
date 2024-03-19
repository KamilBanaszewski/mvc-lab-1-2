const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
const viewsPath = path.join(__dirname, 'views');

app.use(bodyParser.urlencoded({ extended: true }));

const studentDataPath = path.join(__dirname, 'student_data');

app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
