const express = require('express');
const router = express.Router();
const path = require('path');

const viewsPath = path.join(__dirname, '..', 'views');

router.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, 'home.html'));
});

router.get('/student', (req, res) => {
    res.sendFile(path.join(viewsPath, 'student.html'));
});

router.post('/student', (req, res) => {});

module.exports = router;
