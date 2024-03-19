const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

const viewsPath = path.join(__dirname, 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, 'home.html'));
});

app.get('/student', (req, res) => {
    res.sendFile(path.join(viewsPath, 'student.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
