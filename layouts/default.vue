<template>
	<v-app dark>
		<Header />
		<div class="scroll-away-spacer" />

		<!-- Page Content -->
		<v-main class="overflow-y-auto site-content">
			<v-container>
				<nuxt />
			</v-container>
		</v-main>

		<!-- Site Footer -->
		<v-footer>
			<span> &copy; {{ new Date().getFullYear() }} | Drew Cook </span>
		</v-footer>
	</v-app>
</template>

<style lang="scss" scoped>
	$header-height: 190px;

	.scroll-away-spacer {
		background-image: linear-gradient(0deg, rgba(239, 239, 239, 0), rgba(239, 239, 239, 1) 40%);
		height: $header-height;
		position: fixed;
		width: 100%;
		z-index: 50;
	}

	.site-content {
		margin-top: $header-height;
	}
</style>
