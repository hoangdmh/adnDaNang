import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './page/HomePage.vue';
import LienHe from './page/LienHe.vue';
import GioiThieu from './page/GioiThieu.vue';

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        component: HomePage
    },
    { 
        path: '/lien-he', 
        component: LienHe
    },
    { 
        path: '/gioi-thieu', 
        component: GioiThieu
    },
]

const router = new VueRouter({
	mode: 'history',
    routes
})

export default router