<script>
	let environmentName = import.meta.env.MODE
	let isProduction = import.meta.env.PROD
	let titleName = isProduction
		? 'Currency Info'
		: `${environmentName} - Currency Info`
</script>

<svelte:head>
	<title>{titleName}</title>
</svelte:head>
