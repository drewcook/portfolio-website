<template>
	<v-card>
		<v-card-title class="headline"> {{ project.title }} </v-card-title>
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
			<v-spacer />
			<v-btn color="primary"><a :href="project.demoUrl" target="_blank">Demo</a></v-btn>
			<v-btn color="info"><a :href="project.codeUrl" target="_blank">Code</a></v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		props: ['project'],
	}
</script>

<style scoped>
	button a {
		color: #fff;
		text-decoration: none;
	}
</style>
