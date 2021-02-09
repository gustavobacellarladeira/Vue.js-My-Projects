import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pedidos: [],
        quantidade: 0
    },
    getters: {
        getquantidade(state) {
            return state.quantidade
        },
        getpedido(state) {
            return state.pedidos;
        },
    },
    mutations: {
        setpedidos(state, payLoad) {
            state.pedidos = payLoad
        },
        setquantidade(state, payLoad) {
            state.quantidade = payLoad
        }
    },
    actions: {
        Setpedidos: async function (context) {
            const response = await axios.get("http://localhost:3020/pedidos");
            context.commit("setpedidos", response.data.pedidos)
            context.commit("setquantidade", response.data.quantidade)
            // console.log(" RESPONSE.DATA", response.data);
            // console.log(" RESPONSE.DATA.QUANTIDADE ", response.data.quantidade);
            // console.log(" RESPONSE.DATA.PEDIDOS ", response.data.pedidos);
        }
    }
});

export default store