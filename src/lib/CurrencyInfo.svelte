<script>
    export let currencyName = 'United States Dollar';
      export let symbol = 'usd'
      export let fileType = 'png'
      export let currencyDemoninations = ['five', 'ten', 'twenty', 'fifty', 'hundred']
  </script>
  
  
  <h2>{currencyName} - {symbol.toUpperCase()}</h2>
  
  {#each currencyDemoninations as demonination}
      <img src="src/assets/currency-images/{symbol}/{demonination}-{symbol}-front.{fileType}" alt="{demonination} {currencyName} Front">
      <img src="src/assets/currency-images/{symbol}/{demonination}-{symbol}-back.{fileType}" alt="{demonination} {currencyName} Back">
  {/each}
  
  <style>
      img {
          max-width:450px;
          max-height:450px;
      }
  </style>
