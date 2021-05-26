<template>
	<section class="footer-cta">
		<v-container>
			<v-row>
				<v-spacer />
				<v-col cols="12" sm="8">
					<v-card class="text-center pa-10" shaped>
						<h3>{{ heading }}</h3>
						<div class="sm-divider" />
						<p class="mb-7">{{ text }}</p>
						<v-btn nuxt :to="btnLink">{{ btnText }}</v-btn>
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
			heading() {
				return this.$route.name === 'contact'
					? 'Check out some of my work!'
					: 'Would you like to work together?'
			},
			text() {
				return this.$route.name === 'contact'
					? 'I have built a number of things over the years in my spare time.'
					: "Don't hesitate to reach out if you'd like to connect."
			},
			btnText() {
				return this.$route.name === 'contact' ? 'View Projects' : 'Get In Touch'
			},
			btnLink() {
				return this.$route.name === 'contact' ? '/work' : '/contact'
			},
		},
	}
</script>

<style lang="scss" scoped>
	.footer-cta {
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
