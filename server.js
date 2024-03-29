const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
});

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon});
})

app.get('/pokemon/:id', (req, res) => {
    res.render('Show', {pokemon: pokemon});
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000...')
})