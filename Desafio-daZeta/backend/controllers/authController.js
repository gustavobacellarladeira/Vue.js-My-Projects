const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

const User = require('../models/User')

const router = express.Router()

function generateToken(params = {}) {
    return jwt.sign({ params }, authConfig.secret, {
        // quando vai expirar
        expiresIn: 86400
        // 86400 = 1 dia 
    })
}

// Cadastro
router.post('/register', async (req, res) => {
    const { email } = req.body

    try {
        if (await User.findOne({ email })) {
            return res.send({ error: 'Email already exists' })
        }
        // pega todos os parametros ..req.body
        const user = await User.create(req.body)
        // tira a senha do res
        user.password = undefined

        const msg = "Registrado com sucesso!"
        return res.send({
            user,
            token: generateToken({ id: user.id }),
            msg
        })
    } catch (err) {
        console.log(err)
        return res.send({ error: 'Registration failed' })
    }
})

// Autenticação
router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body

    try {
        // Procura pra ver se existe no db
        const user = await User.findOne({ email }).select('+password')
        if (!user) {
            res.send({ error: 'User not found ' })
        }
        // verificar se a senha é a do email
        if (!await bcrypt.compare(password, user.password)) {
            res.send({ error: 'Invalid password ' })
        }
        // n voltar a senha na res
        user.password = undefined

        const msg = "Logion feito com sucesso!"
        res.send({
            msg,
            token: generateToken({ id: user.id }),
        })
    } catch (err) {
        return res.send({ error: 'Login failed' })
    }
})

// module.exports = (app) => app.use('/auth', router)
module.exports = router