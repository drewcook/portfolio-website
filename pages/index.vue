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
						<h2>Hi, I'm Drew Cook.</h2>
						<div class="sm-divider" />
						<h3>I build things for the interwebs. Web3 here we go!</h3>
						<p>
							I'm a Denver-based, full-stack software engineer with a specialization in JavaScript
							for building backends and client applications for the web. I am also working in Web3,
							building DApps and writing smart contracts in Solidity, mainly on Ethereum.
						</p>
						<p>
							I'm currently working as a full-stack engineer at
							<a href="https://corporate.charter.com/" class="content-link" target="_blank">
								Aave,
							</a>
							interacting with an array of blockchain technologies and crypto, and shaping the
							future of how we use the Internet.
						</p>
						<p>
							I am also a co-founder of a Web3 product called
							<a href="https://polyecho.xyz" class="content-link" target="_blank">Polyecho</a>, a
							collaborative music-making platform where producers and musicians can upload stems
							onto a project to build a song, which can be minted as an NFT on-chain. Profits from
							the sale price get evenly distributed to the collaborators, and secondary sales
							generate evergreen kickbacks through the form of royalties.
						</p>
						<p>
							I also operate as a freelance consultant under my own company,
							<a href="https://altheaweb.services" class="content-link" target="_blank">
								Althea Web Services,
							</a>
							where I provide engineering support for a host of tech-based products.
						</p>
						<v-btn color="primary" nuxt to="/work">Portfolio</v-btn>
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
						I've worked in both public and private sectors and have had the opportunity to work with
						a variety of team sizes over my career. It has given me insight into the pros and cons
						of both large and small engineering departments.
					</p>
					<v-btn color="secondary" nuxt to="/experience">Experience</v-btn>
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
						I enjoy the process of making an idea come to life. All you need is to start with a
						seed, and that through consistent nurture and dedication to an end-goal in mind, it can
						become something great that can last the test of time, rooted in furtile soil.
					</p>
					<v-btn color="primary" nuxt to="/about">Read More</v-btn>
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
						I welcome the opportunity when the solution to a problem calls for a new technology,
						language, or library. Knowledge is power, and it is also the ability to determine what
						tool is the right one for the best outcome when working through different solutions.
					</p>
					<v-btn color="info" nuxt to="/skills">My Skills</v-btn>
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

	.melon {
		background-color: $dc-neutral;
		border-bottom: 10px solid $dc-blue-lt;
		margin-bottom: -60px;
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

	#home-jumbo {
		position: relative;
	}

	.scroll-down {
		bottom: 10%;
		position: absolute;
		scroll-behavior: smooth;

		span {
			height: 100%;
		}
	}

	.jumbo {
		background-color: $dc-light;
		height: 100vh;
		margin-top: -$header-height-mobile;
		padding: 60px 0;
		width: 100vw;

		@media (min-width: 700px) {
			margin-top: -$header-height;
		}

		.v-btn {
			color: #fff !important;
			font-weight: bold;
		}
	}

	.small-text {
		font-size: 0.7rem;
	}
</style>
