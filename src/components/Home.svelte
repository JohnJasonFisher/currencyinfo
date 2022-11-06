<script>
	import { navigate, Route } from 'svelte-routing'
	import CurrencyInfo from './CurrencyInfo.svelte'
	import CurrencyData from '../data/currencyData.json'

	export let currency
	const pages = CurrencyData.currencies
		.filter((cur) => cur.symbol !== currency.symbol)
		.map((cur) => ({
			route: cur.symbol,
			label: cur.symbol.toUpperCase(),
		}))
</script>

<main>
	<h1>Currency Collection Tracker and Info</h1>

	<div class="card">
		{#each pages as page}
			<button on:click={() => navigate(page.route)}>{page.label}</button>
		{/each}

		<CurrencyInfo
			name={currency.name}
			symbol={currency.symbol}
			imageData={currency.imageData}
		/>
	</div>
</main>
