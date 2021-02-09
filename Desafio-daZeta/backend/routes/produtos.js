const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool

// PEGA TODOS PRODUTOS
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM produtos;',
            (error, result, fiields) => {
                conn.release()
                if (error) { return res.status(500).send({ error: error, }) }

                const response = {
                    quantidade: result.length,
                    produtos: result.map(prod => {
                        return {
                            id_produto: prod.id_produto,
                            nome: prod.nome,
                            preco: prod.preco,
                            request: {
                                tipo: 'GET',
                                descricao: 'Retorna os detalhes de um produto especifico',
                                url: 'http://localhost:3020/produtos/' + prod.id_produto,
                            }
                        }
                    })
                }
                return res.status(200).send(response)
            }
        )
    })
})

// PEGA PRODUTO POR ID
router.get('/:id_produto', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM produtos WHERE id_produto = ?;',
            [req.params.id_produto],
            (error, result, fiields) => {
                conn.release()
                if (error) { return res.status(500).send({ error: error, }) }

                if (result.length == 0) {
                    return res.status(404).send({
                        mensagem: 'Não foi encontrado produto com este ID'
                    })
                }
                const response = {
                    produto: {
                        id_produto: result[0].id_produto,
                        nome: result[0].nome,
                        preco: result[0].preco,
                        request: {
                            tipo: 'GET',
                            descricao: 'Retorna todos os produtos',
                            url: 'http://localhost:3020/produtos/',
                        }
                    }
                }
                return res.status(200).send(response)
            }
        )
    })
})

// INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    const nome = req.body.nome
    const preco = req.body.preco

    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query('INSERT INTO produtos (nome, preco) VALUES (?,?);',
            [nome, preco],
            (error, result, field) => {
                // libera a conecçao
                conn.release()
                if (error) { return res.status(500).send({ error: error }) }


                const response = {
                    mensagem: 'Produto insserido com sucesso',
                    produtoCriado: {
                        id_produto: result.id_produto,
                        nome: req.body.nome,
                        preco: req.body.preco,
                        request: {
                            tipo: 'POST',
                            descricao: 'Retorna todoss os produtos',
                            url: 'http://localhost:3020/produtos/',
                        }
                    }
                }

                return res.status(201).send(response)

            }
        )
    })

})

// EDITA UM PRODUTO
router.patch('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            `UPDATE produtos
                SET nome = ?,
                    preco = ?
                WHERE id_produto = ?`,
            [req.body.nome, req.body.preco, req.body.id_produto],
            (error, result, field) => {
                // libera a conecçao
                conn.release()
                if (error) { return res.status(500).send({ error: error }) }

                const response = {
                    mensagem: 'Produto Atualizado com sucesso',
                    produtoCriado: {
                        id_produto: req.body.id_produto,
                        nome: req.body.nome,
                        preco: req.body.preco,
                        request: {
                            tipo: 'PATCH',
                            descricao: 'Retorna os detalhes de um produto especifico',
                            url: 'http://localhost:3020/produtos/' + req.body.id_produto,
                        }
                    }
                }

                return res.status(202).send(response)


            }
        )
    })
})


// DELETA UM PRODUTO
router.delete('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            `DELETE FROM produtos WHERE id_produto = ?;`,
            [req.body.id_produto],
            (error, result, field) => {
                // libera a conecçao
                conn.release()
                if (error) { return res.status(500).send({ error: error }) }

                const response = {
                    mensagem: 'Produto Deletado com sucesso',
                    request: {
                        tipo: 'POST',
                        descricao: 'Insere um produto',
                        url: 'http://localhost:3020/produtos/',
                        body: {
                            nome: 'String',
                            preco: 'Number',
                        }
                    }

                }

                return res.status(202).send(response)
            }
        )
    })
})

module.exports = router