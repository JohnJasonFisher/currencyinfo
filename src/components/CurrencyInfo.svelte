<script>
	import { getPrice } from '../helpers/priceHelper'

	export let name = 'United States Dollar'
	export let symbol = 'usd'
	export let banknotes

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

{#each banknotes as banknote}
	<div>
		<input type="checkbox" disabled bind:checked={banknote.owned} />
		<img src={banknote.front.imageSrc} alt={banknote.front.altText} />
		<img src={banknote.back.imageSrc} alt={banknote.back.altText} />
	</div>
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
