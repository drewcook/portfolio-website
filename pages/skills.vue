<template>
	<v-row>
		<v-col cols="12">
			<h1>Skills</h1>
			<p>
				Firstly, I keep an open mind and am always craving to learn more. I don't know it, and I
				don't intend to. This page should give you a pretty good idea of who I am as an engineer,
				what I know, and what I don't.
			</p>
			<p>
				However, over the years, I've been exposed to many different languages, frameworks, and
				libraries. Through that exposure, I've learned to focus my efforts around a subset of those,
				as it would take a lifetime to learn all the thing software development. I've chosen to give
				my time and energy towards specializing in the language of JavaScript. Writing code on both
				the server and the client without having to context switch to a different language has many
				benefits.
			</p>
			<p>
				Well, here's that laundry list of languages, frameworks, and libraries that I've come to
				understand over the years:
			</p>
			<h3>I like JavaScript.</h3>
			<ul>
				<li>ES6</li>
				<li>React</li>
				<li>Next.js Framework</li>
				<li>React Native</li>
				<li>Node</li>
				<li>Express Framework</li>
				<li>Vue</li>
				<li>Nuxt.js Framework</li>
				<li>Apollo GraphQL</li>
				<li>JWT</li>
				<li>Mongoose</li>
				<li>Expo</li>
			</ul>
			<h3>I like .NET</h3>
			<ul>
				<li>ASP.NET MVC</li>
				<li>ASP>NET Core</li>
				<li>C#</li>
				<li>Entity Framework</li>
				<li>Web API</li>
				<li>NUnit</li>
				<li>Hangfire</li>
				<li>LINQ</li>
			</ul>
			<h3>I like databases.</h3>
			<ul>
				<li>MongoDB</li>
				<li>SQL</li>
				<li>Firebase / Firestore</li>
			</ul>
			<h3>I like testing.</h3>
			<ul>
				<li>Jest</li>
				<li>Enzyme</li>
				<li>React Testing Library</li>
				<li>Cypress</li>
			</ul>
			<h3>I like tooling.</h3>
			<ul>
				<li>Babel</li>
				<li>Webpack</li>
				<li>ESLint</li>
				<li>Prettier</li>
				<li>Stylelint</li>
				<li>SignalR</li>
				<li>VS Code</li>
			</ul>
			<h3>I like component libraries.</h3>
			<ul>
				<li>Bootstrap</li>
				<li>Reactstrap</li>
				<li>Material UI</li>
				<li>Vuetify</li>
			</ul>
			<h3>I like shipping code.</h3>
			<ul>
				<li>Heroku</li>
				<li>CircleCI</li>
				<li>TravisCI</li>
				<li>Docker</li>
				<li>Git</li>
			</ul>
			<h3>I want to learn more about:</h3>
			<ul>
				<li>Progressive Web Apps</li>
				<li>Blockchain tech</li>
				<li>Vue</li>
				<li>Go</li>
				<li>Docker</li>
				<li>Kubernetes</li>
				<li>Flutter</li>
				<li>Firebase / Firestore</li>
				<li>System Design</li>
				<li>Amazon Web Services</li>
			</ul>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		data() {
			return {
				languages: [
					{
						name: 'JavaScript',
						percent: 85,
						yoe: 7,
					},
					{
						name: 'C#',
						percent: 70,
						yoe: 7,
					},
					{
						name: 'HTML',
						percent: 95,
						yoe: 8,
					},
					{
						name: 'CSS',
						percent: 90,
						yoe: 8,
					},
					{
						name: 'SQL',
						percent: 65,
					},
				],
				frameworks: [
					{
						name: 'Entity Framework / .NET',
						percent: 60,
						yoe: 7,
					},
					{
						name: 'Node',
						percent: 60,
						yoe: 5,
					},
					{
						name: 'Express',
						percent: 80,
						yoe: 5,
					},
					{
						name: 'React',
						percent: 88,
						yoe: 4,
					},
					{
						name: 'Vue',
						percent: 25,
						yoe: 1,
					},
					{
						name: 'Angular',
						percent: 10,
						yoe: 1,
					},
					{
						name: 'Next.js',
						percent: 70,
						yoe: 3,
					},
					{
						name: 'Nuxt.js',
						percent: 30,
						yoe: 1,
					},
					{
						name: 'Apollo GraphQL',
						percent: 60,
						yoe: 3,
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
