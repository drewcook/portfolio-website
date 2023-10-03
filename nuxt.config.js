// import colors from 'vuetify/es5/util/colors'

export default {
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: 'Drew Cook | Full Stack Web3 Software Engineer | %s',
		title: 'Online Portfolio',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		// Google GA4
		script: [
			{
				src: 'https://www.googletagmanager.com/gtag/js?id=G-Q4KF9QTM6Q',
				async: true,
			},
			{
				hid: 'gtag',
				innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q4KF9QTM6Q');
        `,
			},
		],
		__dangerouslyDisableSanitizersByTagID: {
			gtag: ['innerHTML'],
		},
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['animate.css', 'hover.css', '~/assets/scss/styles'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{ src: '@/plugins/aos', mode: 'client' }],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxt/http',
		// https://go.nuxtjs.dev/eslint
		['@nuxtjs/eslint-module', { fix: true }],
		// https://go.nuxtjs.dev/stylelint
		['@nuxtjs/stylelint-module', { fix: true }],
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
		// https://google-fonts.nuxtjs.org/
		'@nuxtjs/google-fonts',
	],

	/*
	 ** Server Middleware
	 */
	serverMiddleware: {
		'/api': '~/api',
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	publicRuntimeConfig: {},

	googleFonts: {
		families: {
			Kalam: [400],
			Exo: [300],
			'Libre Franklin': [100, 300, 600],
			Prompt: [400, 700],
			'Titillium Web': [200, 400, 600, 900],
		},
		preconnect: true,
		preload: true,
	},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ['~/assets/scss/_variables.scss'],
		treeShake: true,
		defaultFonts: false,
		theme: {
			options: {
				customPropreties: true,
			},
			themes: {
				light: {
					primary: '#457b9d',
					secondary: '#324055',
					accent: '#e63946',
					error: '#f44336',
					warning: '#ffc107',
					info: '#009688',
					success: '#4caf50',
				},
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
