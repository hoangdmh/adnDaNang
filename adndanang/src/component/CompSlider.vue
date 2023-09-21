<template>
	<div id="slide">
		<div class="slide-content">
			<b-carousel
				id="carousel-1"
				v-model="slide"
				:interval="4000"
				controls
				indicators
			>
				<b-carousel-slide img-src="/src/assets/images/pic_02.jpg"></b-carousel-slide>
		
				<b-carousel-slide img-src="/src/assets/images/pic_03.jpg"></b-carousel-slide>
		
				<b-carousel-slide img-src="/src/assets/images/pic_04.jpg"></b-carousel-slide>
			</b-carousel>
		</div>
	</div>
</template>

<script>
export default {
	name: 'comp-slider',
	data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style>

</style>