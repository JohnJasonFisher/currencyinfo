<script>
	import { navigate } from 'svelte-routing'
	import CurrencyInfo from './CurrencyInfo.svelte'
	import CurrencyData from '../data/currencyData.json'

	export let currency
	const pages = CurrencyData.currencies.map((cur) => ({
		symbol: cur.symbol,
	}))

	let defaultButtonColor = '#1a1a1a9a'
	let activeButtonColor = '#3cb65f'
</script>

<main>
	<h1>Currency Collection Tracker and Info</h1>

	<div class="card">
		{#each pages as page}
			<button
				on:click={() => navigate(page.symbol)}
				style="background-color: {page.symbol === currency.symbol
					? activeButtonColor
					: defaultButtonColor}"
			>
				{page.symbol}
			</button>
		{/each}

		<CurrencyInfo
			name={currency.name}
			symbol={currency.symbol}
			banknotes={currency.banknotes}
		/>
	</div>
</main>
