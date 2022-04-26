<template>
	<v-container class="text-center">
		<h1 class="page-title">Skills &amp; Specialization</h1>
		<p>
			Here's a laundry list of languages, frameworks, and libraries that I've come to understand
			over the years. Scroll through the categories to read the specifics of what I like to build
			with and what I have worked with in the past.
		</p>
		<v-sheet class="mt-9" shaped>
			<v-tabs
				v-model="tab"
				light
				centered
				align-with-title
				show-arrows
				continuous
				center-active
				next-icon="mdi-arrow-right"
				prev-icon="mdi-arrow-left"
			>
				<v-tabs-slider color="accent"></v-tabs-slider>
				<v-tab
					v-for="item in tabInfo"
					:key="item.title"
					:href="`#tab-${item.title}`"
					@click="tab = `tab-${item.title}`"
				>
					{{ item.title }}
				</v-tab>
			</v-tabs>

			<v-tabs-items v-model="tab" class="skill-content" continuous show-arrows show-arrows-on-hover>
				<v-tab-item v-for="item in tabInfo" :key="item.title" :value="`tab-${item.title}`">
					<h4 class="text-center">{{ item.info }}:</h4>
					<v-card flat>
						<v-list flat>
							<v-list-item v-for="skill in item.skills" :key="skill" class="text-center">
								<!-- <v-list-item-icon>
										<v-icon v-text="skil"></v-icon>
									</v-list-item-icon> -->
								<v-list-item-content>
									<v-list-item-title v-text="skill"></v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
		</v-sheet>
	</v-container>
</template>

<script>
	export default {
		data() {
			return {
				tab: 'tab-Languages',
				tabInfo: [
					{
						title: 'Languages',
						info: 'The foundational pillars',
						skills: [
							'JavaScript ES6',
							'TypeScript',
							'HTML',
							'CSS',
							'SCSS/LESS',
							'GraphQL',
							'C#',
							'PHP',
							'SQL',
							'Solidity',
						],
					},
					{
						title: 'Frameworks',
						info: 'The ecosystems & paradigms',
						skills: [
							'Ethereum',
							'Node',
							'Express',
							'React',
							'Next.js',
							'React Native',
							'Expo',
							'Vue',
							'VuePress',
							'Nuxt.js',
							'.NET Core & MVC',
							'Progressive Web Apps',
						],
					},
					{
						title: 'Storage',
						info: 'The warehouses & datastores',
						skills: [
							'IPFS',
							'MongoDB',
							'Postgres',
							'Google Firebase',
							'MS SQL Server',
							'MySQL',
							'S3',
							'Firebase / Firestore',
						],
					},
					{
						title: 'Tooling',
						info: 'The parts & accessories',
						skills: [
							'Truffle',
							'Hardhat',
							'Ganache',
							'Babel',
							'Webpack',
							'Redux',
							'Apollo',
							'ESLint',
							'Prettier',
							'Stylelint',
							'Material UI',
							'Vuetify',
							'Reactstrap',
							'Bootstrap',
							'SignalR',
							'Hangfire',
						],
					},
					{
						title: 'Testing',
						info: 'The damage controllers',
						skills: [
							'Jest',
							'React Testing Library',
							'Enzyme',
							'Mocha',
							'Chai',
							'Cypress',
							'NUnit',
						],
					},
					{
						title: 'Deployment',
						info: 'The shipping & handling',
						skills: [
							'Amazon Web Services',
							'Infura',
							'Alchemy',
							'Heroku',
							'Vercel',
							'CircleCI',
							'TravisCI',
							'Docker',
							'Git',
						],
					},
					{
						title: 'Learning & More',
						info: 'The trajectory',
						skills: [
							'Zero Knowledge Proofs',
							'Rust',
							'Go',
							'Docker',
							'Kubernetes',
							'Kafka',
							'WebGL',
							'WASM',
							'Creative Coding',
						],
					},
				],
			}
		},
		head() {
			return {
				title: 'Skills and Expertise',
			}
		},
	}
</script>

<style lang="scss" scoped>
	.v-sheet {
		padding: 30px 20px;
	}

	h4 {
		padding: 20px 0;
	}

	.v-card {
		padding-top: 10px;
	}

	.v-list {
		padding: 0;
	}

	.skill-content {
		padding-top: 30px;
		/* stylelint-disable */
		.v-window__prev,
		.v-window__next {
			background: none;
		}
		/* stylelint-enable */
	}
</style>
