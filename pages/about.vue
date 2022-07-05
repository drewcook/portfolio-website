<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1 class="page-title">About Me</h1>
				<v-row>
					<v-col cols="12" md="8" lg="9" xl="10">
						<h2>Who Are You?</h2>
						<p>
							Hi there! My name is Drew Cook, and I currently live in Denver, Colorado. I've always
							enjoyed creating something out of nothing and being creative, and I think there's
							nothing that can't be built when adopting a growth mindset.
						</p>
						<p>
							I'm super passionate about what I do, and I love working with other people that are
							also passionate about what they do, regardless of what it is.
						</p>
					</v-col>
					<v-col cols="12" md="4" lg="3" xl="2">
						<div class="image">
							<v-img
								src="/img/drewcook.jpg"
								alt="Drew Cook, Web Engineer and Software Enthusiast"
								title="Drew Cook Headshot"
								max-width="400"
								max-height="400"
							/>
							<div class="text-center">
								<small><em>R.I.P. man bun</em></small>
							</div>
						</div>
					</v-col>
				</v-row>
				<h3>Let me see your credentials.</h3>
				<p>
					Over the years, I've worked for a wide range of businesses and clients in both the private
					and public sectors. I have worked as a full stack engineer writing both server-side and
					client-side code and am comfortable with a range of software development lifecycle
					methods.
				</p>
				<p>
					I've worked as a tech lead for
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
					as a frontend specialist for a
					<a href="https://gloo.us/" class="content-link" target="_blank" rel="noopener noreferrer">
						tech startup
					</a>
					in Boulder, Colorado, and now I am working as a blockchain engineer at pretty well-known
					<a
						href="https://aave.com/"
						class="content-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						DeFi company
					</a>
					.
				</p>
				<p class="blocky">
					You can check out more details about my work experience on my
					<nuxt-link to="/experience" class="content-link">Resume</nuxt-link>.
				</p>
				<v-divider />
				<h2>Why do you like JavaScript so much?</h2>
				<p>
					If you haven't already, first check out some of my
					<nuxt-link to="/work" class="content-link">projects</nuxt-link> - you'll see a lot of code
					written in JavaScript and across the JAMstack. Aside from the flexability of writing
					within either object-oriented with TypeScript or functional programming paradigms, I
					choose to work in JavaScript primarily for two reasons:
				</p>
				<h3>It Keeps Me Learning</h3>
				<p>
					The JavaScript world moves fast, and the ever-changing ecosystem holds myself accountable
					for staying sharp and relevant. Thanks to the passionate community members and open source
					contributions, existing libraries are being improved upon and new ones pop up quite often.
				</p>
				<h3>It Is Isomorphic</h3>
				<p>
					How convenient is it that JavaScript can be run on both the server and the client? I think
					it's pretty awesome, especially since you don't have to code-switch while jumping from
					server to client code and vice versa. TypeScript interfaces and classes make it easy to
					write object-oriented code for a substantial backend and business layer, and client-side
					frameworks make it a joy to spin up elegant, reactive UIs.
				</p>
				<p class="blocky">
					I'm sorry, C#. I prefer my single quotes, and now I don't have to be reminded to switch.
					Win!
				</p>
				<v-divider />
				<h2>What are you currently excited about?</h2>
				<p>
					I am so excited about the next generation of the internet that is Web3 ecosystem, and I am
					currently reading a lot about smart contract development with Solidity. I have been
					building a bit with the Truffle framework primarily to write smart contracts and DApps
					(decentralized applications) with React, utilizing the smart contracts from Solidity.
					There are many different parts to the Web3 ecosystem, several layers, sidechains, IPFS,
					ENS, different blockchain protocols using their own consensus mechanism, etc. There's a
					lot out there. At the moment, I am currently focused on writing smart contracts and Web3
					client applications, since I can leverage my existing skillset for this. I am excited to
					get better at writing secure Solidity code and working with the Ethereum blockchain at the
					moment.
				</p>
				<p>
					Aside from blockchain development and research, I've really been enjoying working within
					the <strong>Vue ecosystem</strong> and building things with <strong>Nuxt.js</strong>.
					Since most of my past experience involves React to some degree, it has been really
					refreshing working with these frameworks. I'm also super stoked about
					<strong>TypeScript</strong> and the adoption of it that has been taking place across our
					industry. Classes and interfaces are truly a powerful combination for writing within the
					object-oriented programming paradigm.
				</p>
				<p class="blocky">Clefairy, meet Clefable. No moon stone needed.</p>
				<v-divider />
				<h2>What else are you into?</h2>
				<p>
					When I'm not writing code, I spend most of my time living the dream with my wonderful
					girlfriend and my four-legged companion. I also write and produce my own music and play
					guitar in a funk/rock group called
					<a
						href="https://open.spotify.com/artist/2Fv03ttGxfHRtBvwSDtyhc"
						target="_blank"
						class="content-link"
					>
						Vanimal Kingdom,
					</a>
					where we play shows in Denver and the surrounding areas. And of course, I enjoy all the
					outdoor activites that Colorado has to offer - snowboarding, backpacking, the large
					selection of craft brew and local breweries, and seeing the Rockies at Coors Field.
				</p>
				<p class="blocky">
					Check out some of my music on
					<a
						href="https://soundcloud.com/thenotesbetween"
						target="_blank"
						rel="noopener noreferrer"
						class="content-link"
					>
						Soundcloud!
					</a>
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
