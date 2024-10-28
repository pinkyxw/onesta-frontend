<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<nav class="bg-white h-16 w-full flex justify-around align-bottom items-center">
	<a class="w-10 hover:font-bold" href="/clients">Clientes</a>
	<a class="w-10 hover:font-bold" href="/fruits">Frutas</a>
	<a class="w-10 hover:font-bold" href="/growers">Agricultores</a>
	<a class="w-10 hover:font-bold" href="/harvests">Cosechas</a>
</nav>


{#if $page.url.pathname === '/harvests'}
	<div>
		{@render children()}
	</div>
{:else}
	<div class="m-4">
		{@render children()}
	</div>
{/if}