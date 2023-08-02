<template>
	<v-container>
		<v-row>
			<v-col cols="12">
				<h1 class="page-title">About Me</h1>
				<v-row>
					<v-col cols="12" md="8" lg="9" xl="10">
						<h2>Who Are You?</h2>
						<p>
							What's happening? I'm Drew. I'd describe myself as a builder or engineer, an active
							learner, and an overall optimist with a drive to make an impact on the current world
							affairs in the positive direction of equality, sustainability, and individual liberty.
						</p>
						<p>
							I've always enjoyed making something out of nothing and being creative since I was
							just a young kid playing with legos and building blocks of sorts or drawing endless
							sketches of refridgerator art. Over the years through many trials and errors and by
							adopting a growth mindset, I have found that there are no limits to exploring ideas
							and start materializing it, regardless of the medium, whether it be concrete, music,
							or code.
						</p>
						<p>
							I'm super passionate about what I do, and I love working with other people that are
							also passionate about what they do, regardless of what it is. I feed off the energy of
							others that are focused on a long-term goal and are dedicated to reaching it.
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
								<small><em>No idea what I'm looking at</em></small>
							</div>
						</div>
					</v-col>
				</v-row>
				<h3>Let me see your credentials.</h3>
				<p>
					Over my career, I've worked in a variety of public and private sectors and industries, as
					an independent consultant, in fast-paced high-growth startups, and in large slow-moving
					government organizations. I have seen a lot of ways on how to set goals, execute, and
					innovate as a collective group.
				</p>
				<p>
					In a previous Web3 role, I worked as an engineer at
					<a href="https://aave.com/" class="content-link" target="_blank"> Aave Companies</a>,
					building out and maintaining the primary user interface and APIs that interact with the
					Aave Protocol smart contracts, which is deployed on a variety of blockchain networks.
				</p>
				<p>
					I've also been a co-founder of a Web3 music NFT protocol and platform,
					<a href="https://arbor.audio/" class="content-link" target="_blank">Arbor</a>. It is a
					collaborative music-making platform where producers and musicians can upload individual
					stems onto a project to build a song, which users can then buy mint as an NFT on-chain
					directly from the artists. Profits from the sale price get evenly distributed to the
					collaborators, and secondary sales generate evergreen kickbacks through the form of
					royalties, all while creating and fostering community.
				</p>
				<p>
					I've even had the opportunity to work directly with Vitalik Buterin by implementing dark
					mode onto his
					<a href="https://vitalik.ca/" class="content-link" target="_blank">popular blog</a>. It
					was sponsored through a
					<a href="https://gitcoin.co" class="content-link" target="_blank">Gitcoin</a> grant, and
					you can view the PRs I merged in
					<a
						href="https://github.com/vbuterin/blogmaker/pull/11"
						class="content-link"
						target="_blank"
						>here</a
					>
					and
					<a href="https://github.com/vbuterin/blog/pull/40" class="content-link" target="_blank"
						>here</a
					>.
				</p>
				<p>
					In previous Web2 roles, I've worked as a tech lead for
					<a
						href="https://www.linkrightmedia.com/"
						class="content-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						digital marketing agencies</a
					>, on enterprise applications for an
					<a
						href="https://evolverinc.com/"
						class="content-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						IT consulting company</a
					>
					&nbsp;and a
					<a href="https://aoc.gov/" class="content-link" target="_blank" rel="noopener noreferrer">
						federal government agency</a
					>, and as a frontend specialist for a big data
					<a href="https://gloo.us/" class="content-link" target="_blank" rel="noopener noreferrer">
						startup</a
					>.
				</p>
				<p class="blocky">
					You can check out more details about my work experience on my
					<nuxt-link to="/experience" class="content-link">Resume</nuxt-link>.
				</p>
				<v-divider />
				<h2>What are you currently excited about?</h2>
				<p>
					I'm genuinely passionate about the power in the blockchain-powered, decentralized
					network-driven tech advancements happening in the Web3 space. I'm really interested in the
					onboarding problem, for getting the next wave of users into this ecosystem and providing
					value by building decentralized systems that support our societies at scale.
				</p>
				<p>
					I am also super excited about the advancements of use-cases for zero-knowledge proofs. We
					have learned over the years since around the turn of the millennium that data is the most
					valuable resource on earth. This calls for the right to privacy more than ever on an
					individual level, as citizens of nations, users of digital products and services,
					consumers and producers, and digital identities, the need to own our own data or prove our
					identity without revealing all of our own PII is a primary issue that I'd like to have a
					part in addressing.
				</p>
				<p>
					We have collectively learned what the effects of submitting our personal data to big tech
					and the overreach of governments on their citizens can do for us. We finally have a new
					opportunity to rewrite those ways of operating. We can do better. We can evolve.
				</p>
				<p class="blocky">Clefairy, meet Clefable. No moon stone needed, just consensus.</p>
				<v-divider />
				<h2>What else are you into?</h2>
				<p>
					When I'm not writing code, I try to touch grass, hiking, snowboarding, being outside with
					my dog. I have also been a musician for over twenty years, so that means also songwriting
					and producing my own music. I also thoroughly enjoy travel and keep it down to a single
					40L backpack that can sustain me for months. I truly enjoy packing light and getting
					around to the beautiful places around the world and the wonderful, diverse cultures that
					all make us unique, yet all the same.
				</p>
				<p>Kind of like blockchain transactions?</p>
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
