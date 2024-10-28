<script lang="ts">
  import type { Harvest } from '$lib/models/harvest.js';
	import type { PageData } from './$types';

	export let data: PageData;
	const harvest = data as Harvest;
	
	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleString();
	}
</script>

<div class="">
	<h1 class="text-xl font-bold mb-4">Detalle de cosecha</h1>
	
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Información general</h2>
	  <p><strong>ID:</strong> {harvest.id}</p>
	  <p><strong>Fecha de creación:</strong> {formatDate(harvest.createdAt)}</p>
	</div>
  
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Agricultor</h2>
	  <p><strong>Nombre:</strong> {harvest.grower.name} {harvest.grower.lastName}</p>
	  <p><strong>Email:</strong> {harvest.grower.email}</p>
	  <p><strong>ID:</strong> {harvest.grower.id}</p>
	</div>
  
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Campo</h2>
	  <p><strong>Nombre:</strong> {harvest.farm.name}</p>
	  <p><strong>Dirección:</strong> {harvest.farm.address}</p>
	  <p><strong>ID:</strong> {harvest.farm.id}</p>
	</div>
  
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Cliente</h2>
	  <p><strong>Nombre:</strong> {harvest.client.name} {harvest.client.lastName}</p>
	  <p><strong>Email:</strong> {harvest.client.email}</p>
	  <p><strong>ID:</strong> {harvest.client.id}</p>
	</div>
  
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Producto</h2>
	  <p><strong>Nombre:</strong> {harvest.commodity.name}</p>
	  <p><strong>ID:</strong> {harvest.commodity.id}</p>
	</div>
  
	<div>
	  <h2 class="text-lg font-semibold mb-2">Variedad</h2>
	  <p><strong>Nombre:</strong> {harvest.variety.name}</p>
	  <p><strong>ID:</strong> {harvest.variety.id}</p>
	</div>
  </div>


<style>
	p {
		@apply text-gray-500 pl-2;
	}
</style>