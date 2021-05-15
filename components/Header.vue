<template>
	<div>
		<!-- Overlay Menu -->
		<transition name="slide-in" @after-enter="afterEnter" @before-leave="beforeLeave">
			<v-sheet v-show="navOpen" class="overlay">
				<v-container>
					<transition name="nav">
						<!-- Main Navigation -->
						<v-list v-show="opened" nav class="nav-list">
							<nuxt-link
								v-for="link in navLinks"
								:key="link.title"
								:to="link.to"
								class="nav-link hvr-underline-from-right hvr-float"
								@click.native="toggleNav"
							>
								{{ link.title }}
							</nuxt-link>
						</v-list>
					</transition>
					<transition name="contact">
						<div v-show="opened" class="text-center">
							<h3>Let's Be Social Buddies</h3>
							<contact-icons />
						</div>
					</transition>
				</v-container>
			</v-sheet>
		</transition>

		<!-- Header and Nav Btn -->
		<header class="site-header">
			<nuxt-link to="/" tag="h1" class="site-title">
				<v-app-bar-title>{{ title }}</v-app-bar-title>
				<span class="site-subtitle" :class="{ lighten: navOpen }">{{ subtitle }}</span>
			</nuxt-link>

			<v-app-bar-nav-icon
				class="nav-btn hvr-grow hamburger hamburger--spring"
				:class="{ 'is-active': navOpen }"
				@click="toggleNav"
			>
				<span class="nav-btn-icon hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</v-app-bar-nav-icon>
		</header>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Drew Cook',
				subtitle: 'Builder of web things.',
				navOpen: false,
				opened: false,
				navLinks: [
					{
						title: 'About',
						to: '/about',
					},
					{
						title: 'Work',
						to: '/work',
					},
					{
						title: 'Skills',
						to: '/skills',
					},
					{
						title: 'Contact',
						to: '/contact',
					},
				],
			}
		},
		methods: {
			toggleNav() {
				this.navOpen = !this.navOpen
			},
			afterEnter() {
				this.opened = true
			},
			beforeLeave() {
				this.opened = false
			},
		},
	}
</script>

<style lang="scss" scoped>
	h3 {
		color: #fff;
	}

	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
	}

	.overlay {
		background: linear-gradient(0.35turn, $dc-blue-md, $dc-blue-dk) !important;
		height: 100vh;
		position: fixed;
		width: 100vw;
		z-index: 99;
	}

	.site-header {
		align-items: center;
		display: flex;
		justify-content: space-between;
		left: 5%;
		padding-top: 15px;
		position: fixed;
		right: 5%;
		top: 0;
		z-index: 100;
	}

	.site-title {
		color: $accent;
		cursor: pointer;
		font-weight: 900;
		text-shadow: 3px 3px 0 $dc-blue-lt;

		div {
			font-family: inherit;
			font-size: inherit;
			line-height: 1;
			padding-top: 10px;
		}

		@media (min-width: 700px) {
			font-size: 50px;
		}
	}

	.site-subtitle {
		color: $dc-gray;
		display: block;
		font-size: 16px;
		line-height: 1.2;
		text-align: right;
		text-shadow: none;
		transition: color 100ms linear 900ms;

		&.lighten {
			color: #fff;
			transition: color 100ms ease-in;
		}

		@media (min-width: 700px) {
			font-size: 20px;
		}
	}

	// Hamburger Menu
	.nav-btn {
		background-color: $dc-red;
		box-shadow: 2px 2px 0 $dc-blue-lt;
		height: 70px !important;
		width: 70px !important;

		&:hover {
			opacity: 1 !important;
		}
	}

	.nav-btn-icon .hamburger-inner {
		background-color: #fff;

		&::before,
		&::after {
			background-color: #fff;
		}
	}

	// Navigation
	.nav-list {
		background: none !important;
		margin-bottom: 10%;
	}

	.nav-link {
		color: #fff;
		display: block;
		font-size: 48px;
		margin: 15px auto;
		text-align: center;
		text-decoration: none;

		&::before {
			background-color: $dc-red;
		}
	}
</style>
