<template>
	<v-row>
		<v-col>
			<h1>About Me</h1>
			<h2>Who Are You?</h2>
			<p>
				Hello there reader! Thanks for visiting my online portolio. My name is Drew Cook. I
				currently reside in Denver, Colorado. I have been building things ever since I was a young
				lad, and it turns out that I also like building things as an adult. Aside from a
				webmastering class I took senior year of high school, I've been building things with
				software since 2014, when I decided to make a career change. I'd go through each day feeling
				unsatisfied, yearning for something to scratch this itch I have to do something great,
				something that could help unlock my true potential. I found software development and haven't
				looked back.
			</p>
			<h2>Let me see your credentials!</h2>
			<p>
				I was fortunate enough to get accepted into a small dev bootcamp startup here in the Denver
				area in 2014 where we learned fullstack development in the .NET framework. I've since done a
				lot more. I taught myself frontend development more deeply, started working for an agency
				doing custom WordPress themes, started my own company in 2016 for consulting, worked on
				enterprise .NET applications in the e-discovery world, shifted into the federal government
				world working for some high-profile clients, worked for a scrappy startup, more self
				learning, and even built this portfolio!
			</p>
			<h2>Okay, why do you like JavaScript so much?</h2>
			<p>
				You may have seen already, I like JavaScript. I choose to work in JavaScript primarily for
				two reasons:
			</p>
			<h3>It Is Isomorphic</h3>
			<p>
				How awesome is it that JavaScript can be run on both the server and the client. No longer is
				it just the language you have to put up with if you wanted some interactivity on your
				Geocities website or Myspace page. With the latest leaps that Node has had in the last 10
				years, the recent developments and adoption for TypeScript, and the new advancements in
				server-side rendered components, it's becoming a powerhouse technology that can do it all.
				The best part may be the unseen benefits you get while not having to code-switch while
				jumping from server to client code and vice versa. I'm sorry, C#, I do prefer my single
				quotes!
			</p>
			<h3>It Keeps Me Learning</h3>
			<p>
				The JavaScript world moves fast, and if you aren't staying up to date with the latest
				updates, your app could get left in the dust and become a tech debt operation to upgrade.
				You could also be missing out on all the amazing technologies out there that make web and
				applicatoin development easier to write and maintain. I love the lifestyle I suppose; the
				ecosystem holds myself accountable for staying sharp and relevant. Any time I am getting
				stale, I will know it because something new hits the community, or existing things improve
				and become better. Time to refactor and take advantage of that new thing!
			</p>
			<h2>What are you currently excited about?</h2>
			<p>
				I am really enjoying working within the Vue ecosystem at the moment. There's a growing
				community happening, and it is really refreshing to work with.
			</p>
			<p>
				I've also been getting into more React Native development recently, and am excited to get a
				<a href="https://beerbuddy.io" target="_blank">BeerBuddy</a> mobile client app built. Of
				course I'll use my existing
				<a href="https://github.com/drewcook/beerbuddy-api" target="_blank">backend API</a> for
				this!
			</p>
			<p>TypeScript! It's the future of JavaScript, period.</p>
			<h2>What else are you into?</h2>
			<p>
				When I'm not writing code, I enjoy spending my time writing and producing my own music and
				playing guitar in
				<a href="https://open.spotify.com/artist/2Fv03ttGxfHRtBvwSDtyhc" target="_blank"
					>Vanimal Kingdom</a
				>, a Denver-based rock band. I also have picked up woodworking recently, and I've enjoyed
				building some furniture to put around the house. And of course I enjoy all the outdoor
				activites that Colorado has to offer - snowboarding, hiking, backpacking, kayaking, cycling,
				and the Rockies!
			</p>
		</v-col>
	</v-row>
</template>

<script>
	export default {
		head() {
			return {
				title: 'About Me',
			}
		},
	}
</script>
