<script>
	export let name = 'United States Dollar'
	export let symbol = 'USD'
	export let banknotes
</script>

<h2>{name} - {symbol}</h2>

{#each banknotes as banknote}
	<div>
		<input type="checkbox" disabled bind:checked={banknote.owned} />
		<img src={banknote.front.imageSrc} alt={banknote.front.altText} />
		<img src={banknote.back.imageSrc} alt={banknote.back.altText} />
	</div>
{/each}

<style>
	p {
		font-size: 1.3rem;
	}
	img {
		margin: 5px 10px;
		max-width: 450px;
		max-height: 450px;
	}
</style>
