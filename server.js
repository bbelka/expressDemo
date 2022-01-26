const express = require('express');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => res.send("It's working!!"));

app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); })