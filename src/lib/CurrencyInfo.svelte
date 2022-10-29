<script>
	import { getImageData } from '../helpers/imgurUrlMapper'

	export let currencyName = 'United States Dollar'
	export let symbol = 'usd'
	export let currencyDemoninations = ['5', '10', '20', '50', '100']

	const allImageSources = []
	currencyDemoninations.forEach((demonination) => {
		allImageSources.push(getImageData(`${symbol}-${demonination}-front`))
		allImageSources.push(getImageData(`${symbol}-${demonination}-back`))
	})
</script>

<h2>{currencyName} - {symbol.toUpperCase()}</h2>

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
