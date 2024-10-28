<script lang="ts">
	import type { PageData } from './$types.js';

	export let data: PageData;
	
</script>

<div class="">
	<h1 class="text-xl font-bold mb-4">Detalle de fruta</h1>
	
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Información general</h2>
	  <p><strong>Nombre:</strong> {data.name}</p>
	  <p><strong>ID:</strong> {data.id}</p>
	</div>


	<div>
		<h2 class="text-lg font-semibold mb-2">Variedades</h2>
			{#each data.varieties as variety}
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