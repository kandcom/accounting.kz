<template>
	<NuxtLink :class="classNames" to="/favorite">Избранное</NuxtLink>
</template>
<script>
export default {
	props: ['classNames'],
}
</script>
