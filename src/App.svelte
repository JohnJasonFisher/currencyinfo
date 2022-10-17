<script>
  import Counter from './lib/Counter.svelte'
  import AppInfo from './lib/AppInfo.svelte'
  import DocumentHead from './lib/DocumentHead.svelte';
</script>

<main>
  <h1>Currency Collection Tracker and Info</h1>

  <div class="card">
    <DocumentHead />
    <Counter />
    <AppInfo />
  </div>
</main>
