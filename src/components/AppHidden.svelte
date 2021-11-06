<script lang="ts">
	import { onMount } from 'svelte';

	export let data: string = '';

	let is_mounted = false;
	let is_revealing = false;
	$: display_data = is_revealing ? data : 'Double click to reveal data.';
	$: span_style = (() => {
		const user_select_value = ['none', 'auto'];
		const cursor_value = ['pointer', 'auto'];
		const formatted = `user-select:${user_select_value[+is_revealing]};cursor:${
			cursor_value[+is_revealing]
		}`;

		return is_mounted ? formatted : `display:none;${formatted}`;
	})();

	const reveal = () => {
		is_revealing = !is_revealing;
	};

	onMount(() => (is_mounted = true));
</script>

<span on:dblclick={reveal} style={`${span_style}`}>
	{display_data}
</span>
<noscript>
	<span>Please enable JavaScript to see the email.</span>
</noscript>
