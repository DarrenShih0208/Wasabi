import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import about from './about.vue';
import order from './order.vue';
import suggest from './suggest.vue';


Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/about',
			component: App,
			children: [
				{ path: 'about', component: about},
				{ path: 'order', component: order},
				{ path: 'suggest', component: suggest},
			],
		}, 
	],
});