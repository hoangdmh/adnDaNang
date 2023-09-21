<template>
	<div class="menu-left">
		<template v-for="(menu, index) in listMenu">
			<ul class="clear-fix" v-if="menu.isChild" :key="index">
				<template>
					<li class="active">
						<router-link :to="`${menu.pageUrl}`" exactActiveClass="" activeClass="">
							{{ menu.pageName }}
						</router-link>
					</li>
					<li v-for="(child, index) in menu.pageChild" :key="index">
						<router-link :to="`${child.pageUrl}`" exactActiveClass="" activeClass="">
							{{ child.pageName }}
						</router-link>
					</li>
				</template>
			</ul>
		</template>
	</div>
</template>
  
<script>
import listMenu from '../mock/listMenu';
export default {
	name: 'comp-menu-left',
	data() {
		return {
			listMenu,
			listChildMenu: []
		}
	},
	computed: {
		listMenuChild() {
			var arr =  [];
			this.listMenu.forEach(function (menu, index) {
				if (menu.isChild) {
					return arr.push(menu)
				}
			});
			return arr;
		}
	}
}
</script>

<style></style>