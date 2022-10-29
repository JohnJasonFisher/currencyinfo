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
		<button on:click={() => setCurrencyDetailSymbol('cad')}>CAD</button>
		<button on:click={() => setCurrencyDetailSymbol('awg')}>AWG</button>
		<button on:click={() => setCurrencyDetailSymbol('mxn')}>MXN</button>

		{#if currencyDetailSymbol === 'usd'}
			<CurrencyInfo
				currencyDemoninations={['1', '2', '10', '20', '50', '100']}
			/>
		{/if}

		{#if currencyDetailSymbol === 'cad'}
			<CurrencyInfo currencyName={'Canadian Dollar'} symbol={'cad'} />
		{/if}

		{#if currencyDetailSymbol === 'awg'}
			<CurrencyInfo
				currencyName={'Aruban Florin'}
				symbol={'awg'}
				currencyDemoninations={['10', '25', '50', '100', '200']}
			/>
		{/if}

		{#if currencyDetailSymbol === 'mxn'}
			<CurrencyInfo
				currencyName={'Mexican Peso'}
				symbol={'mxn'}
				currencyDemoninations={['20', '50', '100', '200', '500']}
			/>
		{/if}
	</div>
</main>
