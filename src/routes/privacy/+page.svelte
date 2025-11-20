<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | vCard QR Generator</title>
  <meta name="description" content="This vCard QR Generator collects zero personal data. Everything runs 100% in your browser — no tracking, no logs, no servers." />
  <meta property="og:title" content="Privacy Policy | vCard QR Generator" />
  <meta property="og:description" content="Zero data collection. Zero tracking. Your contact information never leaves your device." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 20, 2025</p>

    <h2>We Collect Absolutely Nothing</h2>
    <p>The <strong>vCard QR Generator</strong> is a completely <strong>client-side web tool</strong>. Every single operation — from filling the form to generating the vCard string and rendering the QR code — happens <strong>exclusively in your browser</strong>.</p>
    <p><strong>We do not collect, store, transmit, log, or process any personal information whatsoever.</strong> This includes:</p>
    <ul>
      <li>Names, phone numbers, emails, addresses, or any contact details you enter</li>
      <li>IP addresses, browser fingerprints, or geolocation data</li>
      <li>Usage statistics, analytics events, or crash reports</li>
      <li>Cookies, localStorage persistence (beyond the current session), or tracking pixels</li>
    </ul>

    <h2>How the Tool Actually Works</h2>
    <p>All processing is performed locally using pure JavaScript:</p>
    <ul>
      <li><code>vcard-creator</code> builds the vCard 3.0 strings in memory</li>
      <li><code>Qrious</code> draws the QR code directly on an HTML <code>&lt;canvas&gt;</code></li>
      <li>Download buttons trigger <code>saveAs()</code> via <code>file-saver</code> — no server round-trip</li>
    </ul>
    <p>Your data <strong>never leaves your device</strong> — not even temporarily.</p>

    <h2>No Third-Party Services</h2>
    <p>We do not use:</p>
    <ul>
      <li>Google Analytics, Plausible, Fathom, or any analytics provider</li>
      <li>Advertising networks, affiliate pixels, or social media widgets</li>
      <li>External CDNs that track users (all libraries are bundled locally)</li>
    </ul>

    <h2>Security Is Inherent</h2>
    <p>Because there is no backend, there is no database to breach, no logs to leak, and no API keys to steal. The only code that runs is what you see in your browser’s developer tools.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is safe for all ages. No personal information is ever requested or stored.</p>

    <h2>Compliance by Design</h2>
    <p>By collecting zero data, we are inherently compliant with <strong>GDPR</strong>, <strong>CCPA</strong>, <strong>CCPA/CPRA</strong>, <strong>LGPD</strong>, and all other privacy regulations.</p>

    <h2>Changes to This Policy</h2>
    <p>If we ever change this policy (extremely unlikely), the new version will be posted here with an updated “Effective Date”.</p>

    <p class="italic-note">
      <strong>Your privacy is not a feature — it’s the entire architecture.</strong><br>
      Thank you for trusting a truly private tool.
    </p>
  </article>
</div>

<style>
  /* Same styles as your blog posts */
  .post-layout { max-width: 800px; padding: 2rem 1rem 5rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose h1 { font-size: 2.8rem; margin-bottom: .5rem; color: var(--accent-secondary); }
  .prose h2 { margin-top: 2.8rem; color: var(--accent-primary); border-bottom: 1px solid var(--border-color); padding-bottom: .5rem; }
  .prose p, .prose li { line-height: 1.8; }
  .post-meta { color: var(--text-secondary); font-size: .9rem; margin-bottom: 2rem; }
  .italic-note { font-style: italic; text-align: center; margin-top: 4rem; font-size: 1.1rem; color: var(--text-secondary); }
</style>