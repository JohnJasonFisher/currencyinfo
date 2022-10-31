<script>
	import { Router, Route } from 'svelte-routing'
	import Home from './components/Home.svelte'
	import DocumentHead from './components/DocumentHead.svelte'
	import CurrencyData from './data/currencyData.json'

	export let url = ''
	const defaultCurrency = CurrencyData.currencies.filter(
		(currency) => currency.symbol === 'usd'
	)[0]
</script>

<DocumentHead />
<Router {url}>
	<div>
		<Route path="/"><Home currency={defaultCurrency} /></Route>
		{#each CurrencyData.currencies as currency}
			<Route path={currency.symbol}>
				<Home {currency} />
			</Route>
		{/each}
	</div>
</Router>
