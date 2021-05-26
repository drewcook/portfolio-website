<template>
	<v-app>
		<!-- Header -->
		<Header />
		<!-- Page Content -->
		<v-main id="site-content" :class="$route.path === '/' ? 'is-home' : ''">
			<nuxt />
		</v-main>
		<!-- Contact CTA -->
		<ContactCTA />
		<!-- Site Footer -->
		<Footer />
	</v-app>
</template>

<style lang="scss" scoped>
	#site-content {
		padding-bottom: 60px !important;

		&.is-home {
			padding-bottom: 0 !important;
		}
	}
</style>
