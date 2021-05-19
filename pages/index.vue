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

		.v-btn {
			color: $dc-blue-dk !important;
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
