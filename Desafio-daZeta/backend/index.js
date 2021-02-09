const express = require('express')
const bodyParser = require('body-parser')

//rotas
const rotaProduto = require('./routes/produtos.js')
const rotaPedidos = require('./routes/pedidos.js')
const rotaAuth = require('./controllers/authController.js')

const app = express()

// para entender json
app.use(bodyParser.json())
// entender parametros na url
app.use(bodyParser.urlencoded({ extended: false }))

// origin problem browser
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Headers', '*') // 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")

//     next();
// })
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// mongodb
require('./database/index')

// routes
app.use('/produtos', rotaProduto)
app.use('/pedidos', rotaPedidos)
app.use('/auth', rotaAuth)


// quando nao encontar rota
app.use((req, res, next) => {
    const erro = new Error('Rota nao enncontrada')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})


// porta de saida do express
const porta = 3020
app.listen(process.env.PORT || porta, () => { console.log(`Servidor executando com sucesso na porta: ${porta}`) })