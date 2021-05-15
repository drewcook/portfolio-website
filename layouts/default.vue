<template>
	<v-app dark>
		<v-btn @click="ugh">Ugh</v-btn>
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
								class="hvr-underline-from-right nav-link"
								@click.native="toggleNav"
							>
								{{ link.title }}
							</nuxt-link>
						</v-list>
					</transition>
					<transition name="contact">
						<div v-show="opened" class="text-center">
							<h3>Get In Touch With Me</h3>
							<div class="contact-icons">
								<a
									href="https://linkedin.com/in/drewcook2"
									target="_blank"
									rel="noopener noreferrer"
								>
									<v-btn color="primary" elevation="2" fab x-large>
										<v-icon x-large>{{ linkedInIcon }}</v-icon>
									</v-btn>
								</a>
								<a href="https://github.com/drewcook" target="_blank" rel="noopener noreferrer">
									<v-btn color="primary" elevation="2" fab x-large>
										<v-icon x-large>{{ githubIcon }}</v-icon>
									</v-btn>
								</a>
								<a
									href="mailto:altheawebservices@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									<v-btn color="primary" elevation="2" fab x-large>
										<v-icon x-large>{{ emailIcon }}</v-icon>
									</v-btn>
								</a>
							</div>
						</div>
					</transition>
				</v-container>
			</v-sheet>
		</transition>

		<!-- Header and Nav Btn -->
		<v-container>
			<div class="mb-9">
				<nuxt-link to="/" tag="h1" class="title">
					<v-app-bar-title>{{ title }}</v-app-bar-title>
				</nuxt-link>

				<v-app-bar-nav-icon class="nav-btn" x-large @click="toggleNav">
					<v-icon>{{ navOpen ? closeIcon : menuIcon }}</v-icon>
				</v-app-bar-nav-icon>
			</div>
		</v-container>

		<!-- Page Content -->
		<v-main class="overflow-y-auto">
			<v-container>
				<nuxt />
			</v-container>
		</v-main>

		<!-- Site Footer -->
		<v-footer>
			<span>
				&copy; {{ new Date().getFullYear() }} | Drew Cook,
				<small>All Rights Reserved</small>
			</span>
		</v-footer>
	</v-app>
</template>

<script>
	import { mdiClose, mdiEmail, mdiGithub, mdiLinkedin, mdiMenu } from '@mdi/js'
	export default {
		data() {
			return {
				title: 'Drew Cook, Developer',
				sidebar: false,
				menuIcon: mdiMenu,
				closeIcon: mdiClose,
				navOpen: false,
				opened: false,
				githubIcon: mdiGithub,
				linkedInIcon: mdiLinkedin,
				emailIcon: mdiEmail,
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
			ugh() {
				const main = document.getElementsByTagName('main')[0]
				const alternateBg = bg =>
					bg === 'red'
						? (main.style.backgroundColor = 'springgreen')
						: (main.style.backgroundColor = 'red')

				const interval = setInterval(() => alternateBg(main.style.backgroundColor), 200)
				return interval
			},
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
	}

	.overlay {
		background: linear-gradient(0.35turn, $primary, $secondary) !important;
		height: 100vh;
		position: fixed;
		width: 100vw;
		z-index: 5;
	}

	.title {
		cursor: pointer;
		left: 5%;
		position: fixed;
		text-shadow: 1px 1px 5px #111;
		top: 5%;
		z-index: 99;
	}

	.nav-btn {
		background-color: $primary;
		box-shadow: 0 0 9px #111;
		height: 60px;
		position: fixed;
		right: 5%;
		top: 5%;
		width: 60px;
		z-index: 99;
	}

	.nav-list {
		background: none !important;
		height: 50%;
	}

	a {
		color: #fff;
		text-decoration: none;
	}

	.nav-link {
		color: #fff;
		display: block;
		font-size: 40px;
		margin: 15px auto;
		text-align: center;

		::before {
			background-color: #ffa500;
		}
	}

	.contact-icons {
		align-items: center;
		display: flex;
		justify-content: space-evenly;
		margin: 20px 0;

		a {
			margin: 0 5px;
		}
	}
</style>
