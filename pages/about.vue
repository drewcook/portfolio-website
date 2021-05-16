<template>
	<v-row>
		<v-col>
			<h1>About Drew Cook</h1>
			<v-row>
				<v-col cols="12" md="8">
					<p>Hello there reader! Thanks for visiting my online portolio.</p>
					<h2>Who Are You?</h2>
					<p>
						My name is Drew Cook. I currently reside in Denver, Colorado. I have been building
						things ever since I was a young lad, and it turns out that I also like building things
						as an adult. Aside from a webmastering class I took senior year of high school, I've
						been building things with software since 2014, when I decided to make a career change.
						I'd go through each day feeling unsatisfied, yearning for something to scratch this itch
						I have to do something great, something that could help unlock my true potential. I
						found software development and haven't looked back.
					</p>
				</v-col>
				<v-col cols="12" md="4">
					<div class="image">
						<v-img
							:src="require('~/assets/img/headshot.jpg')"
							alt="Drew Cook, Web Engineer and Software Enthusiast"
							title="Drew Cook Headshot"
							max-width="400"
							max-height="400"
						/>
					</div>
				</v-col>
			</v-row>

			<h2>Let me see your credentials!</h2>
			<p>
				I've worked for, and with, a wide range of businesses in several different sectors. I've
				worked for
				<a
					href="https://www.linkrightmedia.com/"
					class="content-link"
					target="_blank"
					rel="noopener noreferrer"
					>digital marketing agencies</a
				>
				as a tech lead, worked on enterprise level applications for an
				<a
					href="https://evolverinc.com/"
					class="content-link"
					target="_blank"
					rel="noopener noreferrer"
					>IT consulting company</a
				>, contracted for a federal governement agency on
				<a href="https://aoc.gov/" class="content-link" target="_blank" rel="noopener noreferrer"
					>Capitol Hill</a
				>, and as a frontend engineer well-funded
				<a href="https://gloo.us/" class="content-link" target="_blank" rel="noopener noreferrer"
					>tech startup</a
				>
				in Boulder, Colorado.
			</p>
			<p>
				You can check out more details about my work experience
				<nuxt-link to="/resume" class="content-link">Resume</nuxt-link>.
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
				<a href="https://beerbuddy.io" target="_blank" class="content-link">BeerBuddy</a> mobile
				client app built. Of course I'll use my existing
				<a href="https://github.com/drewcook/beerbuddy-api" target="_blank" class="content-link"
					>backend API</a
				>
				for this!
			</p>
			<p>TypeScript! It's the future of JavaScript, period.</p>
			<h2>What else are you into?</h2>
			<p>
				When I'm not writing code, I enjoy spending my time writing and producing my own music and
				playing guitar in
				<a
					href="https://open.spotify.com/artist/2Fv03ttGxfHRtBvwSDtyhc"
					target="_blank"
					class="content-link"
				>
					Vanimal Kingdom
				</a>
				, a Denver-based rock band. I also have picked up woodworking recently, and I've enjoyed
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

<style lang="scss" scoped>
	.image {
		background: #fff;
		border: 1px solid $dc-gray-lt;
		border-radius: 4px;
		margin: 0 auto 30px;
		max-width: 400px;
		padding: 10px;
	}
</style>
