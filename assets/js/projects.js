const projects = [
	{
		title: 'Battleship',
		type: 'Web Application',
		imgSrc: '/img/battleship.png',
		demoUrl: 'https://battleship.dco.dev',
		codeUrl: 'https://github.com/drewcook/ts-battleship',
		description:
			'This is the classic game of battleship. It is a full-stack web app built in TypeScript, Node, Koa, and React. It uses object-oriented programming principals for modelling and business logic and a Koa web server to initiate actions via a React client application.',
		filters: ['api', 'node', 'web', 'react'],
		frameworks: ['Node / Koa', 'React'],
		techStack: ['Node', 'Koa', 'React'],
	},
	{
		title: 'BeerBuddy API',
		type: 'Backend API',
		imgSrc: '/img/beerbuddy_dashboard.png',
		demoUrl: 'https://beerbuddy.io',
		codeUrl: 'https://github.com/drewcook/beerbuddy-api',
		description:
			'BeerBuddy is a cross-platform application powered by JavaScript. This is a RESTful API that is built with Node and Express and uses MongoDB for storage. It includes authentication with JWT, authorization, logging, testing, and can be reused for multiple client applications.',
		filters: ['api', 'node'],
		frameworks: ['Node / Express'],
		techStack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'JWT', 'Winston', 'Joi'],
	},
	{
		title: 'BeerBuddy Web',
		type: 'Web Application',
		imgSrc: '/img/beerbuddy_web.png',
		demoUrl: 'https://beerbuddy.io',
		codeUrl: 'https://github.com/drewcook/beerbuddy-web',
		description:
			'BeerBuddy is a cross-platform application powered by JavaScript. The client web application is built on the Next.js framework and utilizes Apollo Client and Apollo Server to handle requests through a GraphQL schema, and then to the RESTful BeerBuddy API. It also incorporates user authentication with JWT.',
		filters: ['web', 'graphql', 'react'],
		frameworks: ['React / Next', 'GraphQL / Apollo'],
		techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Jest', 'JWT'],
	},
	{
		title: 'Flick Finder',
		type: 'Web Application',
		imgSrc: '/img/flickfinder.png',
		demoUrl: 'https://flickfinder.drewcook.dev',
		codeUrl: 'https://github.com/drewcook/flick-finder',
		description:
			"Flick Finder is a fullstack web application that allows users to search through the MovieDB.com database to for movies and actors. It is built on Next.js framework and uses Apollo Client for requests through a GraphQL server. Users are able to favorite movies as well as add them to a watchlist. The application uses JWT for user authentication, and it connects to a MongoDB database to store users' watchlists and favorited movies.",
		filters: ['web', 'graphql', 'react'],
		frameworks: ['React / Next', 'GraphQL / Apollo'],
		techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Jest'],
	},
	{
		title: 'Guitar Exchange',
		type: 'Web Application',
		imgSrc: '/img/guitar_exchange.png',
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
		imgSrc: '/img/vidly.png',
		demoUrl: 'https://vidly-service.herokuapp.com',
		codeUrl: 'https://github.com/drewcook/vidly-service',
		description:
			'Vidly is a backend API that mocks a system that movie rental store may use. It built in Node and Express, and it uses a MongoDB database for storage.  It includes features for authentication, authorization, logging, and testing.',
		filters: ['api', 'node'],
		frameworks: ['Node / Express'],
		techStack: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'JWT', 'Winston', 'Joi'],
	},
	{
		title: 'You Got Served',
		type: 'Web Application',
		imgSrc: '/img/yougotserved.png',
		demoUrl: 'https://yougotserved.drewcook.dev',
		codeUrl: 'https://github.com/drewcook/you-got-served',
		description:
			'You Got Served is web application built on the Next.js framework and uses Apollo Client for requests to a GraphQL server. The application mimics a restaurant POS system, with different tables and tickets. Each ticket has a list of items to order, and each ticket can get assigned to a table. Tickets can be created or destroyed as patrons come and go to different tables.',
		filters: ['web', 'graphql', 'react'],
		frameworks: ['React / Next', 'GraphQL / Apollo'],
		techStack: ['Next.js', 'React', 'GraphQL', 'Apollo', 'Jest'],
	},
	{
		title: 'DadJokes',
		type: 'Web Application',
		imgSrc: '/img/dadjokes.png',
		demoUrl: 'https://dadjokes.drewcook.dev',
		codeUrl: 'https://github.com/drewcook/nuxt-dadjokes',
		description:
			'DadJokes is built using the Nuxt.js framework. It connects with the Dadjokes.io API to list out jokes by category. You can search for a joke, filter by category, and view the setup and punchlines for each joke.',
		filters: ['web', 'vue'],
		frameworks: ['Vue / Nuxt'],
		techStack: ['Nuxt.js', 'Vue.js'],
	},
	{
		title: 'BeerBuddy Mobile',
		type: 'Mobile Application',
		imgSrc: '/img/beerbuddy_mobile.png',
		demoUrl: 'https://beerbuddy.io',
		codeUrl: 'https://github.com/drewcook/beerbuddy-web',
		description:
			'BeerBuddy is a cross-platform application powered by JavaScript. The client mobile application is written in React Native on top of the Expo framework. It incorporates user authentication with JWT.',
		filters: ['mobile', 'react native', 'graphql'],
		frameworks: ['React Native / Expo', 'GraphQL / Apollo'],
		techStack: ['React Native', 'Expo', 'GraphQL', 'Apollo', 'Jest', 'JWT'],
	},
	// {
	// 	title: 'Powder Chat',
	// 	type: 'Mobile Application',
	// 	imgSrc: 'https://picsum.photos/300/200',
	// 	demoUrl: 'https://powder.chat',
	// 	codeUrl: 'https://github.com/drewcook/powderchat-api',
	// 	description:
	// 		'Powderchat is both a full-stack web and native mobile application.  It attempts to connect ski and snowboard riders on the mountain via chat.  Users can log in, check into a mountain resort via search or GPS, and start chatting with other checked in users.  Users can also choose to set up private groups within the mountain, or connect with their friends via social media.  This allows for groups to keep in touch and not get lost while riding together.',
	// 	filters: ['mobile', 'node', 'react native'],
	// 	frameworks: ['Node / Express', 'React Native / Expo'],
	// 	techStack: ['Node', 'Express', 'JWT', 'Firebase', 'React Native'],
	// },
]

export default projects
