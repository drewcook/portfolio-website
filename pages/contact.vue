<template>
	<v-container class="text-center">
		<h1 class="page-title">Contact Me</h1>
		<p>
			I love working on new and exciting projects, and I am always open to connecting with other
			professionals. Please reach out to me if you'd like to work together.
		</p>
		<p>
			Feel free to send me an email at
			<a href="mailto:drew@dco.dev" class="content-link">drew@dco.dev</a>.
		</p>
		<h4 class="mb-3">Or let's connect online!</h4>
		<div class="social-wrap">
			<contact-icons />
		</div>
	</v-container>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Contact Me',
			}
		},
	}
</script>

<style lang="scss" scoped>
	.social-wrap {
		margin: auto;
		max-width: 240px;
	}
</style>
