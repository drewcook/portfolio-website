<template>
	<v-app dark>
		<v-container>
			<v-sheet
				class="pa-5 mx-auto d-flex flex-column justify-center align-center"
				max-width="800"
				min-height="500"
			>
				<h2 v-if="error.statusCode === 404" class="page-title mb-16">
					{{ pageNotFound }}
				</h2>
				<h2 v-else class="page-title mb-16">
					{{ otherError }}
				</h2>
				<p v-if="error.statusCode === 404">
					{{ description }}
				</p>
				<p v-else>
					{{ descriptionOther }}
				</p>
				<v-btn nuxt href="/" outlined color="accent"> Return Home</v-btn>
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
				default: () => ({ statusCode: 404 }),
			},
		},
		data() {
			return {
				pageNotFound: 'Oops, Page Not Found',
				otherError: 'Oops, Something Went Wrong',
				description: 'The page you are trying to view does not exist.',
				descriptionOther: 'An error has occurred.',
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
