<template>
	<div>
		<transition name="flip-card">
			<v-card v-show="!flipped" class="card front" shaped>
				<v-img src="https://picsum.photos/300/200" />
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
					<v-btn color="secondary" outlined small @click="flipCard">
						Details
						<v-icon>{{ detailsIcon }}</v-icon>
					</v-btn>
				</v-card-actions>
			</v-card>
		</transition>
		<transition name="flip-card">
			<v-card v-show="flipped" class="card back" shaped>
				<div class="d-flex flex-column justify-center align-center text-center">
					<v-card-title>About This Project</v-card-title>
					<v-card-text>
						<p>{{ project.description }}</p>
					</v-card-text>
					<v-card-text class="pt-0">
						<h3 class="my-2">Tech Stack</h3>
						<v-chip v-for="tech in project.techStack" :key="`${project.title}-${tech}`" small>
							{{ tech }}
						</v-chip>
					</v-card-text>
					<v-card-actions>
						<v-btn color="secondary" outlined small @click="flipCard">
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
			}
		},
		methods: {
			flipCard() {
				console.log('flipping card')
				this.flipped = !this.flipped
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
		flex-direction: column;
	}
</style>
