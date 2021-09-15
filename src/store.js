import Vue from 'vue'
import Vuex from 'vuex'
import axios  from  'axios' 
import VueAxios  from  'vue-axios'

Vue.use( VueAxios ,  axios );
Vue.use( Vuex );

const store = new Vuex.Store({
  state: {
    orders:[],
  },
  mutations: {
    setorders(state, menus){
      state.orders = menus;
    },
  },
  actions: {
		axiosorders({commit}){
			axios.get('https://mocki.io/v1/0abbd35f-d9e5-4a96-acfd-ebcb1107bdac')
				.then((res) => {
				commit('setorders', res.data);
			})
			.catch((err) => {
				console.log("Got an error logging in, here's the message: ", err);
			})
		},
  },
});

export default store;