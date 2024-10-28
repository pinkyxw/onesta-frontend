<script lang="ts">
  import type { Client } from '$lib/models/client.js';
	import type { PageData } from './$types.js';

	export let data: PageData;
	const client = data as Client;
</script>

<div class="">
	<h1 class="text-xl font-bold mb-4">Detalle de cliente</h1>
	
	<div class="mb-6">
	  <h2 class="text-lg font-semibold mb-2">Información general</h2>
	  <p><strong>ID:</strong> {client.id}</p>
	  <p><strong>Nombre:</strong> {client.name} {client.lastName}</p>
	  <p><strong>Email:</strong> {client.email}</p>
	</div>
</div>


<style>
	p {
		@apply text-gray-500 pl-2;
	}
</style>
