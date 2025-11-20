<!-- src/components/QrPreview.svelte -->
<script>
  import { onMount } from 'svelte';

  export let vCardString = '';
  export let errorLevel = 'H';
  export let qr = null;          // ← ADD THIS LINE (two-way bind)

  let createQr, updateQr;

  onMount(async () => {
    ({ createQr, updateQr } = await import('../lib/qr.js'));
    qr = await createQr('qr-canvas', vCardString, errorLevel);
  });

  // React to changes
  $: if (qr && vCardString !== undefined) {
    updateQr(qr, vCardString, errorLevel);
  }

  function handleLevelChange(e) {
    errorLevel = e.target.value;
  }
</script>

<div class="text-center mb-4">
  <h5>QR Code Preview</h5>
  <canvas id="qr-canvas" class="img-fluid border shadow-sm" style="max-width: 320px;"></canvas>

  <div class="mt-3">
    <label for="errorLevel" class="form-label">Error Correction Level</label>
    <select id="errorLevel" class="form-select w-auto mx-auto" bind:value={errorLevel}>
      <option value="L">Low (L)</option>
      <option value="M">Medium (M)</option>
      <option value="Q">Quartile (Q)</option>
      <option value="H" selected>High (H)</option>
    </select>
    <small class="text-muted d-block">Higher = more reliable</small>
  </div>
</div>