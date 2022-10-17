<script>
  import Counter from './lib/Counter.svelte'
  import DocumentHead from './lib/DocumentHead.svelte';
</script>

<main>
  <h1>Currency Collection Tracker and Info</h1>

  <div class="card">
    <DocumentHead />
    <Counter />
    <img src="src/assets/currency-images/usd/one-usd-front.png" alt="One United States Dollar Front">
    <img src="src/assets/currency-images/usd/one-usd-back.png" alt="One United States Dollar Back">
  </div>
</main>
