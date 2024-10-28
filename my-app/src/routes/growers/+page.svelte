<script lang="ts">
    import GrowerCard from '../../components/grower-card.svelte';
    import { onMount } from 'svelte';
    import { getGrowers } from '$lib/api/growers.js';
  import type { Grower } from '$lib/models/grower.js';
  
    let growers: Array<Grower> = [];
  
    onMount(async () => {
      growers = await getGrowers();
    });
</script>

<div class="grid gap-4"> 
    <h1 class="text-xl font-bold">Agricultores</h1>
    <p class="text-sm ">{growers.length} Agricultores</p>
    <div class="grid gap-2">
        {#each growers as grower}
            <GrowerCard {grower} />
        {/each}
    </div>
</div>
