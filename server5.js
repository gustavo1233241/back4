const express = require('express');
const { get } = require('express/lib/response');
const app = express();

app.listen(3000, () => {

    console.log('Servidor no ar');
});

app.get('/', (req, res) => {
    res.send('Teste com parâmetros');
})


app.get('/distancia/:pontoA-:pontoB', (req, res) =>{


const pontoA = req.params.pontoA
const pontoB = req.params.pontoB
const distancia = pontoB - pontoA
res.send(`A distancia, usando hifen ${pontoA} e ${pontoB} é ${distancia}`)


})


app.get('/distancia/:pontoA.:pontoB', (req, res) =>{


    const pontoA = req.params.pontoA
    const pontoB = req.params.pontoB
    const distancia = pontoB - pontoA
    res.send(`A distancia, usando hifen ${pontoA} e ${pontoB} é ${distancia}`)
    
    
    })
    
