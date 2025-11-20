<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | vCard QR Generator</title>
  <meta name="description" content="Terms of use for the free, open-source, privacy-first vCard QR Generator. No warranties, no liability, fully permissive license." />
  <meta property="og:title" content="Terms & Conditions | vCard QR Generator" />
  <meta property="og:description" content="Free to use, modify, and distribute. Provided as-is with no warranties." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Last Updated: November 20, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>vCard QR Generator</strong> (the “Tool”), you agree to these Terms & Conditions. If you do not agree, please do not use the Tool.</p>

    <h2>2. Nature of the Tool</h2>
    <p>This is a <strong>free, open-source</strong>, client-side web application. All QR code and vCard generation occurs in your browser. No data is sent to any server.</p>

    <h2>3. License to Use</h2>
    <p>You are granted a <strong>worldwide, royalty-free, perpetual, non-exclusive license</strong> to use the Tool for personal or commercial purposes, including generating unlimited QR codes.</p>

    <h2>4. No Warranty</h2>
    <p>The Tool is provided <strong>“as is”</strong> and <strong>“as available”</strong> without warranties of any kind, express or implied, including but not limited to:</p>
    <ul>
      <li>Accuracy or completeness of generated vCards</li>
      <li>Compatibility with all devices or QR scanners</li>
      <li>Non-infringement of third-party rights</li>
    </ul>
    <p>We make no guarantee that the Tool will be error-free or uninterrupted.</p>

    <h2>5. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, the developers, contributors, and hosting providers shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:</p>
    <ul>
      <li>Use or inability to use the Tool</li>
      <li>Errors in generated QR codes or vCards</li>
      <li>Loss of data or privacy on your device</li>
    </ul>

    <h2>6. Open Source</h2>
    <p>The source code is publicly available on GitHub under the <strong>MIT License</strong>. You are free to fork, modify, and redistribute it.</p>

    <h2>7. Modifications to the Tool</h2>
    <p>We may update the Tool at any time without notice. Features may be added, removed, or changed.</p>

    <h2>8. Governing Law</h2>
    <p>These terms shall be governed by the laws of the Republic of Cyprus, without regard to conflict of law principles.</p>

    <h2>9. Contact</h2>
    <p>For questions about these terms, open an issue on the GitHub repository.</p>

    <p class="italic-note">
      <strong>Simple tools deserve simple terms.</strong><br>
      Use freely. Share widely. No strings attached.
    </p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 5rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose h1 { font-size: 2.8rem; margin-bottom: .5rem 0; color: var(--accent-secondary); }
  .prose h2 { margin-top: 2.8rem; color: var(--accent-primary); border-bottom: 1px solid var(--border-color); padding-bottom: .5rem; }
  .prose p, .prose li { line-height: 1.8; }
  .post-meta { color: var(--text-secondary); font-size: .9rem; margin-bottom: 2rem; }
  .italic-note { font-style: italic; text-align: center; margin-top: 4rem; font-size: 1.1rem; color: var(--text-secondary); }
</style>