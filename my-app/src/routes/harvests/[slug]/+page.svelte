<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	
	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleString();
	}
</script>

<div class="">
	<h1 class="text-xl font-bold mb-4">Detalle de cosecha</h1>
	
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Información general</h2>
	  <p><strong>ID:</strong> {data.id}</p>
	  <p><strong>Fecha de creación:</strong> {formatDate(data.createdAt)}</p>
	</div>
  
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Agricultor</h2>
	  <p><strong>Nombre:</strong> {data.grower.name} {data.grower.lastName}</p>
	  <p><strong>Email:</strong> {data.grower.email}</p>
	  <p><strong>ID:</strong> {data.grower.id}</p>
	</div>
  
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Campo</h2>
	  <p><strong>Nombre:</strong> {data.farm.name}</p>
	  <p><strong>Dirección:</strong> {data.farm.address}</p>
	  <p><strong>ID:</strong> {data.farm.id}</p>
	</div>
  
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Cliente</h2>
	  <p><strong>Nombre:</strong> {data.client.name} {data.client.lastName}</p>
	  <p><strong>Email:</strong> {data.client.email}</p>
	  <p><strong>ID:</strong> {data.client.id}</p>
	</div>
  
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Producto</h2>
	  <p><strong>Nombre:</strong> {data.commodity.name}</p>
	  <p><strong>ID:</strong> {data.commodity.id}</p>
	</div>
  
	<div>
	  <h2 class="text-lg font-semibold mb-2">Variedad</h2>
	  <p><strong>Nombre:</strong> {data.variety.name}</p>
	  <p><strong>ID:</strong> {data.variety.id}</p>
	</div>
  </div>


<style>
	p {
		@apply text-gray-500 pl-2;
	}
</style>