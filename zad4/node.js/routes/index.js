const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const viewsPath = path.join(__dirname, '..', 'views');
const studentDataPath = path.join(__dirname, '..', 'student_data');

router.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath, 'home.html'));
});

router.get('/student', (req, res) => {
    res.sendFile(path.join(viewsPath, 'student.html'));
});

router.post('/student', (req, res) => {
    const daneStudenta = {
        numerAlbumu: req.body.numerAlbumu,
        imie: req.body.imie,
        nazwisko: req.body.nazwisko,
        plec: req.body.plec,
        wiek: req.body.wiek,
        kierunek: req.body.kierunek
    };

    const nazwaPliku = daneStudenta.numerAlbumu + '.txt';
    const sciezkaPliku = path.join(studentDataPath, nazwaPliku);
    const daneDoZapisu = `Numer albumu: ${daneStudenta.numerAlbumu}\nImię: ${daneStudenta.imie}\nNazwisko: ${daneStudenta.nazwisko}\nPłeć: ${daneStudenta.plec}\nWiek: ${daneStudenta.wiek}\nKierunek: ${daneStudenta.kierunek}`;

    fs.writeFile(sciezkaPliku, daneDoZapisu, (err) => {
        if (err) {
            console.error('Błąd podczas zapisu do pliku:', err);
            res.status(500).send('Błąd podczas zapisu do pliku');
        } else {
            console.log('Dane zapisane do pliku:', nazwaPliku);
            res.render('student', { student: daneStudenta });
        }
    });
});

module.exports = router;
