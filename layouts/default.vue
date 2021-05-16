<template>
	<v-app dark>
		<Header />
		<div class="scroll-away-spacer" />

		<!-- Page Content -->
		<v-main id="site-content">
			<v-container>
				<nuxt />
			</v-container>
		</v-main>

		<!-- Site Footer -->
		<v-footer>
			<v-container>
				<p>
					<a
						rel="noopener noreferrer"
						href="https://github.com/drewcook/portfolio-website"
						target="_blank"
						>Designed &amp; Built by Drew Cook.</a
					>
				</p>
				<p><small>&copy; Althea Web Services, LLC. All Rights Reserved.</small></p>
			</v-container>
		</v-footer>
	</v-app>
</template>

<style lang="scss" scoped>
	$header-height: 185px;

	.scroll-away-spacer {
		background-image: linear-gradient(0deg, rgba(239, 239, 239, 0), rgba(239, 239, 239, 1) 40%);
		height: $header-height;
		position: fixed;
		width: 100%;
		z-index: 50;
	}

	#site-content {
		margin-top: $header-height;
	}
</style>
