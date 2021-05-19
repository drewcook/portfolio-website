<template>
	<v-app dark>
		<Header />
		<div class="scroll-away-spacer" />
		<div class="spacer" />

		<!-- Page Content -->
		<v-main id="site-content">
			<nuxt />
		</v-main>

		<!-- Contact CTA -->
		<section class="footer-cta">
			<v-container>
				<v-row>
					<v-spacer />
					<v-col cols="12" sm="8">
						<v-card class="text-center card" shaped>
							<h3>Would you like to work together?</h3>
							<div class="sm-divider" />
							<p>Don't hesitate to reach out if you'd like to connect.</p>
							<v-btn nuxt to="/contact">Get In Touch</v-btn>
						</v-card>
					</v-col>
					<v-spacer />
				</v-row>
			</v-container>
		</section>

		<!-- Site Footer -->
		<v-footer class="site-footer flex-column" padless>
			<section class="footer-links">
				<v-container>
					<v-row>
						<v-col cols="12" sm="6" class="quick-links">
							<h5>Quick Links</h5>
							<ul>
								<li><nuxt-link class="content-link" to="/about">About</nuxt-link></li>
								<li><nuxt-link class="content-link" to="/work">Work</nuxt-link></li>
								<li><nuxt-link class="content-link" to="/resume.pdf">Resume</nuxt-link></li>
								<li><nuxt-link class="content-link" to="/experience">Experience</nuxt-link></li>
								<li><nuxt-link class="content-link" to="/contact">Contact</nuxt-link></li>
							</ul>
						</v-col>
						<v-col cols="12" sm="6">
							<h5>Connect With Me</h5>
							<p class="lead">
								<a href="mailto:drew@drewcook.dev" class="content-link">
									<v-icon class="icon">{{ emailIcon }}</v-icon>
									drew@drewcook.dev
								</a>
							</p>
							<div class="social-wrap">
								<contact-icons />
							</div>
						</v-col>
					</v-row>
				</v-container>
			</section>
			<section class="footer-floor">
				<v-container>
					<v-row>
						<v-col cols="12" sm="6" class="copyright">
							<small>
								&copy;
								<a
									rel="noopener noreferrer"
									href="https://github.com/drewcook/portfolio-website"
									target="_blank"
									class="content-link"
								>
									Althea Web Services, LLC
								</a>
								• All Rights Reserved.
							</small>
						</v-col>
						<v-col cols="12" sm="6" class="builtby">
							<small>
								<a
									rel="noopener noreferrer"
									href="https://github.com/drewcook/portfolio-website"
									target="_blank"
									class="content-link"
									>Designed &amp; Built by Drew Cook.</a
								>
								• {{ new Date().getFullYear() }}
							</small>
						</v-col>
					</v-row>
				</v-container>
			</section>
		</v-footer>
	</v-app>
</template>

<script>
	import { mdiEmail } from '@mdi/js'
	export default {
		data() {
			return {
				emailIcon: mdiEmail,
			}
		},
	}
</script>

<style lang="scss" scoped>
	$header-height-mobile: 115px;
	$header-height: 185px;

	.scroll-away-spacer {
		background-image: linear-gradient(0deg, rgba(239, 239, 239, 0), rgba(239, 239, 239, 1) 40%);
		height: $header-height-mobile;
		position: fixed;
		width: 100%;
		z-index: 50;

		@media (min-width: 700px) {
			height: $header-height;
		}
	}

	.spacer {
		margin-bottom: $header-height-mobile;

		@media (min-width: 700px) {
			margin-bottom: $header-height;
		}
	}

	// #site-content {
	// 	margin-top: $header-height-mobile;

	// 	@media (min-width: 700px) {
	// 		margin-top: $header-height;
	// 	}
	// }

	.footer-cta {
		background-color: $dc-neutral;
		border-top: 1px solid $dc-gray-lt;
		padding: 60px 0;

		.card {
			padding: 30px;
		}

		.v-btn {
			background-color: $dc-blue-dk !important;
			color: #fff;
		}
	}

	.site-footer {
		color: $dc-neutral !important;
		font-size: 14px;

		a {
			color: $dc-neutral;
		}

		a:hover {
			color: $dc-blue-lt;
		}

		section {
			width: 100%;
		}

		.footer-links {
			background-color: $dc-blue-md !important;
			border-bottom: 15px solid $dc-blue-dk;
			border-top: 15px solid $dc-blue-lt;
			padding: 40px 0;
			text-align: center;

			h5 {
				color: #fff !important;
				font-size: 20px;
				margin-bottom: 15px;
			}

			ul {
				list-style: none;
				margin: 0;
				padding: 0;
			}

			.social-wrap {
				margin: auto;
				max-width: 220px;
				padding-top: 15px;
			}

			.lead {
				font-size: 18px;
			}

			a:hover {
				color: $dc-dark;
			}

			.icon {
				color: $dc-neutral;
			}
		}

		.footer-floor {
			background-color: $dc-dark !important;
			padding: 10px 0;
			text-align: center;

			.copyright {
				@media (min-width: 600px) {
					text-align: left;
				}
			}

			.builtby {
				@media (min-width: 600px) {
					text-align: right;
				}
			}
		}
	}
</style>
