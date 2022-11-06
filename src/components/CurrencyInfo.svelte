<script>
	import { getPrice } from '../helpers/priceHelper'

	export let name = 'United States Dollar'
	export let symbol = 'usd'
	export let imageData

	const pricePromise = getPrice(symbol)
</script>

<h2>{name} - {symbol.toUpperCase()}</h2>

{#await pricePromise}
	<p>...waiting</p>
{:then actualPrice}
	<p>1 usd can buy {actualPrice} {symbol}</p>
{:catch error}
	<p style="color: red">Failed to fetch price data.</p>
{/await}

{#each imageData as image}
	<img src={image.src} alt={image.alt} />
{/each}

<style>
	p {
		font-size: 1.3rem;
	}
	img {
		margin: 5px 10px;
		max-width: 450px;
		max-height: 450px;
	}
</style>
