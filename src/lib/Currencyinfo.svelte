<script>
  export let currencyName = 'United States Dollar';
	export let symbol = 'usd'
	export let fileType = 'png'
	export let currencyDemonination = 'one'
</script>


<h2>{currencyName} - {symbol.toUpperCase()}</h2>

<img src="src/assets/currency-images/{symbol}/{currencyDemonination}-{symbol}-front.{fileType}" alt="{currencyDemonination} {currencyName} Front">
<img src="src/assets/currency-images/{symbol}/{currencyDemonination}-{symbol}-back.{fileType}" alt="{currencyDemonination} {currencyName} Back">

<style>

	img {
		max-width:450px;
		max-height:450px;
	}
  
</style>