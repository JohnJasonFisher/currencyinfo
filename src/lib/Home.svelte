<script>
	import { navigate } from 'svelte-routing'
	import CurrencyInfo from './CurrencyInfo.svelte'

	export let currencyDetailSymbol = 'usd'
</script>

<main>
	<h1>Currency Collection Tracker and Info</h1>

	<div class="card">
		<button on:click={() => navigate('usd')}>USD</button>
		<button on:click={() => navigate('cad')}>CAD</button>
		<button on:click={() => navigate('mxn')}>MXN</button>
		<button on:click={() => navigate('eur')}>EUR</button>
		<button on:click={() => navigate('awg')}>AWG</button>

		{#if currencyDetailSymbol === 'usd'}
			<CurrencyInfo
				currencyDemoninations={['1', '2', '10', '20', '50', '100']}
			/>
		{/if}

		{#if currencyDetailSymbol === 'cad'}
			<CurrencyInfo currencyName={'Canadian Dollar'} symbol={'cad'} />
		{/if}

		{#if currencyDetailSymbol === 'mxn'}
			<CurrencyInfo
				currencyName={'Mexican Peso'}
				symbol={'mxn'}
				currencyDemoninations={['20', '50', '100', '200', '500']}
			/>
		{/if}

		{#if currencyDetailSymbol === 'eur'}
			<CurrencyInfo
				currencyName={'European Euro'}
				symbol={'eur'}
				currencyDemoninations={['10', '20', '50', '100', '200']}
			/>
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
