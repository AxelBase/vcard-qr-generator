<!-- src/components/DownloadButtons.svelte -->

<script>
export let vCardString = '';
  export let qr = null;

  async function downloadVcf() {
    const { saveAs } = await import('file-saver');
    const blob = new Blob([vCardString], { type: 'text/vcard;charset=utf-8' });
    saveAs(blob, 'contact.vcf');
  }

async function downloadPng() {
    if (!qr) return;
    const { downloadQrPng } = await import('../lib/qr.js');
    await downloadQrPng(qr, 'contact-qr.png');
  }

  async function copyVCard() {
    try {
      await navigator.clipboard.writeText(vCardString);
      alert('vCard text copied to clipboard!');
    } catch (err) {
      alert('Failed to copy: ' + err.message);
    }
  } 
</script>

<div class="d-flex justify-content-center gap-3 my-4">
  <button class="btn btn-primary" on:click={downloadPng} disabled={!qr || !vCardString}>
    Download QR PNG
  </button>
  <button type="button" class="btn btn-secondary" on:click={downloadVcf} disabled={!vCardString}>Download .vcf</button>
  <button type="button" class="btn btn-outline-secondary" on:click={copyVCard} disabled={!vCardString}>Copy vCard Text</button>
</div>