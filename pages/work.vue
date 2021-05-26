<template>
	<v-container>
		<h1 class="page-title">My Work</h1>
		<p class="text-center mb-10">
			Here are a few selected projects that I have built in my spare time.<br />You can view a
			larger body of work, including this
			<a href="https://github.com/drewcook/portfolio-website" target="_blank" class="content-link"
				>portfolio website</a
			>, on my
			<a href="https://github.com/drewcook" target="_blank" class="content-link">Github page</a>.
		</p>
		<p class="text-center mb-10">
			Each project has a live demo that you can test out by clicking the
			<v-icon>{{ demoIcon }}</v-icon> icon.<br />You'll also find a link to the source code by
			clicking the <v-icon>{{ githubIcon }}</v-icon> icon.
		</p>
		<v-sheet class="pa-5 mb-8" elevation="1" shaped>
			<div class="mb-5">
				<h4 class="d-flex justify-space-between align-center">
					Filters - Application Type
					<!-- <v-chip v-show="filters.length > 0" outlined color="grey" close @click="resetFilters">
						Clear
					</v-chip> -->
				</h4>
				<v-chip-group multiple column>
					<v-chip
						v-for="tag in tags.types"
						:key="tag.title"
						:close="tag.checked"
						:data-filter="tag.filter"
						active-class="active"
						color="info"
						@click="e => filterByChip(e, 'type')"
						@click:close="e => filterByChip(e, 'type')"
					>
						{{ tag.title }}
					</v-chip>
				</v-chip-group>
			</div>
			<div>
				<h4>Filters - Frameworks</h4>
				<v-chip-group multiple column>
					<v-chip
						v-for="tag in tags.frameworks"
						:key="tag.title"
						:close="tag.checked"
						:data-filter="tag.filter"
						active-class="active"
						color="primary"
						@click="e => filterByChip(e, 'framework')"
						@click:close="e => filterByChip(e, 'framework')"
					>
						{{ tag.title }}
					</v-chip>
				</v-chip-group>
			</div>
		</v-sheet>
		<v-row>
			<v-col v-for="project in projects" :key="project.title" cols="12" sm="6" lg="4" xl="3">
				<ProjectCard :project="project" />
			</v-col>
		</v-row>
		<p class="text-center mt-16">
			<small>
				<strong>NOTE:</strong> Some apps will ask you to sign in or create an account to use the
				features. All I require is usually an email and password. I use this data for authentication
				purposes and improving the user experience across my applications. I hash all account
				passwords before storing them, and under no circumstances will I ever sell your data.
			</small>
		</p>
	</v-container>
</template>

<script>
	import { mdiCloseCircle, mdiGithub, mdiOpenInNew } from '@mdi/js'
	import projects from 'assets/js/projects'

	export default {
		data() {
			return {
				demoIcon: mdiOpenInNew,
				githubIcon: mdiGithub,
				resetIcon: mdiCloseCircle,
				filters: [],
				projects,
				tags: {
					types: [
						{
							title: 'Backend API',
							checked: false,
							filter: 'api',
						},
						{
							title: 'Web Application',
							checked: false,
							filter: 'web',
						},
						{
							title: 'Mobile Application',
							checked: false,
							filter: 'mobile',
						},
					],
					frameworks: [
						{
							title: 'Node / Express',
							checked: false,
							filter: 'node',
						},
						{
							title: 'React / Next',
							checked: false,
							filter: 'react',
						},
						{
							title: 'React Native / Expo',
							checked: false,
							filter: 'react native',
						},
						{
							title: 'Vue / Nuxt',
							checked: false,
							filter: 'vue',
						},
						{
							title: 'GraphQL / Apollo',
							checked: false,
							filter: 'graphql',
						},
					],
				},
			}
		},
		head() {
			return {
				title: 'Web and Mobile Projects',
			}
		},
		methods: {
			filterByChip(e, category) {
				const { filter } = e.target.parentElement.dataset

				// Update tags - local checked state
				if (category === 'type') {
					const typeMatch = this.tags.types.filter(tag => tag.filter === filter)[0]
					typeMatch.checked = !typeMatch.checked
				}
				if (category === 'framework') {
					const frameworkMatch = this.tags.frameworks.filter(tag => tag.filter === filter)[0]
					frameworkMatch.checked = !frameworkMatch.checked
				}

				// Update filters
				let updatedFilters = this.filters
				if (!this.filters.includes(filter)) {
					// add filter
					updatedFilters = [...this.filters, filter]
					this.filters = updatedFilters
				} else {
					// remove filter
					updatedFilters = this.filters.filter(f => f !== filter)
					this.filters = updatedFilters
				}

				// Update projects
				if (updatedFilters.length === 0) {
					// reset if zero filters
					this.projects = projects
				} else {
					// compound filtering
					this.projects = projects.filter(project =>
						updatedFilters.every(f => project.filters.includes(f)),
					)
				}
			},
			// resetFilters() {
			// 	// Reset tags
			// 	this.tags.types = this.tags.types.map(tag => ({ ...tag, checked: false }))
			// 	this.tags.frameworks = this.tags.frameworks.map(tag => ({ ...tag, checked: false }))
			// 	// console.log(activeChips)
			// 	// Reset filters
			// 	this.filters = []
			// 	// Reset projects
			// 	this.projects = projects
			// },
		},
	}
</script>

<style lang="scss" scoped>
	.v-chip {
		background-color: $dc-blue-dk !important;

		&.active.info {
			background-color: $dc-green !important;
		}

		&.active.primary {
			background-color: $dc-blue-md !important;
		}
	}
</style>
