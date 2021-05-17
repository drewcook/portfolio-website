<template>
	<v-app dark>
		<Header />
		<div class="scroll-away-spacer" />

		<div class="spacer" />

		<section class="melon text-center">
			<v-container>
				<h2>Hi, I'm Drew Cook.</h2>
				<h3>I build things for the interwebs.</h3>
			</v-container>
		</section>
		<!--
		<section class="sky text-center">
			<v-container>
				<h2>Hi, I'm Drew Cook.</h2>
				<h3>I build things for the interwebs.</h3>
			</v-container>
		</section>

		<section class="water text-center">
			<v-container>
				<h2>Hi, I'm Drew Cook.</h2>
				<h3>I build things for the interwebs.</h3>
			</v-container>
		</section> -->

		<section class="deep text-center">
			<v-container>
				<h2 class="mb-3">Check Out Some Of My Work</h2>
				<v-btn color="accent" nuxt to="/work">Projects</v-btn>
			</v-container>
		</section>

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
	$header-height: 185px;

	.scroll-away-spacer {
		background-image: linear-gradient(0deg, rgba(239, 239, 239, 0), rgba(239, 239, 239, 1) 40%);
		height: $header-height;
		position: fixed;
		width: 100%;
		z-index: 50;
	}

	.spacer {
		margin-bottom: $header-height;
	}

	.melon {
		background-color: $dc-neutral;
		border-bottom: 10px solid $dc-blue-lt;
		padding: 60px 0;
	}

	.sky {
		background-color: $dc-blue-lt;
		padding: 60px 0;

		h2 {
			color: $dc-blue-dk;
		}

		p {
			color: $dc-blue-md;
		}
	}

	.water {
		background-color: $dc-blue-md;
		padding: 60px 0;

		h2,
		h3 {
			color: $dc-neutral;
		}
	}

	.deep {
		background-color: $dc-blue-dk;
		border-top: 10px solid $dc-blue-md;
		padding: 60px 0;

		h2 {
			color: $dc-neutral;
		}
	}

	#site-content {
		margin-top: $header-height;
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
