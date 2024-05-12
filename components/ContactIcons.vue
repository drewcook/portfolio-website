<template>
	<div class="contact-links">
		<div class="d-flex justify-space-around align-center">
			<a href="https://github.com/drewcook" target="_blank" rel="noopener noreferrer">
				<v-btn elevation="2" fab class="hvr-grow" small>
					<v-icon>{{ githubIcon }}</v-icon>
				</v-btn>
			</a>
			<a href="https://twitter.com/dco_eth" target="_blank" rel="noopener noreferrer">
				<v-btn elevation="2" fab class="hvr-grow" small>
					<v-icon>{{ twitterIcon }}</v-icon>
				</v-btn>
			</a>
			<!-- <a href="https://linkedin.com/in/drewcook2" target="_blank" rel="noopener noreferrer">
				<v-btn elevation="2" fab class="hvr-grow" small>
					<v-icon>{{ linkedInIcon }}</v-icon>
				</v-btn>
			</a> -->
			<a href="https://www.npmjs.com/org/drewcook" target="_blank" rel="noopener noreferrer">
				<v-btn elevation="2" fab class="hvr-grow" small>
					<v-icon large>{{ npmIcon }}</v-icon>
				</v-btn>
			</a>
			<a href="https://soundcloud.com/drewcookmusic" target="_blank" rel="noopener noreferrer">
				<v-btn elevation="2" fab class="hvr-grow" small>
					<v-icon>{{ soundcloudIcon }}</v-icon>
				</v-btn>
			</a>
		</div>
	</div>
</template>

<script>
	import { mdiEmail, mdiGithub, mdiTwitter, mdiLinkedin, mdiNpm, mdiSoundcloud } from '@mdi/js'
	export default {
		data() {
			return {
				githubIcon: mdiGithub,
				twitterIcon: mdiTwitter,
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
		background-color: $dc-red !important;
	}

	.v-icon {
		color: $dc-neutral !important;
	}
</style>
