<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-white h-16 w-full flex justify-around align-bottom items-center">
	<!-- <a class="w-10 hover:font-bold" href="/">Home</a> -->
	<!-- <a class="w-10 hover:font-bold" href="/add">Add</a> -->
	<a class="w-10 hover:font-bold" href="/clients">Clientes</a>
	<a class="w-10 hover:font-bold" href="/fruits">Frutas</a>
	<a class="w-10 hover:font-bold" href="/growers">Agricultores</a>
	<a class="w-10 hover:font-bold" href="/harvests">Cosechas</a>
</nav>

<div class="p-4">
	{@render children()}
</div>

