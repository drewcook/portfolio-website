<template>
	<v-app dark>
		<v-navigation-drawer v-model="sidebar" app right temporary>
			<span class="icon d-flex justify-end close">
				<v-appbar-nav-icon @click="sidebar = !sidebar">
					<v-icon>{{ closeIcon }}</v-icon>
				</v-appbar-nav-icon>
			</span>
			<v-list nav>
				<nuxt-link v-for="link in navLinks" :key="link.title" :to="link.to">
					<v-list-item link>
						<v-list-item-action>
							<v-icon>{{ link.icon }}</v-icon>
						</v-list-item-action>
						<v-list-item-content>
							<v-list-item-title>{{ link.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</nuxt-link>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app>
			<v-container>
				<v-row class="d-flex justify-space-between align-center">
					<v-col>
						<nuxt-link to="/" tag="span" class="title">
							<v-toolbar-title v-text="title" />
						</nuxt-link>
					</v-col>
					<v-col class="d-flex justify-end">
						<span class="d-md-none icon">
							<v-appbar-nav-icon @click="sidebar = !sidebar">
								<v-icon>{{ menuIcon }}</v-icon>
							</v-appbar-nav-icon>
						</span>
						<v-toolbar-items class="d-none d-md-flex">
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
			<span>
				&copy; {{ new Date().getFullYear() }} | Drew Cook,
				<small>All Rights Reserved</small>
			</span>
		</v-footer>
	</v-app>
</template>

<script>
	import { mdiAccount, mdiChartBar, mdiClose, mdiCodeTags, mdiEmail, mdiMenu } from '@mdi/js'
	export default {
		data() {
			return {
				title: 'Drew Cook, Developer',
				sidebar: false,
				menuIcon: mdiMenu,
				closeIcon: mdiClose,
				navLinks: [
					{
						title: 'About',
						to: '/about',
						icon: mdiAccount,
					},
					{
						title: 'Work',
						to: '/work',
						icon: mdiCodeTags,
					},
					{
						title: 'Skills',
						to: '/skills',
						icon: mdiChartBar,
					},
					{
						title: 'Contact',
						to: '/contact',
						icon: mdiEmail,
					},
				],
			}
		},
	}
</script>

<style scoped>
	.title,
	.icon {
		cursor: pointer;
	}

	.close {
		padding: 20px 30px;
	}

	a {
		text-decoration: none;
	}
</style>
