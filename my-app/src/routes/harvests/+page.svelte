<script>
    // import { getHarvests } from '../lib/api';
    import HarvestCard from '../../components/harvest-card.svelte';
  
    let harvests = [
        {
            "id": 1,
            "date": "2023-10-17",
            "quantity": 120,
            "field": {
            "id": 1,
            "name": "Campo Principal"
            },
            "fruit": {
            "id": 1,
            "name": "Manzana"
            }
        },
        {
            "id": 2,
            "date": "2023-11-05",
            "quantity": 85,
            "field": {
            "id": 2,
            "name": "Campo Secundario"
            },
            "fruit": {
            "id": 2,
            "name": "Pera"
            }
        },
        {
            "id": 3,
            "date": "2023-12-12",
            "quantity": 150,
            "field": {
            "id": 1,
            "name": "Campo Principal"
            },
            "fruit": {
            "id": 3,
            "name": "Uva"
            }
        }
    ];
  
    // $: {
    //   getHarvests().then(data => {
    //     harvests = data;
    //   });
    // }
</script>
  
<h1 class="text-xl font-bold">Cosechas</h1>
<div class="grid gap-4">
    {#each harvests as harvest}
        <HarvestCard {harvest} />
    {/each}
</div>
