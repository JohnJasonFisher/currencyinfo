<script>
	import CurrencyInfo from './lib/CurrencyInfo.svelte'
	import DocumentHead from './lib/DocumentHead.svelte'

	let currencyDetailSymbol = 'usd'
	let setCurrencyDetailSymbol = (currencySymbol) =>
		(currencyDetailSymbol = currencySymbol)
</script>

<main>
	<h1>Currency Collection Tracker and Info</h1>

	<div class="card">
		<DocumentHead />
		<button on:click={() => setCurrencyDetailSymbol('usd')}>USD</button>
		<button on:click={() => setCurrencyDetailSymbol('awg')}>AWG</button>

		{#if currencyDetailSymbol === 'usd'}
			<CurrencyInfo currencyDemoninations={['1']} />
		{/if}

		{#if currencyDetailSymbol === 'awg'}
			<CurrencyInfo
				currencyName={'Aruban Florin'}
				symbol={'awg'}
				currencyDemoninations={['10', '25', '50', '100', '200']}
			/>
		{/if}
	</div>
</main>
