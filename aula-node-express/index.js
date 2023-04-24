var express = require('express')
var app = express()

var cors = require('cors')

app.use(cors())

app.get('/', function(req, res) {
    res.send("Hello world!!!!!")
})

app.get('/teste', function(req, res) {
    res.send("Rota de teste!")
})

app.post('/teste', function(req, res) {
    res.send("You just called the post method at '/teste'!\n")
})

app.all('/testeAll', function(req, res) {
    res.send("Metodo app.all")
})

app.get('/:id', function(req, res) {
    res.send('Resposta do servidor: ' + req.params.id)
})

app.get('/soma/:op1/:op2', function(req, res) {
    let op1 = parseInt(req.params.op1)
    let op2 = parseInt(req.params.op2)
    let result = op1 + op2
    console.log(op1, op2)

    res.send(result.toString())
})



app.listen(3001, function() {
    console.log("Servidor ouvindo na porta: 3001")
})

//console.log("Após listen")