<script>
    export let harvest; // Recibe los datos de una cosecha individual
  </script>
  
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Cosecha de {harvest.fruit.name}</h5>
      <p class="card-text">Fecha: {harvest.date}</p>
      <p class="card-text">Cantidad: {harvest.quantity}</p>
      <p class="card-text">Campo: {harvest.field.name}</p>
      <div class="card-actions">
        <button>Editar</button>
        <button>Eliminar</button>
      </div>
    </div>
  </div>
  
  <style>
    /* Estilos con Tailwind CSS */
    .card {
      @apply border-2 border-gray-200 rounded-lg shadow-sm;
    }
    .card-body {
      @apply p-4;
    }
    .card-title {
      @apply font-bold text-lg;
    }
  </style>