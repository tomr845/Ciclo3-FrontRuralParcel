import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    territorios: []
    
  },
  mutations: {
    pushTerritorio(state, obj){
      state.territorios.push(obj);
    }

  },
  actions: {
    
    async registrarTerritorio({commit}, objTerritorio){
      
      //POST
      const peticion = await fetch('https://ruralparcel-backend1.herokuapp.com/territory', {
        method: 'POST',
        headers:{
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objTerritorio)
      });
      const data = await peticion.json();
      commit('pushTerritorio', data);
      window.location = '/';
      
    }
    
  },
  modules: {
  }
})

