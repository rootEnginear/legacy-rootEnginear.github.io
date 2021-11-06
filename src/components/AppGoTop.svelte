<script lang="ts">
	export const prerender = false;

	import { onMount } from 'svelte';
	import { cubicOut, quadIn } from 'svelte/easing';

	let scroll_top_enabled = false;
	let goTopHandler = null;
	let useGoTop;
	let goTop;

	const debounce = (func: Function, wait: number, immediate = false) => {
		var timeout;
		return function () {
			var context = this,
				args = arguments;
			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	const updateGoTopButton = () => {
		if (~~document.documentElement.scrollTop >= 64)
			!scroll_top_enabled && (scroll_top_enabled = true);
		else scroll_top_enabled && (scroll_top_enabled = false);
	};

	onMount(() => {
		useGoTop = () => {
			window.requestAnimationFrame(updateGoTopButton);
		};

		goTop = () => {
			window.scrollTo(0, 0);
		};

		goTopHandler = debounce(() => {
			useGoTop();
		}, 100);

		document.addEventListener('scroll', goTopHandler);
		window.addEventListener('resize', goTopHandler);
		window.addEventListener('orientationchange', goTopHandler);

		return () => {
			document.removeEventListener('scroll', goTopHandler);
			window.removeEventListener('resize', goTopHandler);
			window.removeEventListener('orientationchange', goTopHandler);
		};
	});

	function goTopTransition(node, { delay = 0, duration = 400, easing = cubicOut }) {
		return {
			delay,
			duration,
			easing,
			css: (t) => `opacity: ${t}; transform: translateY(${(1 - t) * 72}px);`
		};
	}
</script>

{#if scroll_top_enabled}
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-missing-content -->
	<a
		class="gotop-button no-print"
		in:goTopTransition={{ duration: 250, easing: cubicOut }}
		out:goTopTransition={{ duration: 200, easing: quadIn }}
		on:click={goTop}
		data-placeholder="Go to top"
	/>
{/if}

<style lang="scss">
	@import '../styles/_variables';

	.gotop-button {
		box-sizing: border-box;
		position: fixed;
		right: 6%;
		bottom: 32px;
		width: 40px;
		height: 40px;

		background: #fffc;
		border: 0.05rem solid $primary-color;
		border-radius: 0.1rem;
		cursor: pointer;
		user-select: none;
		display: flex;
		align-items: center;
		justify-content: center;
		will-change: transform, opacity;

		&::after {
			width: 10px;
			transform: rotate(45deg);
			transform-origin: center center;
			height: 10px;
			display: inline-block;
			content: '';
			border-top: 3px solid $primary-color;
			border-left: 3px solid $primary-color;
			position: relative;
			top: 3.5px;
		}

		&:hover {
			background: $primary-color;

			&::after {
				border-color: #fff;
			}
		}

		@media (max-width: 480px) {
			left: 0;
			right: 0;
			bottom: 0;
			width: auto;
			border: 0;
			background: #000c;
			color: #fff;
			text-decoration: none;
			border-radius: 0;

			&::before {
				content: attr(data-placeholder);
				margin-right: 0.5rem;
				white-space: nowrap;
				display: block;
			}

			&::after {
				border-color: #fff;
			}
		}
	}
</style>
