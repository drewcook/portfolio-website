<template>
	<v-app dark>
		<Header />
		<div class="scroll-away-spacer" />
		<div class="spacer" />

		<!-- Page Content -->
		<v-main id="site-content">
			<v-container>
				<nuxt />
			</v-container>
		</v-main>

		<!-- Contact CTA -->
		<section class="footer-cta">
			<v-container>
				<v-row>
					<v-spacer />
					<v-col cols="12" sm="8">
						<v-card class="text-center card" shaped>
							<h3>Would you like to work together?</h3>
							<p>Don't hesitate to reach out if you'd like to connect.</p>
							<v-btn color="accent" nuxt to="/contact">Get In Touch</v-btn>
						</v-card>
					</v-col>
					<v-spacer />
				</v-row>
			</v-container>
		</section>

		<!-- Site Footer -->
		<v-footer class="footer-bar">
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
								Althea Web Services, LLC.
							</a>
							All Rights Reserved.
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
						</small>
					</v-col>
				</v-row>
			</v-container>
		</v-footer>
	</v-app>
</template>

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

	#site-content {
		margin-top: $header-height-mobile;

		@media (min-width: 700px) {
			margin-top: $header-height;
		}
	}

	.footer-cta {
		background-color: $dc-neutral;
		border-bottom: 10px solid $dc-blue-lt;
		border-top: 10px solid $dc-blue-lt;
		padding: 60px 0;

		.card {
			padding: 30px;
		}
	}

	.footer-bar {
		background-color: $dc-dark !important;
		color: $dc-neutral !important;
		font-size: 14px;
		padding: 10px 0;
		text-align: center;

		a {
			color: $dc-neutral;
		}

		a:hover {
			color: $dc-blue-lt;
		}
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
</style>
