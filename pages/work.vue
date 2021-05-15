<template>
	<div>
		<h1>My Work</h1>
		<p>
			All of these projects have their own demo site available. You can find the code for each
			project by clicking the Github link on each project card.
		</p>
		<v-row>
			<v-col v-for="project in projects" :key="project.title" md="4" xl="3">
				<ProjectCard :project="project" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				projects: [
					{
						title: 'BeerBuddy API',
						demoUrl: 'https://beerbuddy.io',
						codeUrl: 'https://github.com/drewcook/beerbuddy-api',
						description:
							'Beerbuddy is a full-stack web application powered by JavaScript. The code is split up into two repositories, so that the the backend can be reused for other client apps. The backend is built in node.js and express and uses MongoDB for storage.',
						techStack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'JWT', 'Winston', 'Joi'],
					},
					{
						title: 'BeerBuddy Web',
						demoUrl: 'https://beerbuddy.io',
						codeUrl: 'https://github.com/drewcook/beerbuddy-web',
						description:
							'Beerbuddy is a full-stack web application powered by JavaScript. The code is split up into two repositories, so that the the backend can be reused for other client apps. The client app is built using the Next.js framework and utilizing both GraphQL Apollo Client and Server.',
						techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Jest', 'JWT'],
					},
					{
						title: 'Flick Finder',
						demoUrl: 'https://flickfinder.drewcook.dev',
						codeUrl: 'https://github.com/drewcook/flick-finder',
						description:
							"Flick Finder is a fullstack web application built using the Next.js framework and using a GraphQL Apollo Client for requests. It is an application that allows users to search through the MovieDB.com database to search for movies. Users are able to favorite movies as well as add them to a watchlist. The application uses JWT for user authentication, and it connects to a MongoDB database to store users' watchlists and favorited movies.",
						techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Jest'],
					},
					{
						title: 'Guitar Exchange',
						demoUrl: 'https://guitarxc.drewcook.dev',
						codeUrl: 'https://github.com/drewcook/guitar-exchange',
						description:
							'Gutar Exchange is built using the Nuxt.js framework. It is a web application that allows users to rent guitars in the style of AirBnb. You can rent out guitars which will then get added to your rental list.',
						techStack: ['Nuxt.js', 'Vue.js'],
					},
					{
						title: 'Vidly API',
						demoUrl: 'https://vidly-service.herokuapp.com',
						codeUrl: 'https://github.com/drewcook/vidly-service',
						description: '',
						techStack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'JWT', 'Winston', 'Joi'],
					},
					{
						title: 'You Got Served',
						demoUrl: 'https://yougotserved.drewcook.dev',
						codeUrl: 'https://github.com/drewcook/you-got-served',
						description:
							'You Got Served is built using the Next.js framework and using a GraphQL Apollo Client for requests. It is an app that mimics a restaurant POS system, with different tables and tickets. Each ticket has a list of items to order, and each ticket can get assigned to a table. Tickets can be created or destroyed as patrons come and go to different tables.',
						techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Jest'],
					},
					{
						title: 'DadJokes',
						demoUrl: 'https://dadjokes.drewcook.dev',
						codeUrl: 'https://github.com/drewcook/nuxt-dadjokes',
						description:
							'DadJokes is built using the Nuxt.js framework. It connects with the Dadjokes.io API to list out jokes by category. You can search for a joke, filter by category, and view the setup and punchlines for each joke.',
						techStack: ['Nuxt.js', 'Vue.js'],
					},
					{
						title: 'Powder Chat',
						demoUrl: 'https://powder.chat',
						codeUrl: 'https://github.com/drewcook/powderchat-api',
						description:
							'Powderchat is both a web and native mobile application.  It attempts to connect ski and snowboard riders on the mountain via chat.  Users can log in, check into a mountain resort via search or GPS, and start chatting with other checked in users.  Users can also choose to set up private groups within the mountain, or connect with their friends via social media.  This allows for groups to keep in touch and not get lost while riding together.',
						techStack: ['Node', 'Express', 'JWT', 'Firebase', 'React Native'],
					},
				],
			}
		},
	}
</script>
