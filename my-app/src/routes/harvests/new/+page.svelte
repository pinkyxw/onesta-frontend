<script lang="ts">
    import { getGrowers } from '$lib/api/growers.js';
    import { getFruits } from '$lib/api/fruits.js';
    import { getClients } from '$lib/api/clients.js';
    import { createHarvest } from '$lib/api/harvest.js';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import type { Farm, Grower } from '$lib/models/grower.js';
    import type { Fruit, Variety } from '$lib/models/fruit.js';
    import type { Client } from '$lib/models/client.js';


    let growers: Array<Grower> = [];
    let farms: Array<Farm> = [];
    let fruits: Array<Fruit> = [];
    let varieties: Array<Variety> = [];
    let clients: Array<Client> = [];

    let selectedGrowerId: string = '';
    let selectedFarmId: string = '';
    let selectedFruitId: string = '';
    let selectedVarietyId: string = '';
    let selectedClientId: string = '';

    let creating = false;

    onMount(async () => {
        growers = await getGrowers();
        fruits = await getFruits();
        clients = await getClients();
    });

    function getSelectedGrower() {
        const selected = growers.find(grower => grower.id === selectedGrowerId);
        return selected || { farms: [] };
    }

    function getSelectedFruit() {
        const selected = fruits.find(fruit => fruit.id === selectedFruitId);
        return selected || { varieties: [] };
    }

    function canCreate() {
        return selectedGrowerId &&
            selectedFarmId &&
            selectedVarietyId &&
            selectedClientId &&
            selectedFruitId;
    }

	async function create() {
        creating = true;
        try {
            const newHarvest = await createHarvest(
                selectedGrowerId,
                selectedFarmId,
                selectedVarietyId,
                selectedClientId,
                selectedFruitId, // comodity
            );
            goto(`/harvests/${newHarvest.id}`);
        } catch (error) {
            goto('/harvests');
        }
	}
</script>

<div class="grid gap-4">
    <!-- Grower & Farm -->
    <div class="input-select-container">
        <label for="grower">Agricultor:</label>
        <select bind:value={selectedGrowerId} id="grower" name="grower">
            <option value="" disabled selected hidden>Selecciona un agricultor</option>
            {#each growers as grower}
                <option value="{grower.id}"> {grower.name} </option>
            {/each}
        </select>
    </div>

    {#if selectedGrowerId}
        <div class="input-select-container">
            <label for="farm">Campo:</label>
            <select bind:value={selectedFarmId} id="farm" name="farm">
                <option value="" disabled selected hidden>Selecciona un campo</option>
                {#each getSelectedGrower().farms as farm}
                    <option value="{farm.id}"> {farm.name} </option>
                {/each}
            </select>
        </div>
    {/if}

    <!-- Fruit & Variety -->
    <div class="input-select-container">
        <label for="fruit">Fruta:</label>
        <select bind:value={selectedFruitId} id="fruit" name="fruit">
            <option value="" disabled selected hidden>Selecciona una fruta</option>
            {#each fruits as fruit}
                <option value="{fruit.id}"> {fruit.name} </option>
            {/each}
        </select>
    </div>

    {#if selectedFruitId}
        <div class="input-select-container">
            <label for="variety">Variedad:</label>
            <select bind:value={selectedVarietyId} id="variety" name="variety">
                <option value="" disabled selected hidden>Selecciona un campo</option>
                {#each getSelectedFruit().varieties as variety}
                    <option value="{variety.id}"> {variety.name} </option>
                {/each}
            </select>
        </div>
    {/if}

    <!-- Client -->
    <div class="input-select-container">
        <label for="client">Cliente:</label>
        <select bind:value={selectedClientId} id="client" name="client">
            <option value="" disabled selected hidden>Selecciona un cliente</option>
            {#each clients as client}
                <option value="{client.id}"> {client.name} </option>
            {/each}
        </select>
    </div>

</div>

<button on:click={create} disabled='{!canCreate()}' class="{creating ? 'animate-pulse' : 'animate-none'}">
    {#if creating}
        Creando cosecha...
    {:else}
        Crear Cosecha
    {/if}
</button>

<style>
    .input-select-container {
        @apply flex flex-col items-start gap-2;
    }
    label {
        @apply text-gray-800;
    }
    select {
      @apply form-select rounded-lg border border-slate-300 border-solid pr-4 py-2 text-gray-500 w-full;
    }
    button {
        @apply py-2 px-4 w-full bg-blue-800 text-white rounded-full text-base font-semibold hover:bg-blue-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex flex-row items-center justify-center mt-8;
    }
  </style>