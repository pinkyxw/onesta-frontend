<script lang='ts'>
    import plus from '../../assets/plus.svg';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    function navigateToNew() {
      goto(`/harvests/new`);
    }
</script>
  

{#if $page.url.pathname === '/harvests'}
    <div class="container p-4">
        <div class="slot-container">
            <slot></slot>
        </div>
        <div class="button-container">
            <button on:click={() => navigateToNew()} class="flex flex-row items-center justify-center">
                <img src={plus} alt="My icon" class="h-3 w-3 mr-2">
                Crear Cosecha
            </button> 
        </div>
    </div>
{:else}
    <slot></slot>
{/if}

<style>
    .container {
        @apply flex flex-col;
    }
    .slot-container {
        @apply overflow-y-scroll;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
        height: calc(100vh - 168px);
    }

    .slot-container::-webkit-scrollbar {
        display: none; /* Chrome, Safari, and Edge */
    }
    .button-container {
        @apply flex pt-5 px-4;

        button {
            @apply py-2 px-4 w-full bg-blue-800 text-white rounded-full text-base font-semibold hover:bg-blue-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50;
        }
    }
  </style>