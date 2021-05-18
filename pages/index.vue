<template>
	<div>
		<section class="melon text-center">
			<v-container>
				<h2>Hi, I'm Drew Cook.</h2>
				<h3>I build things for the interwebs.</h3>
				<p>
					I'm a Denver-based software engineer specializing frontend technologies for both native
					web and mobile applications. I'm currently operating as a freelance consultant under my
					own company, Althea Web Services, providing support for a host of tech-based products.
				</p>
			</v-container>
		</section>

		<!-- <section class="sky text-center">
			<v-container>
				<h2>Hi, I'm Drew Cook.</h2>
				<h3>I build things for the interwebs.</h3>
			</v-container>
		</section> -->

		<section class="water text-center">
			<v-container>
				<h2>About Me</h2>
				<h3>I like to create.</h3>
				<p>
					I enjoy the process of making an idea come to life. All you need is to start with a seed,
					and that through consistent nurture and dedication to an end-goal in mind, it can become
					something great that can last the test of time, rooted in furtile soil.
				</p>
				<v-btn color="secondary" nuxt to="/about">Read More</v-btn>
			</v-container>
		</section>

		<section class="deep text-center">
			<v-container>
				<h2 class="mb-3">Check Out Some Of My Work</h2>
				<v-btn color="accent" nuxt to="/work">Projects</v-btn>
			</v-container>
		</section>
		<section>
			<v-row justify="center" align="center">
				<v-col cols="12" sm="8">
					<v-card>
						<v-card-title class="headline"> Hello World, I'm Drew Cook! </v-card-title>
						<v-card-text>
							<p>
								Welcome to my online portfolio. Check out some of my work or get in touch with me
								via my contact information.
							</p>
							<hr class="my-3" />
							<p>
								Feel free to connect with me on my other platforms, or check out my code on Github.
							</p>
							<ul>
								<li>
									<a
										href="https://linkedin.com/in/drewcook2"
										target="_blank"
										rel="noopener noreferrer"
									>
										LinkedIn
									</a>
								</li>
								<li>
									<a href="https://github.com/drewcook" target="_blank" rel="noopener noreferrer">
										GitHub
									</a>
								</li>
							</ul>
						</v-card-text>
						<v-card-actions>
							<v-spacer />
							<v-btn color="primary" nuxt to="/work">Check Out My Work</v-btn>
							<v-btn color="accent" href="resume.pdf">Resume</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</section>
	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Welcome To My Portfolio',
			}
		},
	}
</script>

<style lang="scss" scoped>
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
		h3,
		p {
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
</style>
