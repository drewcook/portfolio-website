<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1 class="page-title">Let's Talk About It</h1>
				<v-row>
					<v-col cols="12" md="8" lg="9" xl="10">
						<p>Get to know me a little bit more.</p>
						<p class="blocky">
							"Ooh, ahh, just a little bit. Ooh, ahh, a little bit more." Man, I miss the 90s.
						</p>
						<h2>Who Are You?</h2>
						<p>
							Hi there! My name is Drew Cook, and I currently live in Denver, Colorado. I've always
							enjoyed creating something out of nothing and being creative. Just like in music,
							architecture, and community, all things that start from an idea, I think there's
							nothing that can't be built when adopting a growth mindset. I'm super passionate about
							what I do, and I love working with other people that are also passionate about what
							they do, regardless of what it is.
						</p>
						<p>
							In the beginning of 2014, feeling unsatisfied with my job, I decided to make a career
							change. I found the world of writing software, using it as a media to be creative and
							manifest ideas, and I haven't looked back since.
						</p>
					</v-col>
					<v-col cols="12" md="4" lg="3" xl="2">
						<div class="image">
							<v-img
								:src="require('/assets/img/drewcook.jpg')"
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
				<h3>Let me see your credentials.</h3>
				<p>
					Over the years, I've worked for a wide range of businesses and clients in both the private
					and public sectors. I have worked as a full stack engineer writing both server-side and
					client-side code and am comfortable with a range of software development lifecycle
					methods. I've worked as a tech lead for
					<a
						href="https://www.linkrightmedia.com/"
						class="content-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						digital marketing agencies,
					</a>
					on enterprise applications for an
					<a
						href="https://evolverinc.com/"
						class="content-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						IT consulting company
					</a>
					and a
					<a href="https://aoc.gov/" class="content-link" target="_blank" rel="noopener noreferrer">
						federal government agency,
					</a>
					and as a frontend specialist for a
					<a href="https://gloo.us/" class="content-link" target="_blank" rel="noopener noreferrer">
						tech startup
					</a>
					in Boulder, Colorado.
				</p>
				<p class="blocky">
					You can check out more details about my work experience on my
					<nuxt-link to="/experience" class="content-link">Resume</nuxt-link>.
				</p>
				<v-divider />
				<h2>Why do you like JavaScript so much?</h2>
				<p>
					If you haven't already, first check out some of my
					<nuxt-link to="/work" class="content-link">projects</nuxt-link>. Apart from the .NET work
					I've done at full-time positions, you'll see a lot of code written in JavaScript. Aside
					from the flexability of writing object oriented programming or functional programming, the
					continued support from the community at large, and large library of open-source projects
					depending on it, I choose to work in JavaScript primarily for two reasons:
				</p>
				<h3>It Is Isomorphic</h3>
				<p>
					How convenient is it that JavaScript can be run on both the server and the client? I think
					it's pretty awesome, especially since you don't have to code-switch while jumping from
					server to client code and vice versa. I'm sorry, C#, I prefer my single quotes, and now I
					don't have to be reminded to switch. Win!
				</p>
				<h3>It Keeps Me Learning</h3>
				<p>
					The JavaScript world moves fast, and the ever-changing ecosystem holds myself accountable
					for staying sharp and relevant. Thanks to the passionate community members and open source
					contributions, existing libraries improve and become better, or new ones become a solution
					to a common problem.
				</p>
				<v-divider />
				<h2>What are you currently excited about?</h2>
				<p>
					There are so many things that I'm excited about, but I'll mention just a few. I'm really
					enjoying working within the <strong>Vue ecosystem</strong> at the moment. There's a
					growing community happening, and it is really refreshing coming from React. I've also been
					getting into more <strong>React Native</strong> development recently and am excited to get
					a <a href="https://beerbuddy.io" target="_blank" class="content-link">BeerBuddy</a> mobile
					app built on top of the existing
					<a href="https://github.com/drewcook/beerbuddy-api" target="_blank" class="content-link">
						backend API </a
					>. Finally, I'm definitely excited about <strong>TypeScript</strong> and the adoption of
					it that is currently taking place across our industry. It's the future of JavaScript.
				</p>
				<p class="blocky">Clefairy, meet Clefable. No moon stone needed.</p>
				<v-divider />
				<h2>What else are you into?</h2>
				<p>
					When I'm not writing code, I mostly love spending time with my girlfriend and dog, Roscoe.
					I also write and produce
					<a
						href="https://soundcloud.com/thenotesbetween"
						target="_blank"
						rel="noopener noreferrer"
						class="content-link"
					>
						my own music
					</a>
					and play guitar in a Denver-based rock band,
					<a
						href="https://open.spotify.com/artist/2Fv03ttGxfHRtBvwSDtyhc"
						target="_blank"
						class="content-link"
					>
						Vanimal Kingdom.
					</a>
					I've also picked up woodworking recently, I'm learning Spanish, and of course I enjoy all
					the outdoor activites that Colorado has to offer - snowboarding, backpacking, cycling, the
					large selection of craft brew and local breweries, and seeing the Rockies at Coors Field.
				</p>
			</v-col>
		</v-row>
	</v-container>
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
		padding: 15px 10px;
		padding-right: 30px;
	}
</style>
