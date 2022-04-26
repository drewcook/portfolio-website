<template>
	<v-container class="text-center">
		<h1 class="page-title">Resume &amp; Work Experience</h1>
		<p>Feel free to view, download, or save my resume to your Google Drive.</p>
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
		<v-divider />
		<h2>Work Experience</h2>
		<p class="lead">Travel down the rabbit hole. Scoll down for the journey.</p>
		<experience-timeline />
	</v-container>
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
						href: 'https://drive.google.com/file/d/1swcX3zSFgRMQaizNxL7jb1wJgs-Ij9O2/view?usp=sharing',
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

	hr {
		margin: 30px auto;
	}

	.lead {
		font-size: 24px;
	}
</style>
