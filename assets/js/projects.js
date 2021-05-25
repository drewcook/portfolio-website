const projects = [
	{
		title: 'BeerBuddy API',
		type: 'Backend API',
		demoUrl: 'https://beerbuddy.io',
		codeUrl: 'https://github.com/drewcook/beerbuddy-api',
		description:
			'Beerbuddy is a full-stack web application powered by JavaScript. The code is split up into two repositories, so that the the backend can be reused for other client apps. The backend is built in node.js and express and uses MongoDB for storage.',
		filters: ['api', 'node'],
		frameworks: ['Node / Express'],
		techStack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'JWT', 'Winston', 'Joi'],
	},
	{
		title: 'BeerBuddy Web',
		type: 'Web Application',
		demoUrl: 'https://beerbuddy.io',
		codeUrl: 'https://github.com/drewcook/beerbuddy-web',
		description:
			'Beerbuddy is a full-stack web application powered by JavaScript. The code is split up into two repositories, so that the the backend can be reused for other client apps. The client app is built using the Next.js framework and utilizing both GraphQL Apollo Client and Server.',
		filters: ['web', 'graphql', 'react'],
		frameworks: ['React / Next', 'GraphQL / Apollo'],
		techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Jest', 'JWT'],
	},
	{
		title: 'BeerBuddy Mobile',
		type: 'Mobile Application',
		demoUrl: 'https://beerbuddy.io',
		codeUrl: 'https://github.com/drewcook/beerbuddy-web',
		description:
			'Beerbuddy is a full-stack web application powered by JavaScript. The code is split up into two repositories, so that the the backend can be reused for other client apps. The client app is built using the Next.js framework and utilizing both GraphQL Apollo Client and Server.',
		filters: ['mobile', 'react native', 'graphql'],
		frameworks: ['React Native / Expo', 'GraphQL / Apollo'],
		techStack: ['React Native', 'Expo', 'GraphQL', 'Apollo', 'Jest', 'JWT'],
	},
	{
		title: 'Flick Finder',
		type: 'Web Application',
		demoUrl: 'https://flickfinder.drewcook.dev',
		codeUrl: 'https://github.com/drewcook/flick-finder',
		description:
			"Flick Finder is a fullstack web application built using the Next.js framework and using a GraphQL Apollo Client for requests. It is an application that allows users to search through the MovieDB.com database to search for movies. Users are able to favorite movies as well as add them to a watchlist. The application uses JWT for user authentication, and it connects to a MongoDB database to store users' watchlists and favorited movies.",
		filters: ['web', 'graphql', 'react'],
		frameworks: ['React / Next', 'GraphQL / Apollo'],
		techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Jest'],
	},
	{
		title: 'Guitar Exchange',
		type: 'Web Application',
		demoUrl: 'https://guitarxc.drewcook.dev',
		codeUrl: 'https://github.com/drewcook/guitar-exchange',
		description:
			'Gutar Exchange is built using the Nuxt.js framework. It is a web application that allows users to rent guitars in the style of AirBnb. You can rent out guitars which will then get added to your rental list.',
		filters: ['web', 'vue'],
		frameworks: ['Vue / Nuxt'],
		techStack: ['Nuxt.js', 'Vue.js'],
	},
	{
		title: 'Vidly API',
		type: 'Backend API',
		demoUrl: 'https://vidly-service.herokuapp.com',
		codeUrl: 'https://github.com/drewcook/vidly-service',
		description: '',
		filters: ['api', 'node'],
		frameworks: ['Node / Express'],
		techStack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'JWT', 'Winston', 'Joi'],
	},
	{
		title: 'You Got Served',
		type: 'Web Application',
		demoUrl: 'https://yougotserved.drewcook.dev',
		codeUrl: 'https://github.com/drewcook/you-got-served',
		description:
			'You Got Served is built using the Next.js framework and using a GraphQL Apollo Client for requests. It is an app that mimics a restaurant POS system, with different tables and tickets. Each ticket has a list of items to order, and each ticket can get assigned to a table. Tickets can be created or destroyed as patrons come and go to different tables.',
		filters: ['web', 'graphql', 'react'],
		frameworks: ['React / Next', 'GraphQL / Apollo'],
		techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Jest'],
	},
	{
		title: 'DadJokes',
		type: 'Web Application',
		demoUrl: 'https://dadjokes.drewcook.dev',
		codeUrl: 'https://github.com/drewcook/nuxt-dadjokes',
		description:
			'DadJokes is built using the Nuxt.js framework. It connects with the Dadjokes.io API to list out jokes by category. You can search for a joke, filter by category, and view the setup and punchlines for each joke.',
		filters: ['web', 'vue'],
		frameworks: ['Vue / Nuxt'],
		techStack: ['Nuxt.js', 'Vue.js'],
	},
	{
		title: 'Powder Chat',
		type: 'Mobile Application',
		demoUrl: 'https://powder.chat',
		codeUrl: 'https://github.com/drewcook/powderchat-api',
		description:
			'Powderchat is both a full-stack web and native mobile application.  It attempts to connect ski and snowboard riders on the mountain via chat.  Users can log in, check into a mountain resort via search or GPS, and start chatting with other checked in users.  Users can also choose to set up private groups within the mountain, or connect with their friends via social media.  This allows for groups to keep in touch and not get lost while riding together.',
		filters: ['mobile', 'node', 'react native'],
		frameworks: ['Node / Express', 'React Native / Expo'],
		techStack: ['Node', 'Express', 'JWT', 'Firebase', 'React Native'],
	},
]

export default projects
