<template>
	<div>
		<h1>My Work</h1>
		<p>
			All of these projects have their own demo site available. You can find the code for each
			project by clicking the Github link on each project card.
		</p>
		<v-row>
			<v-col>
				<v-card>
					<v-card-title class="headline"> BeerBuddy </v-card-title>
					<v-card-text>
						<p>
							Beerbuddy is a full-stack web application powered by JavaScript. The code is split up
							into two repositories, so that the the backend can be reused for other client apps.
							The backend is built in node.js and express and uses MongoDB for storage. The client
							app is built using the Next.js framework and utilizing both GraphQL Apollo Client and
							Server.
						</p>
						<ul>
							<li><a href="https://beerbuddy.io" target="_blank">Demo</a></li>
							<li>
								<a href="https://github.com/drewcook/beerbuddy-api" target="_blank">Server Code</a>
							</li>
							<li>
								<a href="https://github.com/drewcook/beerbuddy-web" target="_blank">Client Code</a>
							</li>
						</ul>
					</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn color="primary" nuxt to="/work">Check Out My Work</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col>
				<v-card>
					<v-card-title class="headline"> DadJokes </v-card-title>
					<v-card-text>
						<p>
							DadJokes is built using the Nuxt.js framework. It connects with the Dadjokes.io API to
							list out jokes by category. You can search for a joke, filter by category, and view
							the setup and punchlines for each joke.
						</p>
						<ul>
							<li><a href="https://dadjokes.drewcook.dev" target="_blank">Demo</a></li>
							<li>
								<a href="https://github.com/drewcook/nuxt-dadjokes" target="_blank">Code</a>
							</li>
						</ul>
					</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn color="primary" nuxt to="/work">Check Out My Work</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col>
				<v-card>
					<v-card-title class="headline"> Guitar Exchange </v-card-title>
					<v-card-text>
						<p>
							Gutar Exchange is built using the Nuxt.js framework. It is a web application that
							allows users to rent guitars in the style of AirBnb. You can rent out guitars which
							will then get added to your rental list.
						</p>
						<ul>
							<li><a href="https://guitarxc.drewcook.dev" target="_blank">Demo</a></li>
							<li>
								<a href="https://github.com/drewcook/guitar-exchange" target="_blank">Code</a>
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
		<v-row>
			<v-col>
				<v-card>
					<v-card-title class="headline"> Flick Finder </v-card-title>
					<v-card-text>
						<p>
							FlickFinder is a fullstack web application built using the Next.js framework and using
							a GraphQL Apollo Client for requests. It is an application that allows users to search
							through the MovieDB.com database to search for movies. Users are able to favorite
							movies as well as add them to a watchlist. The application uses JWT for user
							authentication, and it connects to a MongoDB database to store users' watchlists and
							favorited movies.
						</p>
						<ul>
							<li><a href="https://flickfinder.drewcook.dev" target="_blank">Demo</a></li>
							<li><a href="https://github.com/drewcook/flick-finder" target="_blank">Code</a></li>
						</ul>
					</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn color="primary" nuxt to="/work">Check Out My Work</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col>
				<v-card>
					<v-card-title class="headline"> You Got Served </v-card-title>
					<v-card-text>
						<p>
							You Got Served is built using the Next.js framework and using a GraphQL Apollo Client
							for requests. It is an app that mimics a restaurant POS system, with different tables
							and tickets. Each ticket has a list of items to order, and each ticket can get
							assigned to a table. Tickets can be created or destroyed as patrons come and go to
							different tables.
						</p>
						<ul>
							<li><a href="https://yougotserved.drewcook.dev" target="_blank">Demo</a></li>
							<li>
								<a href="https://github.com/drewcook/you-got-served" target="_blank">Code</a>
							</li>
						</ul>
					</v-card-text>
					<v-card-actions>
						<v-spacer />
						<v-btn color="primary" nuxt to="/work">Check Out My Work</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-spacer />
		</v-row>
	</div>
</template>

<script>
	export default {}
</script>
