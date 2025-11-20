<!-- src/components/PhotoUpload.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import { fileToBase64, validatePhotoFile } from '../lib/photo.js';

  const dispatch = createEventDispatcher();

  export let photoPreview = '';
  export let photoBase64 = '';

  let fileInput;
  let error = '';

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      validatePhotoFile(file);
      const base64 = await fileToBase64(file);
      photoBase64 = base64;
      photoPreview = URL.createObjectURL(file);
      error = '';
      dispatch('update', { photoBase64 });
    } catch (err) {
      error = err.message;
      photoBase64 = '';
      photoPreview = '';
      dispatch('update', { photoBase64: '' });
    }
  }

  function triggerUpload() { fileInput.click(); }
  function removePhoto() {
    photoBase64 = ''; photoPreview = ''; fileInput.value = ''; error = '';
    dispatch('update', { photoBase64: '' });
  }
</script>

<div class="mb-4">
  <label for="photo-upload" class="form-label">
    Profile Photo (optional, JPG/PNG/WebP, &lt;1MB)
  </label>

  <input
    id="photo-upload"
    type="file"
    bind:this={fileInput}
    on:change={handleFileChange}
    accept="image/jpeg,image/png,image/webp"
    class="d-none"
  >

  <div class="input-group">
    <button type="button" class="btn btn-outline-secondary" on:click={triggerUpload}>
      Choose Photo
    </button>
    {#if photoPreview}
      <button type="button" class="btn btn-outline-danger ms-2" on:click={removePhoto}>
        Remove
      </button>
    {/if}
  </div>

  {#if error}
    <div class="text-danger small mt-2">{error}</div>
  {/if}

{#if photoPreview}
  <div class="mt-3 text-center">
    <img
      src={photoPreview}
      alt=""
      role="presentation"
      class="img-thumbnail"
      style="max-width: 160px; max-height: 160px;"
    >
  </div>
{/if}
</div>