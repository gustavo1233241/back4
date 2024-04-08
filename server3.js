const express = require('express')

const app= express();

app.listen(3002, () =>{



console.log('servido iniciado')

})

app.get('/', (req, res)=>{

    res.send('<h1>TESTE</h1>')
     })

     app.get('/ola/:nome', (req, res)=>{

        res.send('text2 ,Tudo bem '+ req.params.nome)
        
         })

         app.get('/ola/:nome/:empresa', (req, res)=>{

            res.send('text3 ,Tudo bem ' + req.params.nome + ' da empresa ' + req.params.empresa)
            
             })

             app.get('/soma/:a/:b', (req, res)=>{

                res.send('Resultado da soma é:  ' + (parseInt(req.params.a) + parseInt(req.params.b)))
                
                 })