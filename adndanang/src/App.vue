<template>
	<div id="app">
		<comp-header />
		<comp-slider />
		<section class="clear-fix">
			<div id="content">
				<comp-menu-left />
				<div class="center_content">
					<router-view></router-view>
				</div>
			</div>
		</section>
		<comp-footer />
	</div>
</template>

<script>
import CompHeader from './component/CompHeader.vue';
import CompFooter from './component/CompFooter.vue';
import CompMenu from './component/CompMenu.vue';
import CompSlider from './component/CompSlider.vue';
import CompMenuLeft from './component/CompMenuLeft.vue';



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
		CompMenuLeft,

	},
	metaInfo: {
      title: 'Xét nghiệm ADN Đà Nẵng',
	  link: [
		{ rel: 'icon', href: '/src/assets/images/favicon.png', type:"image/png" }
	  ]
    }
}
</script>

<style>
	@import './assets/css/style.css'
</style>
