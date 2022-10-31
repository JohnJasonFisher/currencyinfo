<script>
	import { getPrice } from '../helpers/priceHelper'

	export let name = 'United States Dollar'
	export let symbol = 'usd'
	export let price = 1
	export let datePriceChecked = '2021-10-31T14:38:37.673Z'
	export let imageData

	const pricePromise = getPrice(symbol, price, datePriceChecked)
</script>

<h2>{name} - {symbol.toUpperCase()}</h2>

{#await pricePromise}
	<p>...waiting</p>
{:then actualPrice}
	<p>1 usd can buy {actualPrice} {symbol}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

{#each imageData as image}
	<img src={image.src} alt={image.alt} />
{/each}

<style>
	img {
		margin: 5px 10px;
		max-width: 450px;
		max-height: 450px;
	}
</style>
