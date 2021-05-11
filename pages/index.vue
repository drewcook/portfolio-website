<template>
	<v-row justify="center" align="center">
		<v-col cols="12" sm="8" md="6">
			<v-card>
				<v-card-title class="headline"> Hello World, I'm Drew Cook! </v-card-title>
				<v-card-text>
					<p>Here are some of my projects.</p>
					<ul>
						<li><a href="https://beerbuddy.io" target="_blank">BeerBuddy</a></li>
						<li><a href="https://dadjokes.drewcook.dev" target="_blank">Dad Jokes</a></li>
						<li><a href="https://flickfinder.drewcook.dev" target="_blank">Flick Finder</a></li>
						<li><a href="https://guitarxc.drewcook.dev" target="_blank">Guitar Exchange</a></li>
						<li><a href="https://yougotserved.drewcook.dev" target="_blank">You Got Served</a></li>
					</ul>
					<hr class="my-3" />
					<a href="https://github.com/drewcook" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
				</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn color="primary" nuxt to="/work">Check Out My Work</v-btn>
				</v-card-actions>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	export default {}
</script>
