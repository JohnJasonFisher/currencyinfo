<script>
	export let name
	export let symbol
	export let imageData
</script>

<h2>{name} - {symbol.toUpperCase()}</h2>

{#each imageData as image}
	<img src={image.src} alt={image.alt} />
{/each}

<style>
	img {
		margin: 5px 10px;
		max-width: 450px;
		max-height: 450px;
	}
</style>
