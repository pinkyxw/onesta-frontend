<script lang="ts">
	import type { PageData } from './$types.js';

	export let data: PageData;
	
</script>

<div class="">
	<h1 class="text-xl font-bold mb-4">Detalle de agricultor</h1>
	
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Información general</h2>
	  <p><strong>Nombre:</strong> {data.name} {data.lastName}</p>
	  <p><strong>Email:</strong> {data.email}</p>
	  <p><strong>ID:</strong> {data.id}</p>
	</div>


	<div>
		<h2 class="text-lg font-semibold mb-2">Campos</h2>
			{#each data.farms as farm}
				<p><strong>Nombre:</strong> {farm.name}</p>
				<p><strong>Dirección:</strong> {farm.address}</p>
				<p><strong>ID:</strong> {farm.id}</p>
				<br>
			{/each}
		</div>
  	</div>


<style>
	p {
		@apply text-gray-500 pl-2;
	}
</style>