<script lang="ts">
	export let images: { src: string; type: string }[] = [];
	export let alt: string = '';
	export let fit: string = 'initial';
	export let imgStyle: string = '';
	export let imgClass: string = '';
	export let loading: 'eager' | 'lazy' = 'lazy';
	export let decoding: 'sync' | 'async' | 'auto' = 'async';
	export let responsive: boolean = false;
	export let block: boolean = false;
	export let maxwidth: boolean = false;
	export let width: number = 256;
	export let height: number = 256;

	const image_styles = `${block ? 'display:block' : ''};object-fit:${fit};${
		maxwidth ? 'margin:auto;max-' : ''
	}${responsive ? 'width:100%;height:auto;display:block' : ''};${imgStyle}`;

	const imported_images = images.map(({ src, type }) => ({ src: `img/${src}`, type }));
</script>

<picture>
	{#each imported_images as { src, type }, i (i)}
		<source srcset={src} {type} />
	{/each}
	<img
		class={imgClass}
		src={imported_images[imported_images.length - 1].src}
		{alt}
		{loading}
		{decoding}
		{width}
		{height}
		draggable={false}
		style={image_styles}
	/>
</picture>
