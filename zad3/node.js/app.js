const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

const viewsPath = path.join(__dirname, 'views');
const routesPath = path.join(__dirname, 'routes');

app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require(path.join(routesPath, 'index'));
app.use('/', indexRouter);

app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
