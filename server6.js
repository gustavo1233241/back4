const express = require('express');
const app = express();

app.listen(3000, () => {

    console.log('Servidor na area bro');
});



const functions = require('./function.js')

app.get('/add/:a/:b', (req, res) =>{
const a = parseInt(req.params.a)
const b = parseInt(req.params.b)


    const resultado = functions.add(a, b)
  

    res.send(`A soma de ${a} e ${b} é igual a ${resultado}`)
  
})

app.get('/sub/:a/:b', (req, res) =>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado1 = functions.sub(a, b)
    res.send(`A soma de ${a} e ${b} é igual a ${resultado1}`)

})    

app.get('/mult/:a/:b', (req, res) =>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado2 = functions.mult(a, b)
    res.send(`A soma de ${a} e ${b} é igual a ${resultado2}`)

})    

app.get('/divs/:a/:b', (req, res) =>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado3 = functions.divs(a, b)
    res.send(`A soma de ${a} e ${b} é igual a ${resultado3}`)

})    