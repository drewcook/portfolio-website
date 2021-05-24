<template>
	<div>
		<section class="melon text-center">
			<v-container>
				<h2>Hi, I'm Drew Cook.</h2>
				<div class="sm-divider" />
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
				<h2 class="mb-3">My Work</h2>
				<div class="sm-divider" />
				<h3>Personal Projects</h3>
				<p>
					I love building web and mobile applicatons. Check out some of the projects I've built over
					the years!
				</p>
				<v-btn color="secondary" nuxt to="/work">Portfolio</v-btn>
			</v-container>
		</section>

		<section class="deep text-center">
			<v-container>
				<h2>About Me</h2>
				<div class="sm-divider" />
				<h3>I like to create.</h3>
				<p>
					I enjoy the process of making an idea come to life. All you need is to start with a seed,
					and that through consistent nurture and dedication to an end-goal in mind, it can become
					something great that can last the test of time, rooted in furtile soil.
				</p>
				<v-btn color="accent" nuxt to="/about">Read More</v-btn>
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

		h3 {
			color: $dc-gray;
		}

		p {
			color: $dc-blue-md;
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

	.deep {
		background-color: $dc-blue-dk;
		padding: 60px 0;

		h2,
		p {
			color: $dc-neutral;
		}

		h3 {
			color: $dc-gray-lt;
		}

		.v-btn {
			color: #fff !important;
			font-weight: bold;
		}
	}
</style>
