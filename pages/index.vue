<template>
	<v-row justify="center" align="center">
		<v-col cols="12" sm="8" md="6">
			<v-card>
				<v-card-title class="headline"> Hello World, I'm Drew Cook! </v-card-title>
				<v-card-text>
					<p>
						Welcome to my online portfolio. Check out some of my work or get in touch with me via my
						contact information.
					</p>
					<hr class="my-3" />
					<p>Feel free to connect with me on my other platforms, or check out my code on Github.</p>
					<ul>
						<li>
							<a href="https://linkedin.com/in/drewcook2" target="_blank" rel="noopener noreferrer">
								LinkedIn
							</a>
						</li>
						<li>
							<a href="https://github.com/drewcook" target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
						</li>
					</ul>
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
	export default {
		head() {
			return {
				title: 'Welcome To My Portfolio',
			}
		},
	}
</script>
