<template>
	<div class="text-center">
		<h1 class="mb-4">My Resume and Work Experience</h1>
		<p>
			Please feel free to grab my resume. I understand by making this public, I'm taking risks, but
			hopefully you are a good person and will use it with good intention.
		</p>
		<p>
			By using it, all I ask from you is that you please do not use it for spamming others, please
			do not pirate it, and please do not plagerize it or assume it as your own. You are free to use
			it as a template for your own experience, however.
		</p>
		<v-row>
			<v-col v-for="option in options" :key="option.id" cols="12" md="4">
				<v-card
					class="d-flex flex-column justify-center align-center card"
					hover
					shaped
					:download="option.download ? option.href : false"
					:href="option.href"
					:target="option.newTab ? '_blank' : ''"
				>
					<v-btn icon color="primary" class="icon" width="120" height="120">
						<v-icon size="80">{{ option.icon }}</v-icon>
					</v-btn>
					<v-card-title class="title">
						<h5>{{ option.title }}</h5>
					</v-card-title>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import { mdiDownloadCircleOutline, mdiGoogleDrive, mdiPdfBox } from '@mdi/js'
	export default {
		data() {
			return {
				options: [
					{
						id: 1,
						title: 'View Resume',
						icon: mdiPdfBox,
						download: false,
						href: 'resume.pdf',
						newTab: true,
					},
					{
						id: 2,
						title: 'Download Resume',
						icon: mdiDownloadCircleOutline,
						download: true,
						href: 'resume.pdf',
						newTab: false,
					},
					{
						id: 3,
						title: 'Save To Google Drive',
						icon: mdiGoogleDrive,
						download: false,
						href: 'https://docs.google.com/document/d/1a7uLLau1AzbJnqObT0RwF0oNbUCrHh3pKGFubRTf0aI/edit?usp=sharing',
						newTab: true,
					},
				],
			}
		},
		head() {
			return {
				title: 'Resume and Work Experience',
			}
		},
	}
</script>

<style lang="scss" scoped>
	.card {
		margin: 15px auto;
		max-width: 350px;
		padding: 15px 10px;
	}

	.icon {
		background-color: $secondary;
		margin-top: 30px;
	}

	.title {
		color: $dc-blue-md;
		margin-bottom: 10px;
		margin-top: 15px;
	}
</style>
