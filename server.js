const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

const pets = [{
        id: 1,
        name: 'Bahamut',
        species: 'cat'
    },
    {
        id: 2,
        name: 'Steve',
        species: 'dog'
    }
]

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/api/pets', (req, res) => {
    res.json(pets);
})

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); })