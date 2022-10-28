<script>
	export let currencyName = 'United States Dollar'
	export let symbol = 'usd'
	export let currencyDemoninations = [
		'five',
		'ten',
		'twenty',
		'fifty',
		'hundred',
	]

	function getImageData(key) {
		if (key === 'usd-one-front')
			return { demonination: 'usd', src: 'https://imgur.com/yon8YJ2.png' }
		if (key === 'usd-one-back')
			return { demonination: 'usd', src: 'https://imgur.com/OVJIhcc.png' }
		if (key === 'awg-five-front')
			return { demonination: 'usd', src: 'https://imgur.com/m2nZkWK.png' }
		if (key === 'awg-five-back')
			return { demonination: 'usd', src: 'https://imgur.com/VNhuxIC.png' }
		return null
	}

	const frontImageSources = currencyDemoninations.map((demonination) => {
		return getImageData(`${symbol}-${demonination}-front`)
	})

	const backImageSources = currencyDemoninations.map((demonination) => {
		return getImageData(`${symbol}-${demonination}-back`)
	})
</script>

<h2>{currencyName} - {symbol.toUpperCase()}</h2>

{#each frontImageSources as image}
	<img src={image.src} alt="{symbol} {image.demonination} Front" />
{/each}

{#each backImageSources as image}
	<img src={image.src} alt="{symbol} {image.demonination} Back" />
{/each}

<style>
	img {
		max-width: 450px;
		max-height: 450px;
	}
</style>
