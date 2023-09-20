import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './page/HomePage.vue';
import LienHe from './page/LienHe.vue';
import GioiThieu from './page/GioiThieu.vue';
import TinTuc from './page/TinTuc.vue';

import BangGia from './page/banggia/BangGia.vue';
import ThanhToan from './page/banggia/ThanhToan.vue';

import ThuTucXetNghiem from './page/huongdan/ThuTucXetNghiem.vue';
import HuongDan from './page/huongdan/HuongDan.vue';

import XetNghiemAdnChaMeCon from './page/dichvu/XetNghiemAdnChaMeCon.vue';
import XetNghiemTruocKhiSinh from './page/dichvu/XetNghiemTruocKhiSinh.vue';
import GiamDinhANDHaiCotLietSi from './page/dichvu/GiamDinhANDHaiCotLietSi.vue';

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
        path: '/tin-tuc', 
        component: TinTuc
    },
    { 
        path: '/gioi-thieu', 
        component: GioiThieu
    },
    { 
        path: '/bang-gia', 
        component: BangGia
    },
    { 
        path: '/thanh-toan', 
        component: ThanhToan
    },
    { 
        path: '/thu-tuc-xet-nghiem', 
        component: ThuTucXetNghiem
    },
    { 
        path: '/huong-dan-thu-mau-va-bao-quan-mau', 
        component: HuongDan
    },
    { 
        path: '/xet-nghiem-adn-cha-me-con', 
        component: XetNghiemAdnChaMeCon
    },
    { 
        path: '/xet-nghiem-cha-con-truoc-khi-sinh', 
        component: XetNghiemTruocKhiSinh
    },
    { 
        path: '/giam-dinh-adn-hai-cot', 
        component: GiamDinhANDHaiCotLietSi
    },

]

const router = new VueRouter({
	mode: 'history',
    routes
})

export default router