<script lang="ts">
    import FruitCard from '../../components/fruit-card.svelte';
    import { onMount } from 'svelte';
    import { getFruits } from '$lib/api/fruits.js';
  import type { Fruit } from '$lib/models/fruit.js';
  
    let fruits: Array<Fruit> = [];
  
    onMount(async () => {
      fruits = await getFruits();
    });
</script>

<div class="grid gap-4"> 
    <h1 class="text-xl font-bold">Frutas</h1>
    <p class="text-sm ">{fruits.length} Frutas</p>
    <div class="grid gap-2">
        {#each fruits as fruit}
            <FruitCard {fruit} />
        {/each}
    </div>
</div>
