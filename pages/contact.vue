<template>
	<v-row>
		<v-col cols="12">
			<h1>Contact Me</h1>
			<p>
				Feel free to send me an email at
				<a href="mailto:drew@altheaweb.services">drew@altheaweb.services</a>.
			</p>
			<p>Or we can connect online.</p>
			<div class="social-wrap">
				<contact-icons />
			</div>
		</v-col>
	</v-row>
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
		max-width: 240px;
	}
</style>
