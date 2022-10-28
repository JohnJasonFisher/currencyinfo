<script>
	import CurrencyInfo from './lib/CurrencyInfo.svelte'
	import DocumentHead from './lib/DocumentHead.svelte'

	let showCurrencyInfo = 'usd'
	let handleShowUsd = () => showCurrencyInfo = 'usd'
	let handleShowAwg = () => showCurrencyInfo = 'awg'
</script>

<main>
	<h1>Currency Collection Tracker and Info</h1>

	<div class="card">
		<DocumentHead />
		<button on:click={handleShowUsd}>USD</button>
		<button on:click={handleShowAwg}>AWG</button>

		{#if showCurrencyInfo === 'usd'}
			<CurrencyInfo currencyDemoninations={['one']} />
		{/if}

		{#if showCurrencyInfo === 'awg'}
			<CurrencyInfo
				currencyName={'Aruban Florin'}
				symbol={'awg'}
				currencyDemoninations={['five']}
			/>
		{/if}
	</div>
</main>
