<template>
	<div class="experienece-timeline">
		<div class="dc-timeline">
			<ul>
				<li>
					<div class="content">
						<h3>Webmastering</h3>
						<h5>Education</h5>
						<p>
							I am introduced to basic HTML, CSS, and JavaScript for building webpages as part of a
							senior year class in high school. The good ole days.
						</p>
					</div>
					<div class="time">
						<h4>Aug 2007</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>The Books</h3>
						<h5>Education</h5>
						<p>
							I enroll at LSU to study landscape architecture and communications. I learn Autocad,
							Illustrator and In Design for digital layouts and 3D modelling. Oh the beer.
						</p>
					</div>
					<div class="time">
						<h4>2008 - 2011</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>Seedpaths</h3>
						<h5>Full Time</h5>
						<p>
							I attend an 8-week intensive bootcamp from a Denver startup and learn fundamental OOP
							using .NET MVC 4, SQL, lambdas, console applications, and jQuery. Write less, do more.
						</p>
					</div>
					<div class="time">
						<h4>Sep 2014</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>Access Now</h3>
						<h5>Full Time</h5>
						<p>
							I learn Wordpress and Photoshop to design and build websites for a digital marketing
							agency in Englewood, CO.
						</p>
					</div>
					<div class="time">
						<h4>Dec 2014 - Feb 2015</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>Crawford &amp; O'Brien</h3>
						<h5>Full Time</h5>
						<p>
							I lead the technical develepment and maintenance for Wordpress websites for a digital
							marketing agency within a small team of developers.
						</p>
					</div>
					<div class="time">
						<h4>Sep 2015 - Apr 2017</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>I start a company.</h3>
						<h5>Part Time</h5>
						<p>
							I register and form Althea Web Services, LLC for the purpose of doing freelance and
							contract work as an operating business. I also publish any personal products under
							this name.
						</p>
					</div>
					<div class="time">
						<h4>Aug 2016</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>Evolver Inc.</h3>
						<h5>Full Time</h5>
						<p>
							I switch back into .NET development on an enterprise level, and incorporate React and
							ES6 onto client applications while also providing full-stack support with C#, MongoDB,
							and SQL.
						</p>
					</div>
					<div class="time">
						<h4>Apr 2017 - Aug 2018</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>Architect of the Capitol</h3>
						<h5>Contract</h5>
						<p>
							I provide full stack .NET and React support on federal projects for both the
							organization and their clients. I owned all client-side code as we were a small team,
							rewriting enterprise .NET MVC apps into WebAPIs with React and ES6. No more jQuery.
						</p>
					</div>
					<div class="time">
						<h4>Apr 2017 - Jul 2019</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>Gloo</h3>
						<h5>Full Time</h5>
						<p>
							I work in the frontend capacity within a medium size engineering department for a tech
							startup, working with Next.js, React, and Apollo's GraphQL for a series of platform
							products. I also wrote and owned large parts of the accounts, sign on, and onboarding
							flows that thousands of users experience.
						</p>
					</div>
					<div class="time">
						<h4>June 2019 - Sep 2020</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3>Architect of the Capitol</h3>
						<h5>Contract</h5>
						<p>
							I work with a new team to rewrite the existing app I worked on in 2018 to migrate from
							.NET MVC 4 to .NET Core 3. I also take the opportunity to clean up my code and rewrite
							all the class-based components into function components with hooks, and migrate from
							Jest and Enzyme to React Testing Library. I wrote over 300 tests, so many tests.
						</p>
					</div>
					<div class="time">
						<h4>Sep 2020 - May 2021</h4>
					</div>
				</li>
				<li>
					<div class="content">
						<h3 class="redd">Now We're Here</h3>
						<h5>Be In The Now</h5>
						<p>
							If you made it this far, congrats. You know more about me than I probably do of you.
							But feel free to reach out to me if you'd like to connect!
						</p>
						<v-btn color="accent" nuxt to="contact">Contact Me</v-btn>
					</div>
					<div class="time redd">
						<h4>Present</h4>
					</div>
				</li>
				<div class="clear" />
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.experience-timeline {
		margin: 15px auto;
	}

	.clear {
		clear: both;
	}

	.redd {
		color: $dc-red;
	}

	.time.redd {
		background: $dc-red !important;
		box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.3) !important;
	}
</style>
