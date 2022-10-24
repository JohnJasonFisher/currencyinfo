<script>
  import CurrencyInfo from './lib/CurrencyInfo.svelte';
  import DocumentHead from './lib/DocumentHead.svelte';
</script>

<main>
  <h1>Currency Collection Tracker and Info</h1>

  <div class="card">
    <DocumentHead />
    <button>USD</button>
    <button>AWG</button>
    <CurrencyInfo currencyDemoninations={['one']}/>
    <CurrencyInfo currencyName={'Aruban Florin'} symbol={'awg'} fileType={'jpeg'} currencyDemoninations={['five']} />
  </div>
</main>
