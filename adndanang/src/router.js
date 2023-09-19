import Vue from 'vue'
import VueRouter from 'vue-router'

import LienHe from './page/LienHe.vue';

Vue.use(VueRouter)

const routes = [
    { 
        path: '/lien-he', 
        component: LienHe
    },
]

const router = new VueRouter({
	mode: 'history',
    routes
})

export default router