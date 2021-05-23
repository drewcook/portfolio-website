<template>
	<v-card class="card">
		<v-card-title class="headline">
			{{ project.title }}
			<a :href="project.demoUrl" target="_blank">
				<v-icon>{{ demoIcon }}</v-icon>
			</a>
		</v-card-title>
		<v-card-text>
			<h3 class="my-2">About This Project</h3>
			<p>
				{{ project.description }}
			</p>
			<h3>Technologies Used</h3>
			<ul>
				<li v-for="tech in project.techStack" :key="`${project.title}-${tech}`">
					{{ tech }}
				</li>
			</ul>
		</v-card-text>
		<v-card-actions>
			<v-btn color="secondary" fab elevation="0" small>
				<a :href="project.codeUrl" target="_blank">
					<v-icon>{{ githubIcon }}</v-icon>
				</a>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	import { mdiGithub, mdiOpenInNew } from '@mdi/js'
	export default {
		props: {
			project: {
				type: Object,
				default: () => ({}),
			},
		},
		data() {
			return {
				demoIcon: mdiOpenInNew,
				githubIcon: mdiGithub,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.card {
		padding: 30px 15px;
	}

	button a {
		color: #fff;
		text-decoration: none;
	}
</style>
