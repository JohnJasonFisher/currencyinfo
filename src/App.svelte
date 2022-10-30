<script>
	import { Router, Route } from 'svelte-routing'
	import Home from './lib/Home.svelte'
	import DocumentHead from './lib/DocumentHead.svelte'
	import CurrencyData from './data/currencyData.json'

	export let url = ''
</script>

<DocumentHead />
<Router {url}>
	<div>
		<Route path="/"><Home /></Route>
		{#each CurrencyData.currencies as currency}
			<Route path={currency.symbol}>
				<Home currencyDetailSymbol={currency.symbol} />
			</Route>
		{/each}
	</div>
</Router>
