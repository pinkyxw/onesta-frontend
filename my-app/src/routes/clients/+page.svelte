<script lang="ts">
    import ClientCard from '../../components/client-card.svelte';
    import { onMount } from 'svelte';
    import { getClients } from '$lib/api/clients.js';
    import type { Client } from '$lib/models/client.js';
  
    let clients: Array<Client> = [];
  
    onMount(async () => {
      clients = await getClients();
    });
</script>

<div class="grid gap-4"> 
    <h1 class="text-xl font-bold">Clientes</h1>
    <p class="text-sm ">{clients.length} Clientes</p>
    <div class="grid gap-2">
        {#each clients as client}
            <ClientCard {client} />
        {/each}
    </div>
</div>
