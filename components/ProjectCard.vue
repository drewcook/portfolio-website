<template>
	<div>
		<transition name="flip-card" @after-leave="afterLeave">
			<v-card v-show="!showDetails" class="card front" shaped>
				<v-img
					:src="project.imgSrc"
					:title="project.title"
					:alt="project.title"
					max-height="240"
					height="auto"
					position="center top"
				/>
				<v-card-title class="d-flex justify-space-between align-center card-title">
					{{ project.title }}
					<a :href="project.demoUrl" target="_blank" color="primary">
						<v-icon>{{ demoIcon }}</v-icon>
					</a>
				</v-card-title>
				<v-card-text>
					<v-chip-group column>
						<v-chip small color="info">
							{{ project.type }}
						</v-chip>
					</v-chip-group>
					<v-chip-group column>
						<v-chip
							v-for="framework in project.frameworks"
							:key="`${project.title}-${framework}`"
							small
							color="primary"
						>
							{{ framework }}
						</v-chip>
					</v-chip-group>
				</v-card-text>
				<v-card-actions class="justify-space-between px-5">
					<a :href="project.codeUrl" target="_blank" color="primary">
						<v-icon>{{ githubIcon }}</v-icon>
					</a>
					<v-btn color="secondary" outlined small @click="flipOver">
						Details
						<v-icon>{{ detailsIcon }}</v-icon>
					</v-btn>
				</v-card-actions>
			</v-card>
		</transition>
		<transition name="flip-card" @after-leave="afterLeaveDetails">
			<v-card v-show="flipped" class="card back" shaped>
				<div class="d-flex flex-column justify-center align-center text-center">
					<v-card-title>About This Project</v-card-title>
					<div class="sm-divider" />
					<v-card-text>
						<p>
							<small>{{ project.description }}</small>
						</p>
					</v-card-text>
					<v-card-text class="pt-0">
						<h3 class="my-2">Tech Stack</h3>
						<div class="sm-divider" />
						<v-chip-group column>
							<v-chip v-for="tech in project.techStack" :key="`${project.title}-${tech}`" small>
								{{ tech }}
							</v-chip>
						</v-chip-group>
					</v-card-text>
					<v-card-actions class="actions d-flex justify-space-between align-center px-5">
						<div>
							<a :href="project.codeUrl" target="_blank" color="primary">
								<v-icon>{{ githubIcon }}</v-icon>
							</a>
							<a :href="project.demoUrl" target="_blank" color="primary">
								<v-icon>{{ demoIcon }}</v-icon>
							</a>
						</div>
						<v-btn color="secondary" outlined small @click="flipBack">
							Return
							<v-icon>{{ detailsIcon }}</v-icon>
						</v-btn>
					</v-card-actions>
				</div>
			</v-card>
		</transition>
	</div>
</template>

<script>
	import { mdiGithub, mdiUndoVariant, mdiOpenInNew } from '@mdi/js'
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
				detailsIcon: mdiUndoVariant,
				flipped: false,
				showDetails: false,
			}
		},
		methods: {
			flipOver() {
				this.showDetails = true
			},
			flipBack() {
				this.flipped = false
			},
			afterLeave() {
				this.flipped = true
			},
			afterLeaveDetails() {
				this.showDetails = false
			},
		},
	}
</script>

<style lang="scss" scoped>
	.card-title,
	.tech-stack {
		a {
			display: inherit;
			vertical-align: sub;
		}
	}

	.front {
		.v-image {
			border-top-left-radius: 24px; // match 'shaped' card
		}
	}

	.back {
		.actions {
			width: 100%;
		}
	}
</style>
