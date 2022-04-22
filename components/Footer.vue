<template>
	<v-footer class="site-footer flex-column" padless>
		<section class="footer-links">
			<v-container>
				<v-row>
					<v-col cols="12" sm="6" class="quick-links">
						<h5>Quick Links</h5>
						<ul>
							<li><nuxt-link class="content-link" to="/about">About</nuxt-link></li>
							<li><nuxt-link class="content-link" to="/work">Work</nuxt-link></li>
							<li><a class="content-link" href="/resume.pdf" target="_blank">Resume</a></li>
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
								href="https://altheaweb.services"
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
							>
								Designed &amp; Built by Drew Cook.
							</a>
							• {{ new Date().getFullYear() }}
						</small>
					</v-col>
				</v-row>
			</v-container>
		</section>
	</v-footer>
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
			border-bottom: 15px solid $dc-blue-dk !important;
			border-top: 15px solid $dc-blue-lt !important;
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

			.donate {
				font-size: 13px;
				font-style: italic;
				margin: 3px 0;
			}

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
