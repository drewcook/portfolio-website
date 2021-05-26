<template>
	<div class="experienece-timeline">
		<div class="dc-timeline">
			<ul>
				<li v-for="item in experience" :key="item.title">
					<div data-aos="fade-up" data-aos-delay="300">
						<div class="time">
							<h4>{{ item.timeframe }}</h4>
						</div>
						<div class="content">
							<h3>{{ item.title }}</h3>
							<h5>{{ item.category }}</h5>
							<p>{{ item.description }}</p>
						</div>
					</div>
				</li>
				<div class="clear" />
			</ul>
		</div>
	</div>
</template>

<script>
	import experience from 'assets/js/experience'

	export default {
		data() {
			return {
				experience,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.experience-timeline {
		margin: 15px auto;
	}

	.clear {
		clear: both;
	}
</style>
