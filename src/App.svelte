<script>
	import { Router, Route } from 'svelte-routing'
	import Home from './lib/Home.svelte'
	import DocumentHead from './lib/DocumentHead.svelte'

	export let url = ''
</script>

<DocumentHead />
<Router {url}>
	<div>
		<Route path="/"><Home /></Route>
		<Route path="/usd"><Home /></Route>
		<Route path="/cad"><Home currencyDetailSymbol="cad" /></Route>
		<Route path="/mxn"><Home currencyDetailSymbol="mxn" /></Route>
		<Route path="/eur"><Home currencyDetailSymbol="eur" /></Route>
		<Route path="/awg"><Home currencyDetailSymbol="awg" /></Route>
	</div>
</Router>
