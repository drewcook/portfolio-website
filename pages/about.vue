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
							just a young kid playing with LEGOs and building blocks of sorts or drawing endless
							sketches of refrigerator art. Over the years through many trials and errors and by
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
				<v-divider />
				<h2>Let me see your credentials.</h2>
				<p>
					Over my career, I've worked in a variety of public and private sectors and industries, as
					an independent consultant, in fast-paced high-growth startups, and in large slow-moving
					government organizations. I have seen a lot of ways on how to set goals, execute, and
					innovate as a collective group.
				</p>
				<p>
					I have worked as a full-stack engineer at
					<a href="https://aave.com/" class="content-link" target="_blank"> Aave Companies</a>,
					building out and maintaining the primary application user interface and backend APIs that
					interact with the Aave Protocol smart contracts, which are deployed on a variety of L1
					networks.
				</p>
				<p>
					I've been a co-founder of a Web3 music NFT protocol and platform,
					<a href="https://arbor-ui.vercel.app" class="content-link" target="_blank">Arbor</a>. It
					is a collaborative music-making platform where producers and musicians can upload
					individual stems onto a project to build a song, which users can then buy mint as an NFT
					on-chain directly from the artists. Profits from the sale price get evenly distributed to
					the collaborators, and secondary sales generate evergreen kickbacks through the form of
					royalties, all while creating and fostering community. You can read more about what we
					accomplished in the ETHDenver 2022 hackathon in
					<a href="https://dorahacks.io/buidl/2059" class="content-link" target="_blank"
						>this writeup</a
					>. You can also see how we
					<a
						href="https://twitter.com/Filecoin/status/1501013407205519361"
						class="content-link"
						target="_blank"
						>won 1st place from Filecoin</a
					>
					as well as
					<a
						href="https://harmonyone.notion.site/2022-July-newsletter-be944fc5db364ccc94537ea6e0a72522"
						class="content-link"
						target="_blank"
						>got incubated from Harmony zkDAO</a
					>. The project has reached a natural conclusion with the team disbanding and me inheriting
					it as a passion project.
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
					In the summer of 2022, I enrolled in and graduated from
					<a href="https://zku.gnomio.com/" class="content-link" target="_blank"
						>Zero Knowledge University</a
					>, a Harmony-backed bootcamp where we researched and wrote code implementing
					zero-knowledge proofs within the blockchain space. We learned and practiced some of the
					following: how to sign an MPC, perform a trusted setup, using different proving mechanisms
					between Plonk and Groth16, wrote a variety of circuits in Circom, and ultimately
					implemented a new unique ZKP-based feature into a new or existing application. The program
					has since been sunsetted following the Harmony Bridge hack, but you can read more about
					the program in
					<a
						href="https://medium.com/harmony-one/on-boarding-10-000-developers-harmonys-zero-knowledge-university-3a6f9583acdd"
						class="content-link"
						target="_blank"
						>this article</a
					>.
				</p>
				<p>
					As I've mentioned, I am very interested in smart contract security and working to find and
					patch vulnerabilities in Web3 protocols to help prevent substantial losses of other
					people's crypto ending up in the hands of a hacker. It is vitally important to our
					different ecosystems, the power of decentralized software, and our broader reputation for
					crypto as a whole. I am spending time practicing as anonymous auditor for
					<a href="https://secure3.io" class="content-link" target="_blank">Secure3</a>. I review a
					protocol every few weeks and practice techniques like static analysis, fuzz testing,
					symbolic analysis, some formal verification, and the manual analysis required by combing
					through the code and docs.
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

	h2 {
		margin-bottom: 1rem;
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
		margin: 1rem 0;
		padding: 15px 10px;
		padding-right: 30px;
	}
</style>
