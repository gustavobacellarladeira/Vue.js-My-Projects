const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool

// PEGA TODOS PEDIDO
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM pedidos;',
            (error, result, fiields) => {
                conn.release()
                if (error) { return res.status(500).send({ error: error, }) }
                const response = {
                    quantidade: result.length,
                    pedidos: result.map(pedido => {
                        return {
                            id_pedidos: pedido.id_pedidos,
                            id_produtos: pedido.id_produtos,
                            quantidade: pedido.quantidade,
                            request: {
                                tipo: 'GET',
                                descricao: 'Retorna os detalhes de um pedido especifico',
                                url: 'http://localhost:3020/produtos/' + pedido.id_pedido,
                            }
                        }
                    })
                }
                return res.status(200).send(response)
            }
        )
    })
})

// PEGA PEDIDO POR ID
router.get('/:id_pedido', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT * FROM pedidos WHERE id_pedidos = ?;',
            [req.params.id_pedido],
            (error, result, fiields) => {
                conn.release()
                if (error) { return res.status(500).send({ error: error, }) }
                if (result.length === 0) {
                    return res.status(404)
                        .send({ mensagem: 'Não encontrado produto com este ID' })
                }
                const response = {

                    id_pedidos: result[0].id_pedidos,
                    id_produto: result[0].id_produtos,
                    quantidade: result[0].quantidade,
                    request: {
                        tipo: 'GET',
                        descricao: 'Retorna todos os pedido',
                        url: 'http://localhost:3020/pedidos/',
                    }


                }
                return res.status(200).send(response)
            }
        )
    })
})

// INSERE UM PEDIDO
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query('SELECT * FROM produtos WHERE id_produto = ?',
            [req.body.id_produtos],
            (error, result, field) => {
                if (error) { return res.status(500).send({ error: error }) }
                if (result.length === 0) {
                    return res.status(200)
                        .send({ mensagem: 'PRODUTO NÃO ENCONTRADO' })
                } else {
                    conn.query('INSERT INTO pedidos (id_produtos, quantidade) VALUES (?,?);',
                        [req.body.id_produtos, req.body.quantidade],
                        (error, result, field) => {
                            // libera a conecçao
                            conn.release()
                            if (error) { return res.status(500).send({ error: error }) }

                            if (result.length === 0) {
                                return res.status(404)
                                    .send({ mensagem: 'Não encontrado pedido com este ID' })
                            }

                            const response = {
                                mensagem: 'Pedido inserido com sucesso!',

                                pedidoCriado: {
                                    id_pedidos: result.insertId,
                                    id_produtos: req.body.id_produtos,
                                    quantidade: req.body.quantidade,
                                    request: {
                                        tipo: 'GET',
                                        descricao: 'Retorna todoss os pedidos',
                                        url: 'http://localhost:3020/pedidos/',
                                    }
                                }
                            }

                            return res.status(201).send(response)

                        }
                    )



                }
            })
    })

})


// DELETA UM PEDIDO
router.delete('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            `DELETE FROM pedidos WHERE id_pedidos = ?;`,
            [req.body.id_pedidos],
            (error, result, field) => {
                // libera a conecçao
                conn.release()
                if (error) { return res.status(500).send({ error: error }) }

                const response = {
                    mensagem: 'Pedido Deletado com sucesso',
                    request: {
                        tipo: 'POST',
                        descricao: 'Insere um pedido',
                        url: 'http://localhost:3020/pedido/',
                        body: {
                            id_produtos: 'String',
                            quantidade: 'Number',
                        }
                    }

                }

                return res.status(202).send(response)
            }
        )
    })
})


module.exports = router