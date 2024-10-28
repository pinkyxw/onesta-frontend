<script lang="ts">
  import type { Fruit } from '$lib/models/fruit.js';
	import type { PageData } from './$types.js';

	export let data: PageData;
	const fruit = data as Fruit;
	
</script>

<div class="">
	<h1 class="text-xl font-bold mb-4">Detalle de fruta</h1>
	
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Información general</h2>
	  <p><strong>Nombre:</strong> {fruit.name}</p>
	  <p><strong>ID:</strong> {fruit.id}</p>
	</div>


	<div>
		<h2 class="text-lg font-semibold mb-2">Variedades</h2>
			{#each fruit.varieties as variety}
				<p><strong>Nombre:</strong> {variety.name}</p>
				<p><strong>ID:</strong> {variety.id}</p>
				<br>
			{/each}
		</div>
  	</div>


<style>
	p {
		@apply text-gray-500 pl-2;
	}
</style>