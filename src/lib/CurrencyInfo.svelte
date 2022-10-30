<script>
	import { getImageData } from '../helpers/imgurUrlMapper'

	export let name
	export let symbol
	export let denominations

	const allImageSources = []
	denominations.forEach((denominations) => {
		allImageSources.push(getImageData(`${symbol}-${denominations}-front`))
		allImageSources.push(getImageData(`${symbol}-${denominations}-back`))
	})
</script>

<h2>{name} - {symbol.toUpperCase()}</h2>

{#each allImageSources as image}
	<img src={image.src} alt={image.alt} />
{/each}

<style>
	img {
		margin: 5px 10px;
		max-width: 450px;
		max-height: 450px;
	}
</style>
