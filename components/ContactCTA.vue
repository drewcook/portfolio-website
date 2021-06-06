<template>
	<section id="footer-cta">
		<v-container>
			<v-row>
				<v-spacer />
				<v-col cols="12" sm="8">
					<v-card class="text-center pa-10" shaped>
						<h3>{{ cta.heading }}</h3>
						<div class="sm-divider" />
						<p class="mb-7">{{ cta.text }}</p>
						<v-btn nuxt :to="cta.link">{{ cta.btn }}</v-btn>
					</v-card>
				</v-col>
				<v-spacer />
			</v-row>
		</v-container>
	</section>
</template>

<script>
	export default {
		computed: {
			cta() {
				const contactPage = {
					heading: 'Check out some of my work!',
					text: 'I have built a number of things over the years in my spare time.',
					btn: 'View Projects',
					link: '/work',
				}
				const page = {
					heading: 'Would you like to work together?',
					text: "Don't hesitate to reach out if you'd like to connect.",
					btn: 'Get In Touch',
					link: '/contact',
				}
				return this.$route.name === 'contact' ? contactPage : page
			},
		},
	}
</script>

<style lang="scss" scoped>
	#footer-cta {
		background-color: $dc-heading;
		border-top: 1px dotted $dc-gray;
		margin-top: 60px;
		padding: 60px 0;

		.v-btn {
			background-color: $dc-blue-dk !important;
			color: #fff;
			font-weight: bold;
		}
	}
</style>
