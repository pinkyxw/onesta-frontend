<script lang="ts">
    import HarvestCard from '../../components/harvest-card.svelte';
    import { onMount } from 'svelte';
    import { getHarvests } from '$lib/api/harvest.js';
    import type { Harvest } from '$lib/models/harvest.js';
  
    let harvests: Array<Harvest> = [];
  
    onMount(async () => {
      harvests = await getHarvests();
    });
</script>

<div class="grid gap-4"> 
    <h1 class="text-xl font-bold">Cosechas</h1>
    <p class="text-sm ">{harvests.length} Cosechas</p>
    <div class="grid gap-2">
        {#each harvests as harvest}
            <HarvestCard {harvest} />
        {/each}
    </div>
</div>
