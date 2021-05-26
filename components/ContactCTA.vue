<template>
	<section v-show="$route.name !== 'contact'" class="footer-cta">
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
</template>

<script>
	export default {}
</script>

<style lang="scss" scoped>
	.footer-cta {
		background-color: $dc-heading;
		border-top: 1px dotted $dc-gray;
		padding: 60px 0;

		.card {
			padding: 30px;
		}

		.v-btn {
			background-color: $dc-blue-dk !important;
			color: #fff;
			font-weight: bold;
		}
	}
</style>
