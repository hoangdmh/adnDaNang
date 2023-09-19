<template>
	<div id="app">
		<comp-header />
		<comp-slider />
		<home-page />
		<comp-footer />
	</div>
</template>

<script>
import CompHeader from './component/CompHeader.vue';
import CompFooter from './component/CompFooter.vue';
import CompMenu from './component/CompMenu.vue';
import CompSlider from './component/CompSlider.vue';

import HomePage from './page/HomePage.vue';


export default {
	name: 'app',
	data () {
		return {
			
		}
	},
	components: {
		CompHeader,
		CompFooter,
		CompMenu,
		CompSlider,
		HomePage
	}
}
</script>

<style>
	@import './assets/css/style.css'
</style>
