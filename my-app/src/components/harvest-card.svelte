<script lang='ts'>
    import rightArrow from '../assets/keyboard-arrow-right.svg';
    import { goto } from '$app/navigation';

    export let harvest; // Recibe los datos de una cosecha individual

    function navigateToHarvest(harvestId: string) {
      goto(`/harvests/${harvestId}`);
    }
</script>
  
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="card cursor-pointer" on:click={() => navigateToHarvest(harvest.id)}>
  <div class="card-body">

      <div class="flex flex-row items-center">
          <div class="w-full">
              <h4 class="font-bold text-md">{harvest.grower.name}</h4>
              <h5 class="text-sm text-gray-500">{harvest.id}</h5>
          </div>
          <button class="flex flex-row items-center gap-2">
              <div class="h-fit text-sm w-fit px-3 py-0.5 font-thin bg-blue-200 rounded-lg border border-blue-400 border-solid">
                  Iniciado
              </div>
              <img src={rightArrow} alt="My icon" class="h-3 w-3 mr-2">
          </button>
      </div>
  </div>
</div>
  
  <style>
    .card {
      @apply rounded-lg drop-shadow-md bg-white;
    }
    .card-body {
      @apply p-4;
    }
  </style>