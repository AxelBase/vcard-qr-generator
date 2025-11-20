<!-- src/components/ResetButton.svelte -->

<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function reset() {
    dispatch('reset');
  }
</script>

<button type="button" class="btn btn-outline-danger" on:click={reset}>Reset Form</button>