<template>
	<div class="contact-links">
		<div class="d-flex justify-space-around align-center">
			<a href="https://github.com/drewcook" target="_blank" rel="noopener noreferrer">
				<v-btn color="primary" elevation="2" fab class="hvr-grow" small>
					<v-icon color="secondary">{{ githubIcon }}</v-icon>
				</v-btn>
			</a>
			<a href="https://twitter.com/dcodev_" target="_blank" rel="noopener noreferrer">
				<v-btn color="primary" elevation="2" fab class="hvr-grow" small>
					<v-icon color="secondary">{{ twitterIcon }}</v-icon>
				</v-btn>
			</a>
			<a href="https://www.npmjs.com/~drewcook" target="_blank" rel="noopener noreferrer">
				<v-btn color="primary" elevation="2" fab class="hvr-grow" small>
					<v-icon color="secondary" large>{{ npmIcon }}</v-icon>
				</v-btn>
			</a>
			<a href="https://soundcloud.com/thenotesbetween" target="_blank" rel="noopener noreferrer">
				<v-btn color="primary" elevation="2" fab class="hvr-grow" small>
					<v-icon color="secondary">{{ soundcloudIcon }}</v-icon>
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
	/*
    <a href="https://linkedin.com/in/drewcook2" target="_blank" rel="noopener noreferrer">
      <v-btn color="primary" elevation="2" fab class="hvr-grow" small>
        <v-icon color="secondary">{{ linkedInIcon }}</v-icon>
      </v-btn>
    </a>
  */
</script>

<style lang="scss" scoped>
	.v-btn {
		background-color: $dc-red !important;

		&.info {
			background-color: $dc-green !important;
		}
	}

	.v-icon {
		color: $dc-neutral !important;
	}
</style>
