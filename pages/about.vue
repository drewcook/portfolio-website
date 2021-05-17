<template>
	<v-row>
		<v-col cols="12">
			<h1>Let's Talk About Me</h1>
			<v-row>
				<v-col cols="12" md="8" lg="9" xl="10">
					<p>Get to know me a little bit more.</p>
					<p class="blocky">
						"Ooh, ahh, just a little bit. Ooh, ahh, a little bit more." Man, I miss the 90s.
					</p>
					<h2>Who Are You?</h2>
					<p>
						Hi there, I'm Drew Cook. I currently reside in Denver, Colorado. I have been building
						things ever since I was a young lad, and it turns out that I also like building things
						as an older lad as well. In 2014, I decided to make a career change. I'd go through each
						day feeling unsatisfied, yearning for something to scratch this itch I have to do
						something great, something that could help unlock my true potential. I found the world
						of writing software and haven't looked back since.
					</p>
				</v-col>
				<v-col cols="12" md="4" lg="3" xl="2">
					<div class="image">
						<v-img
							:src="require('~/assets/img/headshot.jpg')"
							alt="Drew Cook, Web Engineer and Software Enthusiast"
							title="Drew Cook Headshot"
							max-width="400"
							max-height="400"
						/>
						<div class="text-center">
							<small><em>Man bun was a thing</em></small>
						</div>
					</div>
				</v-col>
			</v-row>
			<h3>Hm... Let me see your credentials!</h3>
			<p>
				Over the years, I've worked for a wide range of businesses and clients over both the private
				and public sectors. I have worked at full capacity on both server-side and client-side code
				and am comfortably on either side. I've worked for as a tech lead at
				<a
					href="https://www.linkrightmedia.com/"
					class="content-link"
					target="_blank"
					rel="noopener noreferrer"
					>digital marketing agencies</a
				>, on .NET enterprise applications for an
				<a
					href="https://evolverinc.com/"
					class="content-link"
					target="_blank"
					rel="noopener noreferrer"
					>IT consulting company</a
				>
				and a federal governement agency on
				<a href="https://aoc.gov/" class="content-link" target="_blank" rel="noopener noreferrer"
					>Capitol Hill</a
				>, and as a frontend specialist for a well-funded
				<a href="https://gloo.us/" class="content-link" target="_blank" rel="noopener noreferrer"
					>tech startup</a
				>
				in Boulder, Colorado.
			</p>
			<p class="blocky">
				You can check out more details about my work experience on my
				<nuxt-link to="/resume" class="content-link">Resume</nuxt-link>.
			</p>
			<v-divider />
			<h2>Okay, why do you like JavaScript so much?</h2>
			<p>
				Firstly, if you haven't already, check out some of my
				<nuxt-link to="/work" class="content-link">projects</nuxt-link>. Aside from the .NET work
				I've done, you'll see a lot of code written in JavaScript. Aside from the flexability of
				writing object oriented programming or functional programming, the continued support from
				the community at large, and large library of open-source projects depending on it, I choose
				to work in JavaScript primarily for two reasons:
			</p>
			<h3>It Is Isomorphic</h3>
			<p>
				How awesome is it that JavaScript can be run on both the server and the client? I think it's
				pretty awesome, especially since you don't have to code-switch while jumping from server to
				client code and vice versa. I'm sorry, C#, I do prefer my single quotes!
			</p>
			<h3>It Keeps Me Learning</h3>
			<p>
				The JavaScript world moves fast, and the ecosystem holds myself accountable for staying
				sharp and relevant. Existing things improve and become better, thanks to the passionate
				community members and open source contributions. Time to refactor and take advantage of that
				new version of today's favorite flavor!
			</p>
			<v-divider />
			<h2>What are you currently excited about?</h2>
			<p>
				There are so many things that grease my gears, but I'll mention just a few. I am really
				enjoying working within the <strong>Vue ecosystem</strong> at the moment. There's a growing
				community happening, and it is really refreshing to work with. I've also been getting into
				more <strong>React Native</strong> development recently, and am excited to get a
				<a href="https://beerbuddy.io" target="_blank" class="content-link">BeerBuddy</a> mobile
				client app built. Of course I'll use my existing
				<a href="https://github.com/drewcook/beerbuddy-api" target="_blank" class="content-link"
					>backend API</a
				>
				for this! And I'm definitely excited about <strong>TypeScript</strong> and the adoption of
				it that is currently taking place across our industry. It's the future of JavaScript.
			</p>
			<p class="blocky">Clefairy, meet Clefable. No moon stone needed.</p>
			<v-divider />
			<h2>What else are you into?</h2>
			<p>
				When I'm not writing code, I enjoy spending my time writing and producing
				<a
					href="https://soundcloud.com/thenotesbetween"
					target="_blank"
					rel="noopener noreferrer"
					class="content-link"
					>my own music</a
				>
				and playing guitar in a Denver-based rock band,
				<a
					href="https://open.spotify.com/artist/2Fv03ttGxfHRtBvwSDtyhc"
					target="_blank"
					class="content-link"
				>
					Vanimal Kingdom
				</a>
				. I've also picked up woodworking recently, and I've enjoyed building some furniture to put
				in and around the house and garage. And of course I enjoy all the outdoor activites that
				Colorado has to offer - snowboarding, hiking, backpacking, kayaking, cycling, the large
				selection of craft brew and local breweries, and seeing the Rockies at Coors Field!
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
	hr {
		margin: 30px 0;
	}

	.image {
		background: #fff;
		border: 1px solid $dc-gray-lt;
		border-radius: 4px;
		margin: 0 auto 30px;
		max-width: 400px;
		padding: 10px;
	}

	.blocky {
		background-color: #fff;
		border-bottom-right-radius: 4px;
		border-left: 10px solid $dc-blue-lt;
		border-top-right-radius: 4px;
		display: inline-block;
		font-family: $casual-font;
		// font-size: 16px;
		padding: 15px 10px;
		padding-right: 30px;
	}
</style>
