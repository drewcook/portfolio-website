<template>
	<v-app dark>
		<v-app-bar app>
			<v-container>
				<v-row class="d-flex justify-space-between align-center">
					<v-col>
						<v-toolbar-title v-text="title" />
					</v-col>
					<v-col>
						<v-toolbar-items class="justify-end">
							<nuxt-link v-for="link in navLinks" :key="link.title" :to="link.to">
								<v-list-item link>
									<v-list-item-content>
										<v-list-item-title>{{ link.title }}</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
							</nuxt-link>
						</v-toolbar-items>
					</v-col>
				</v-row>
			</v-container>
		</v-app-bar>
		<v-main>
			<v-container>
				<nuxt />
			</v-container>
		</v-main>
		<v-footer>
			<span>&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Drew Cook, Developer',
				navLinks: [
					{
						title: 'Home',
						to: '/',
					},
					{
						title: 'Work',
						to: '/work',
					},
					{
						title: 'About',
						to: '/about',
					},
					{
						title: 'Contact',
						to: '/contact',
					},
				],
			}
		},
	}
</script>

<style scoped>
	a {
		text-decoration: none;
	}
</style>
