<template>
	<div id="homepage">
		<div id="scroll-btns">
			<div class="scroll-btn hvr-grow" @click="scrollDown('home-jumbo')"></div>
			<div class="scroll-btn hvr-grow" @click="scrollDown('home-experience')"></div>
			<div class="scroll-btn hvr-grow" @click="scrollDown('home-about')"></div>
			<div class="scroll-btn hvr-grow" @click="scrollDown('home-learn')"></div>
			<div class="scroll-btn hvr-grow" @click="scrollDown('footer-cta')"></div>
		</div>
		<section
			id="home-jumbo"
			class="jumbo d-flex flex-column justify-center align-center text-center"
		>
			<v-container>
				<transition name="jumbo">
					<div v-show="loaded">
						<h2>Hello, Decentralization.</h2>
						<div class="sm-divider" />
						<h3>I'm a full-stack software engineer working in Web3.</h3>
						<p>
							I'm focused on building permissionless web applications that interact with
							decentralized blockchain networks. This means building deterministic programs with
							smart contracts, the client web applications, and APIs that interact with them.
						</p>
						<p>
							My main focus is building
							<a href="https://alkimiya.io" target="_blank" class="content-link"> Alkimiya Protocol</a> with a stellar team, the
							leading decentralized blockspace markets protocol. We are providing financial markets around blockspace primitives, allowing users to long or short indicies, such as the ETH base gas fee and the average BTC
							transcation fee.
						</p>
						<p>
							I'm spending my free engineering time studying the security pitfalls of Solidity code,
							and reading over all the vulnerabilities occurring in Defi protocols as well as
							researching about new advancements and seeing the uprise in zero-knowledge use-case
							implementations.
						</p>
						<v-btn color="primary" nuxt to="/portfolio">My Portfolio</v-btn>
					</div>
				</transition>
			</v-container>
			<div class="scroll-down">
				<v-btn
					class="hvr-hang"
					color="info"
					fab
					elevation="3"
					@click="scrollDown('home-experience')"
				>
					<v-icon>{{ scrollDownIcon }}</v-icon>
				</v-btn>
			</div>
		</section>

		<section id="home-experience" class="water text-center">
			<v-container>
				<div data-aos="fade-up" data-aos-delay="300">
					<h2 class="mb-3">My Experience</h2>
					<div class="sm-divider" />
					<h3>I love to collaborate.</h3>
					<p>
						Teamwork makes the dream work, we can all support each other to meet our goals and use
						our collective knowledge to create something unique and innovative. We all have
						different backgrounds and expertise, both professionally and personally, and the
						diversity in that creates a much more unified product in the end. I'm happiest working
						with others that are passionate about what they do and want to make a positive change
						with technology and are driven to make that happen as much as I am. I feed off that
						energy and give it back in return.
					</p>
					<v-btn color="secondary" nuxt to="/experience">My Contributions</v-btn>
				</div>
			</v-container>
		</section>

		<section id="home-learn" class="melon text-center">
			<v-container>
				<div data-aos="fade-up" data-aos-delay="300">
					<h2>Levelling Up</h2>
					<div class="sm-divider" />
					<h3>I love to learn.</h3>
					<p>
						I approach learning as a lifelong pursuit, forever growing in perspective and knowledge
						that can be applied in compounding ways. I truly enjoy the process of researching into a
						new area of study and exploring it, practicing it, seeing where it takes me and how it
						melds in with other areas of study. All of the great minds of our time had an emphasis
						of continued learning, so there must be good reason to believe it, right?
					</p>
					<v-btn color="info" nuxt to="/skills">My Skillset</v-btn>
				</div>
			</v-container>
		</section>

		<section id="home-about" class="sky text-center">
			<v-container>
				<div data-aos="fade-up" data-aos-delay="300">
					<h2>About Me</h2>
					<div class="sm-divider" />
					<h3>I love to create.</h3>
					<p>
						In short, I'm a creator and builder, both parts art and engineering. I enjoy the process
						of making an idea come to life. All you need is to start with a seed, and that through
						consistent nurture and dedication to an end-goal in mind, it can become something great
						that can last the test of time, rooted in fertile soil.
					</p>
					<v-btn color="primary" nuxt to="/about">Read More</v-btn>
				</div>
			</v-container>
		</section>
	</div>
</template>

<script>
	import { mdiChevronDown } from '@mdi/js'
	import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed'

	export default {
		data() {
			return {
				loaded: false,
				scrollDownIcon: mdiChevronDown,
			}
		},
		head() {
			return {
				title: 'Welcome To My Portfolio',
				bodyAttrs: {
					class: 'hide-scrollbar',
				},
			}
		},
		mounted() {
			this.loaded = true
		},
		methods: {
			scrollDown(sectionId) {
				const section = document.getElementById(sectionId)
				smoothScrollIntoView(section, { behavior: 'smooth' })
				// const offset = window.innerWidth > 700 ? 600 : 670
				// window.scrollTo({
				// 	top: offset,
				// 	behavior: 'smooth',
				// })
			},
		},
	}
</script>

<style lang="scss" scoped>
	#homepage {
		position: relative;
	}

	#scroll-btns {
		display: flex;
		flex-direction: column;
		margin-right: 10px;
		margin-top: -60px;
		position: fixed;
		right: 0;
		top: 50%;
		z-index: 90;

		.scroll-btn {
			background-color: #fff;
			border: 3px solid $accent;
			border-radius: 50%;
			box-shadow: 1px 1px 3px $dc-gray;
			cursor: pointer;
			height: 15px;
			margin: 5px;
			width: 15px;
		}
	}

	#home-jumbo {
		position: relative;
	}

	.scroll-down {
		scroll-behavior: smooth;

		@media (min-width: 700px) {
			bottom: 10%;
			position: absolute;
		}

		span {
			height: 100%;
		}
	}

	.jumbo {
		background-color: $dc-light;
		margin-top: -$header-height-mobile + 32px;
		padding: 60px 0;
		width: 100vw;

		@media (min-width: 700px) {
			height: 100vh;
			margin-top: -$header-height;
		}

		.v-btn {
			color: #fff !important;
			font-weight: bold;
		}
	}

	.melon {
		background-color: $dc-neutral;
		border-bottom: 10px solid $dc-blue-lt;
		padding: 60px 0;
	}

	p {
		margin: 15px auto 30px;
		max-width: 800px;
	}

	.sky {
		background-color: $dc-blue-lt;
		padding: 60px 0;

		h2 {
			color: $dc-blue-dk;
		}

		h3 {
			color: $dc-blue-md;
		}

		p {
			color: $dc-gray-dk;
		}
	}

	.water {
		background-color: $dc-blue-md;
		padding: 60px 0;

		h2,
		p {
			color: #fff;
		}

		h3 {
			color: $dc-neutral;
		}

		.v-btn {
			font-weight: bold;
		}
	}

	.small-text {
		font-size: 0.7rem;
	}
</style>
