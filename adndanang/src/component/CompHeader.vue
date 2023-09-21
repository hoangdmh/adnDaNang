<template>
	<header>
		<div class="top-banner">
			<div class="banner clear-fix">
				<h1>
					<router-link to="/"><img src="/src/assets/images/logo.png" alt="logo" title="xet nghiem adn da nang"></router-link>
				</h1>
				<div class="info-contact">
					<h2>Trung tâm xét nghiệm ADN Đà Nẵng - Miền Trung</h2>
					<h3>Phòng lab ADN duy nhất tại Miền Trung</h3>
					<p>Địa chỉ: 160 Nguyễn Quang Lâm, Hoà Xuân, Cẩm Lệ, TP Đà Nẵng</p>
					<p>Tel: 0935.277.334</p>
				</div>
			</div>
		</div>

		<div class="menu-pc">
			<div class="menu-full">
				<div class="menu-content">
					<ul class="parent">
						<li v-for="(menu, index) in listMenu" :key="index">
							<template v-if="!menu.isChild"> 
								<router-link 
									:to="`${menu.pageUrl}`"
									exactActiveClass="active" 
									activeClass="menu-item"
									>
									{{ menu.pageName }}
								</router-link>
							</template>
							<template v-else>
								<router-link 
									:to="`${menu.pageUrl}`" 
									exactActiveClass="active" 
									activeClass="menu-item"
									>
									{{ menu.pageName }}
								</router-link>
								<ul class="child">
									<li v-for="(child, index) in menu.pageChild" :key="index">
										<router-link 
											:to="`${child.pageUrl}`"
											exactActiveClass="active" 
											activeClass="menu-item"
											>
											{{ child.pageName }}
										</router-link>
									</li>
								</ul>
							</template>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="header-icon">
			<span>&nbsp;</span>
			<span>&nbsp;</span>
			<span>&nbsp;</span>
		</div>

		<div class="menu-sp">
			<ul>
				<li><a href="/index.html">Trang chủ</a></li>
				<li><a href="/categories/gioithieu.html">Giới thiệu</a></li>
				<li>
					<a href="javascript:void(0)">Dịch vụ</a>
					<ul class="child">
						<li><a href="/categories/xet-nghiem-adn-cha-me-con.html">Xét nghiệm ADN cha (mẹ) con</a></li>
						<li><a href="/categories/xet-nghiem-cha-con-truoc-khi-sinh.html">Xét nghiệm cha con trước khi
								sinh</a></li>
						<li><a href="/categories/xet-nghiem-adn-anh-chi-em.html">Xét nghiệm ADN anh (chị) em</a>
						</li>
						<li><a href="/categories/xet-nghiem-adn-ho-hang.html">Xét nghiệm ADN họ hàng</a>
						</li>
						<li><a href="/categories/xet-nghiem-huyet-thong-ong-ba-chau.html">Xét nghiệm huyết thống ông bà
								cháu</a>
						</li>
						<li><a href="/categories/giam-dinh-adn-hai-cot.html">Giám định AND hài cốt liệt sĩ</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="javascript:void(0)">Bảng giá - thanh toán</a>
					<ul class="child">
						<li><a href="/categories/banggia.html">Bảng giá</a></li>
						<li><a href="/categories/thanhtoan.html">Hình thức thanh toán</a></li>
					</ul>

				</li>
				<li>
					<a href="javascript:void(0)">Hướng dẫn - thủ tục</a>
					<ul class="child">
						<li><a href="/categories/huong-dan-thu-mau-va-bao-quan-mau.html">Hướng dẫn thu mẫu và bảo quản
								mẫu</a></li>
						<li><a href="/categories/thu-tuc-xet-nghiem.html">Thủ tục xét nghiệm</a></li>
					</ul>

				</li>
				<li>
					<a href="javascript:void(0)">Tin tức</a>
					<ul class="child">
						<li><a href="/categories/giay-khai-sinh.html">Dịch vụ xét nghiệm ADN làm giấy khai sinh</a></li>
						<li><a href="/categories/tin-tuc-qb.html">Xét nghiệm ADN tại Quảng Bình</a></li>
						<li><a href="/categories/tin-tuc-qt.html">Xét nghiệm ADN tại Quảng Trị</a></li>
						<li><a href="/categories/tin-tuc-hue.html">Xét nghiệm ADN tại Huế</a></li>
						<li><a href="/categories/tin-tuc-qn.html">Xét nghiệm ADN tại Quảng Nam</a></li>
					</ul>
				</li>
				<li><a href="/categories/lien-he.html">Liên hệ</a></li>
			</ul>
		</div>
	</header>
</template>

<script>
import listMenu from '../mock/listMenu';
export default {
	name: 'comp-header',
	data(){
		return {
			listMenu
		}
	}
}
</script>

<style>

</style>