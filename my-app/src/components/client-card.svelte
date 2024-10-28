<script lang='ts'>
    import rightArrow from '../assets/keyboard-arrow-right.svg';
    import { goto } from '$app/navigation';

    export let client; // Recibe los datos de una cosecha individual

    function navigateToClient(clientId: string) {
      goto(`/clients/${clientId}`);
    }
</script>
  
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="card cursor-pointer" on:click={() => navigateToClient(client.id)}>
  <div class="card-body">

      <div class="flex flex-row items-center">
          <div class="w-full">
              <h4 class="font-bold text-md">{client.name} {client.lastName}</h4>
              <h5 class="text-sm text-gray-500">{client.email}</h5>
          </div>
          <button class="flex flex-row items-center gap-2">
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