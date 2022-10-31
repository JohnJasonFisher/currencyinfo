<script>
	import { navigate, Route } from 'svelte-routing'
	import CurrencyInfo from './CurrencyInfo.svelte'

	export let currency
	const pages = [
		{ route: 'usd', label: 'USD' },
		{ route: 'cad', label: 'CAD' },
		{ route: 'mxn', label: 'MXN' },
		{ route: 'eur', label: 'EUR' },
		{ route: 'awg', label: 'AWG' },
	]
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
			price={currency.price}
			datePriceChecked={currency.datePriceChecked}
			imageData={currency.imageData}
		/>
	</div>
</main>
