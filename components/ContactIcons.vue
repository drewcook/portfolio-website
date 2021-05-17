<template>
	<div class="d-flex justify-space-around align-center">
		<a href="https://linkedin.com/in/drewcook2" target="_blank" rel="noopener noreferrer">
			<v-btn color="primary" elevation="2" fab class="hvr-grow" small>
				<v-icon color="secondary">{{ linkedInIcon }}</v-icon>
			</v-btn>
		</a>
		<a href="https://github.com/drewcook" target="_blank" rel="noopener noreferrer">
			<v-btn color="primary" elevation="2" fab class="hvr-grow" small>
				<v-icon color="secondary">{{ githubIcon }}</v-icon>
			</v-btn>
		</a>
		<a href="https://www.npmjs.com/~drewcook" target="_blank" rel="noopener noreferrer">
			<v-btn color="primary" elevation="2" fab class="hvr-grow" small>
				<v-icon large color="secondary">{{ npmIcon }}</v-icon>
			</v-btn>
		</a>
		<a href="https://soundcloud.com/thenotesbetween" target="_blank" rel="noopener noreferrer">
			<v-btn color="primary" elevation="2" fab class="hvr-grow" small>
				<v-icon color="secondary">{{ soundcloudIcon }}</v-icon>
			</v-btn>
		</a>
	</div>
</template>

<script>
	import { mdiEmail, mdiGithub, mdiLinkedin, mdiNpm, mdiSoundcloud } from '@mdi/js'
	export default {
		data() {
			return {
				githubIcon: mdiGithub,
				linkedInIcon: mdiLinkedin,
				npmIcon: mdiNpm,
				soundcloudIcon: mdiSoundcloud,
				emailIcon: mdiEmail,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.v-btn {
		background-color: $dc-blue-dk !important;
	}

	.v-icon {
		color: $dc-neutral !important;
	}
</style>
