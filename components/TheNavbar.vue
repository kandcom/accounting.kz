<template>
	<header class="header">
		<router-link to="/" class="header__logo">
			<img src="logo.svg" alt="учет.kz" class="header__logo" />
		</router-link>
		<TheFavorite classNames="header__favorite" />
		<TheBasketButton />
	</header>
</template>
<script>
export default {
	data() {
		return {}
	},
	components: {},
}
</script>

<style scoped lang="css">
.header {
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: aliceblue;
	padding: 8px 16px;
}
.header__logo {
	height: 100%;
}
.header__favorite {
	margin-left: auto;
	margin-right: 20px;
	border: 2px solid #f9579d;
	border-radius: 4px;
	padding: 8px 16px;
	font-size: 16px;
	font-weight: bold;
	color: black;
	text-decoration: none;
	transition: all 0.3s ease;
}
.header__favorite:hover {
	border: 2px solid #fbaed0;
}
</style>
