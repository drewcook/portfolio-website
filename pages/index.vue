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
							decentralized, EVM-based blockchain networks. This means building deterministic
							programs with smart contracts, the client web applications, and APIs that interact
							with them.
						</p>
						<p>
							The stack I am most comfortable in is Solidity, TypeScript, Node, Go, React, Next.js,
							Redis, MongoDB, & PostgreSQL. This entails all the things, the REST-APIs, client UIs,
							and off-chain storage. I also use tools like Foundry, Slither, Echidna, and Tenderly
							for smart contract development, testing, auditing, and deploying. When working with
							zero-knowledge circuits, my experience mostly lies in Circom and snarkjs.
						</p>
						<p>
							Currently, I'm spending my free engineering time studying the security pitfalls of
							Solidity code, and reading over all the vulnerabilities occurring in Defi protocols as
							well as researching about new advancements and seeing the uprise in zero-knowledge
							use-case implementations.
						</p>
						<v-btn color="primary" nuxt to="/portfolio">View My Portfolio</v-btn>
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
						I've worked on teams large and small, as an independence, in startups, and in large
						organizations, both public and private sectors and have seen a lot of ways on how to set
						goals, execute, and innovate as a collective group. There are many ways to get it done,
						but I genuinely am most happy when working alongside peers who are just as driven and
						passionate about what they do on a daily basis to make a positive change with technology
						as I am.
					</p>
					<p>
						I've even had the opportunity to work directly with Vitalik Buterin by implementing dark
						mode onto his
						<a href="https://vitalik.ca/" class="content-link" target="_blank">popular blog</a>. It
						was sponsored through a
						<a href="https://gitcoin.co" class="content-link" target="_blank">Gitcoin</a> grant, and
						you can view the PRs I merged in
						<a
							href="https://github.com/vbuterin/blogmaker/pull/11"
							class="content-link"
							target="_blank"
							>here</a
						>
						and
						<a href="https://github.com/vbuterin/blog/pull/40" class="content-link" target="_blank"
							>here</a
						>.
					</p>
					<p>
						In a previous role, I have worked as an engineer at
						<a href="https://aave.com/" class="content-link" target="_blank"> Aave Companies, </a>
						building out and maintaining the primary user interface and APIs that interact with the
						Aave Protocol smart contracts, which is deployed on a variety of blockchain networks.
					</p>
					<p>
						I am also the founder of a Web3 protocol and music NFT platform called
						<a href="https://arbor.audio/" class="content-link" target="_blank">Arbor</a>. It is a
						collaborative music-making platform where producers and musicians can upload individual
						stems onto a project to build a song, which users can then buy mint as an NFT on-chain
						directly from the artists. Profits from the sale price get evenly distributed to the
						collaborators, and secondary sales generate evergreen kickbacks through the form of
						royalties, all while creating and fostering community.
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
						I approach learning like approaching the weather for the day, as in there will always be
						something new to experience. I live a life of curiosity in exploring new territory and
						the understanding it can provide in the bigger picture, carrying with me the perspective
						from the things I have learned or practiced and the humbleness in not knowing everything
						which perpetuates this process. I truly enjoy the process of learning and the
						compounding effect from exposure to different concepts and emerging tech which it
						brings. It allows me to see the bigger picture and then focus in on a unique problem and
						solution.
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
						that can last the test of time, rooted in furtile soil.
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
