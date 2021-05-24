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
			<v-btn v-show="filters.length > 0" color="accent" @click="resetFilters">
				<v-icon>{{ resetIcon }}</v-icon>
			</v-btn>
			<div class="text-center mb-5">
				<h4>Filters - Application Type</h4>
				<v-chip-group multiple column>
					<v-chip active-class="active" color="info" data-filter="api" @click="filterByChip">
						Backend API
					</v-chip>
					<v-chip active-class="active" color="info" data-filter="web" @click="filterByChip">
						Web Application
					</v-chip>
					<v-chip active-class="active" color="info" data-filter="mobile" @click="filterByChip"
						>Mobile Application
					</v-chip>
				</v-chip-group>
			</div>
			<div class="text-center">
				<h4>Filters - Frameworks</h4>
				<v-chip-group multiple column>
					<v-chip active-class="active" color="primary" data-filter="node" @click="filterByChip">
						Node / Express
					</v-chip>
					<v-chip active-class="active" color="primary" data-filter="react" @click="filterByChip">
						React / Next
					</v-chip>
					<v-chip active-class="active" color="primary" data-filter="vue" @click="filterByChip">
						Vue / Nuxt
					</v-chip>
					<v-chip active-class="active" color="primary" data-filter="graphql" @click="filterByChip">
						GraphQL / Apollo
					</v-chip>
					<v-chip active-class="active" color="primary" data-filter="graphql" @click="filterByChip">
						React Native / Expo
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
			}
		},
		head() {
			return {
				title: 'Web and Mobile Projects',
			}
		},
		methods: {
			filterByChip(e) {
				const { filter } = e.target.parentElement.dataset
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
				const activeChips = document.querySelectorAll('span.active')
				activeChips.forEach(chip => chip.classList.remove('active'))
				this.filters = []
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
