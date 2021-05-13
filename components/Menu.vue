<template>
	<div>
		<nav class="menu">
			<input id="menu-open" type="checkbox" href="#" class="menu-open" name="menu-open" />
			<label class="menu-open-button" for="menu-open">
				<span class="hamburger hamburger-1"></span>
				<span class="hamburger hamburger-2"></span>
				<span class="hamburger hamburger-3"></span>
			</label>

			<nuxt-link to="/about" class="menu-item">
				<v-icon>{{ aboutIcon }}</v-icon>
			</nuxt-link>
			<nuxt-link to="/work" class="menu-item">
				<v-icon>{{ workIcon }}</v-icon>
			</nuxt-link>
			<nuxt-link to="/skills" class="menu-item">
				<v-icon>{{ skillsIcon }}</v-icon>
			</nuxt-link>
			<nuxt-link to="/contact" class="menu-item">
				<v-icon>{{ contactIcon }}</v-icon>
			</nuxt-link>
		</nav>

		<!-- filters -->
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
			<defs>
				<filter id="shadowed-goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
						result="goo"
					/>
					<feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
					<feColorMatrix
						in="shadow"
						mode="matrix"
						values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
						result="shadow"
					/>
					<feOffset in="shadow" dx="1" dy="1" result="shadow" />
					<feComposite in2="shadow" in="goo" result="goo" />
					<feComposite in2="goo" in="SourceGraphic" result="mix" />
				</filter>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
						result="goo"
					/>
					<feComposite in2="goo" in="SourceGraphic" result="mix" />
				</filter>
			</defs>
		</svg>
	</div>
</template>

<script>
	import { mdiAccount, mdiChartBar, mdiCodeTags, mdiEmail } from '@mdi/js'
	export default {
		data() {
			return {
				aboutIcon: mdiAccount,
				workIcon: mdiCodeTags,
				skillsIcon: mdiChartBar,
				contactIcon: mdiEmail,
			}
		},
	}
</script>

<style lang="scss" scoped>
	//vars
	$fg: #00bcd4;
	$bg: #673ab7;
	$pi: 3.14;

	//config
	$menu-items: 4;
	$open-distance: 105px;
	$opening-angle: $pi * 2;

	$hamburger-spacing: 8px;

	%goo {
		filter: url('#shadowed-goo');
		// debug
		//background:rgba(255,0,0,0.2);
	}

	%ball {
		background: $fg;
		border-radius: 100%;
		color: #fff;
		height: 80px;
		line-height: 80px;
		margin-left: -40px;
		position: absolute;
		text-align: center;
		top: 20px;
		transform: translate3d(0, 0, 0);
		transition: transform ease-out 200ms;
		width: 80px;
	}

	.hamburger {
		$width: 25px;
		$height: 3px;

		background: #fff;
		display: block;
		height: $height;
		left: 50%;
		margin-left: -$width/2;
		margin-top: -$height/2;
		position: absolute;
		top: 50%;
		transition: transform 200ms;
		width: $width;
	}

	.hamburger-1 {
		transform: translate3d(0, -$hamburger-spacing, 0);
	}

	.hamburger-2 {
		transform: translate3d(0, 0, 0);
	}

	.hamburger-3 {
		transform: translate3d(0, $hamburger-spacing, 0);
	}

	.menu {
		// $width: 650px;
		// $height: 150px;
		@extend %goo;

		box-sizing: border-box;
		font-size: 20px;
		// height: $height;
		// margin-left: -80px;
		padding-left: 80px;
		padding-top: 20px;
		// position: absolute;
		// left: 0;
		// top: 40px;
		text-align: left;
		// width: $width;
	}

	.menu-open {
		display: none;
	}

	.menu-item {
		@extend %ball;

		&:hover {
			background: #fff;
		}

		&:hover span {
			color: $fg;
		}

		@for $i from 1 through $menu-items {
			&:nth-child(#{$i + 2}) {
				transition-duration: 180ms;
			}
		}
	}

	.menu-open-button {
		@extend %ball;

		cursor: pointer;
		transform: scale(1.1, 1.1) translate3d(0, 0, 0);
		transition-duration: 400ms;
		transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
		z-index: 2;
	}

	.menu-open-button:hover {
		transform: scale(1.2, 1.2) translate3d(0, 0, 0);
	}

	.menu-open:checked + .menu-open-button {
		transform: scale(0.8, 0.8) translate3d(0, 0, 0);
		transition-duration: 200ms;
		transition-timing-function: linear;

		.hamburger-1 {
			transform: translate3d(0, 0, 0) rotate(45deg);
		}

		.hamburger-2 {
			transform: translate3d(0, 0, 0) scale(0.1, 1);
		}

		.hamburger-3 {
			transform: translate3d(0, 0, 0) rotate(-45deg);
		}
	}

	.menu-open:checked ~ .menu-item {
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
		@for $i from 1 through $menu-items {
			&:nth-child(#{$i + 2}) {
				transform: translate3d(110px * $i, 0, 0);
				transition-duration: 90ms + (100ms * $i);
			}
		}
	}
</style>
