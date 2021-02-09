import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services'


Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: null || localStorage.getItem('access_token'),

        frigo: null || localStorage.getItem('access_frigorifico'),
        pecu: null || localStorage.getItem('access_pecuarista')

    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
        getFrigo(state) {
            return state.frigo !== null
        },
        getPecu(state) {
            return state.pecu !== null
        },


    },
    mutations: {

        SetToken(state, payload) {
            state.token = payload
        },


        destroyToken(state) {
            state.token = null
        },






    },
    actions: {


        // login do pecuarista
        ActionDoLoginPecuarista(context, credentials) {

            return new Promise((resolve, reject) => {

                api.post("/pecuarista/logar", {
                    email: credentials.email,
                    senha: credentials.senha
                }

                ).then(response => {

                    // fake token
                    const token = response.data.email
                    if (token) {

                        localStorage.setItem('access_token', token)
                        context.commit('SetToken', token)
                    }


                    resolve(response)

                })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })

            })


        },
        // login do frigorifico
        ActionDoLoginFrigorifico(context, credentials) {
            return new Promise((resolve, reject) => {

                api.post("/frigorifico/logar", {
                    email: credentials.email,
                    senha: credentials.senha
                }

                ).then(response => {

                    // fake token
                    const token = response.data.email
                    if (token) {

                        localStorage.setItem('access_token', token)

                        context.commit('SetToken', token)
                    }


                    resolve(response.data)

                })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })

            })


        },


        logout(context) {
            api.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            if (context.getters.loggedIn) {

                localStorage.removeItem('access_token')
                localStorage.removeItem("access_frigorifico");
                localStorage.removeItem("access_pecuarista");
                context.commit('destroyToken')


            }

        },

    },
});

export default store