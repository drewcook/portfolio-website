<template>
	<v-app dark>
		<v-container>
			<v-sheet class="pa-5 d-flex flex-column justify-center align-center">
				<h2 v-if="error.statusCode === 404" class="page-title">
					{{ pageNotFound }}
				</h2>
				<h2 v-else class="page-title">
					{{ otherError }}
				</h2>
				<p v-if="error.statusCode === 404">
					{{ description }}
				</p>
				<p v-else>
					{{ descriptionOther }}
				</p>
				<v-btn nuxt href="/" outlined color="primary"> Return Home</v-btn>
			</v-sheet>
		</v-container>
	</v-app>
</template>

<script>
	export default {
		layout: 'empty',
		props: {
			error: {
				type: Object,
				default: null,
			},
		},
		data() {
			return {
				pageNotFound: 'Oops, Page Not Found',
				otherError: 'Oops, Something Went Wrong',
				description: 'The page you are trying to view does not exist.',
				descriptionOther: 'An error has occured.',
			}
		},
		head() {
			const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
			return {
				title,
			}
		},
	}
</script>

<style scoped>
	h1 {
		font-size: 20px;
	}
</style>
