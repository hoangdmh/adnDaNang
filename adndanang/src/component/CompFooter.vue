<template>
	<footer>
		<div class="info clear-fix">
			<!-- <a href="javascript:" id="return-to-top"><i class="icon-chevron-up arrow up"></i></a> -->
			<p id="return-to-top" @click="scrollToTop()">
				<i class="icon-chevron-up arrow up"></i>
			</p>
			<div class="contact">
				<p><span class="col-blue">TRUNG TÂM XÉT NGHIỆM ADN ĐÀ NẴNG VÀ MIỀN TRUNG<br>VĂN PHÒNG THU MẪU & PHÂN TÍCH ADN</span></p>
				<p>Địa chỉ: 160 Nguyễn Quang Lâm, Hoà Xuân, Cẩm Lệ, TP Đà Nẵng<br>
				Tel: 0935.277.334<br>
				Email: dmhoang08t1@gmail.com</p>
			</div>
			<div class="social">
				<ul>
					<li><a href="https://www.facebook.com/TrungTamXetNghiemADNDaNang" target="_blank"><img src="./assets/images/icon_face.png" alt="facebook"></a></li>
					<li><a href="https://plus.google.com/+DoMinhHoang" target="_blank"><img src="./assets/images/icon_google.png" alt="google blus"></a></li>
				</ul>
			</div>
		</div>	
	</footer>
</template>
  
<script>
	export default {
		name: 'comp-footer',
		mounted(){
			let backToTop = document.getElementById("return-to-top");

			window.onscroll = function() {
				if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
					backToTop.style.display = "block";
				} else {
					backToTop.style.display = "none";
				}
			};
		},
		methods: { 
			scrollToTop() {				
				window.scrollTo(0,0);
			}
		}
	}
</script>

<style>

</style>