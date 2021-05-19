<template>
	<div>
		<!-- Overlay Menu -->
		<transition name="slide-in" @after-enter="afterEnter" @before-leave="beforeLeave">
			<v-sheet v-show="navOpen" class="overlay">
				<v-container>
					<div class="d-flex flex-column justify-center flex-grow-1">
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
					</div>
					<div class="d-flex flex-column justify-center flex-grow-1">
						<transition name="contact">
							<div v-show="opened" class="text-center contact-icons">
								<h3 class="mb-5">Let's Be Social Buddies</h3>
								<contact-icons />
							</div>
						</transition>
					</div>
				</v-container>
			</v-sheet>
		</transition>

		<!-- Header and Nav Btn -->
		<header class="site-header">
			<nuxt-link
				to="/"
				tag="h1"
				class="site-title"
				:class="{ lighten: navOpen }"
				@click.native="navOpen = false"
			>
				<div>{{ title }}</div>
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
				scrollY: 0,
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
						title: 'Experience',
						to: '/experience',
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
			togglePreventScroll() {
				document.body.classList.toggle('prevent-scroll')
			},
			toggleNav() {
				this.navOpen = !this.navOpen
			},
			afterEnter() {
				this.opened = true
				this.scrollY = window.scrollY
				this.togglePreventScroll()
			},
			beforeLeave() {
				this.opened = false
				this.togglePreventScroll()
				window.scrollTo(0, this.scrollY)
			},
		},
	}
</script>

<style lang="scss" scoped>
	h3 {
		color: $dc-neutral;
		font-size: 16px;

		@media (min-width: 700px) {
			font-size: 24px;
		}
	}

	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
	}

	.overlay {
		background: linear-gradient(-25deg, $dc-blue-md, $dc-green) !important;
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
		position: fixed;
		right: 5%;
		top: 0;
		z-index: 100;

		@media (min-width: 700px) {
			padding-top: 15px;
		}
	}

	.site-title {
		color: $dc-blue-dk;
		cursor: pointer;
		font-weight: 900;
		text-shadow: 2px 2px 0 $dc-blue-lt;
		transition: all 100ms linear 900ms;

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
		color: $dc-blue-md;
		display: block;
		font-size: 16px;
		line-height: 1.2;
		text-align: right;
		text-shadow: none;
		transition: all 100ms linear 900ms;

		&.lighten {
			color: $dc-neutral;
			transition: all 100ms ease-in;
		}

		@media (min-width: 700px) {
			font-size: 20px;
		}
	}

	// Hamburger Menu
	.nav-btn {
		background-color: $dc-blue-dk;
		box-shadow: 3px 3px 0 $dc-blue-lt;
		height: 70px !important;
		transform: scale(0.75);
		width: 70px !important;

		&:hover {
			opacity: 1 !important;
		}

		@media (min-width: 700px) {
			transform: scale(1);
		}
	}

	.nav-btn-icon .hamburger-inner {
		background-color: $dc-neutral;

		&::before,
		&::after {
			background-color: $dc-neutral;
		}
	}

	// Navigation
	.nav-list {
		background: none !important;
		margin-top: 35%;
	}

	.nav-link {
		color: #fff;
		display: block;
		font-size: 36px;
		margin: 7px auto;
		text-align: center;
		text-decoration: none;
		text-shadow: 0 0 1px $dc-dark;

		&::before {
			background-color: $dc-red;
		}

		@media (min-width: 700px) {
			font-size: 48px;
			margin: 15px auto;
		}
	}

	.contact-icons {
		margin-bottom: 13%;

		@media (min-width: 1200px) {
			margin-bottom: 80px;
		}
	}
</style>
