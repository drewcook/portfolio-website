<template>
	<v-container>
		<h1 class="page-title">My Work</h1>
		<p class="text-center mb-10">
			Here are a few selected projects that I have built in my spare time. You can view a larger
			body of work on my
			<a href="https://github.com/drewcook" target="_blank" class="content-link">Github page</a>.
		</p>
		<p class="text-center mb-10">
			Each project has a live demo that you can test out by clicking the
			<v-icon>{{ demoIcon }}</v-icon> icon. Some will ask for you to sign up to use the features,
			but all you need is to put in an email. I don't do anything with your data, and I hash all the
			passwords for all accounts. You'll also find a link to the source code by clicking the
			<v-icon>{{ githubIcon }}</v-icon> icon.
		</p>
		<p>You may also filter the list by either application type or frameworks used.</p>
		<v-sheet class="pa-5 mb-8" elevation="1" shaped>
			<div class="mb-5">
				<h4 class="d-flex justify-space-between align-center">
					Filters - Application Type
					<v-chip v-show="filters.length > 0" outlined color="grey" close @click="resetFilters">
						Clear
					</v-chip>
				</h4>
				<v-chip-group multiple column>
					<v-chip
						v-for="tag in tags.types"
						:key="tag.title"
						active-class="active"
						active="tag.checked"
						:close="tag.checked"
						color="info"
						:data-filter="tag.filter"
						@click="e => filterByChip(e, 'type')"
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
						active-class="active"
						active="tag.checked"
						:close="tag.checked"
						color="primary"
						:data-filter="tag.filter"
						@click="e => filterByChip(e, 'framework')"
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

				// update checked state for tag
				if (category === 'type') {
					const typeMatch = this.tags.types.filter(tag => tag.filter === filter)[0]
					typeMatch.checked = !typeMatch.checked
				}
				if (category === 'framework') {
					const frameworkMatch = this.tags.frameworks.filter(tag => tag.filter === filter)[0]
					frameworkMatch.checked = !frameworkMatch.checked
				}

				if (!this.filters.includes(filter)) {
					// add filter
					this.filters = [...this.filters, filter]
					// filter projects
					this.projects = this.projects.filter(p => p.filters.includes(filter))
				} else {
					// remove filter
					const updated = this.filters.filter(f => f !== filter)
					this.filters = updated
					// reset if zero filters
					if (updated.length === 0) {
						this.projects = projects
					} else {
						// filter projects
						console.log('filtering', updated)
						// const filteredProjects = this.projects
						updated.forEach(filter => {
							const included = projects.filter(p => p.filters.includes(filter))
							this.projects = included
							console.log(
								filter,
								included.map(p => p.title),
							)
						})
					}
				}
			},
			resetFilters() {
				// Reset tags
				this.tags.types = this.tags.types.map(tag => ({ ...tag, checked: false }))
				this.tags.frameworks = this.tags.frameworks.map(tag => ({ ...tag, checked: false }))
				const activeChips = document.querySelectorAll('span.active')
				console.log(activeChips)
				// activeChips.forEach(chip => chip.classList.remove('active', 'v-chip--active'))
				// Reset filters
				this.filters = []
				// Reset projects
				this.projects = projects
			},
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
