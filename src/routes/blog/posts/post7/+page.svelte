<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>vCard 4.0 vs 3.0: Why We Still Recommend 3.0 for QR Codes</title>
  <meta name="description" content="Detailed compatibility matrix showing which devices break on vCard 4.0 features — and why 3.0 wins for QR use." />
  <meta property="og:title" content="vCard 4.0 vs 3.0: Why We Still Recommend 3.0 for QR Codes" />
  <meta property="og:description" content="Detailed compatibility matrix showing which devices break on vCard 4.0 features — and why 3.0 wins for QR use." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>vCard 4.0 vs 3.0</p>
  </div>

  <article class="prose">
   "net
    <h1>vCard 4.0 vs 3.0: Why We Still Recommend 3.0 for QR Codes</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>vCard 4.0 (RFC 6350) introduced new features — but broke compatibility in real-world contact sharing. Here’s why vCard 3.0 remains the safe choice.</p>

    <h2>Key vCard 4.0 Features That Break QR Use</h2>
    <ul>
      <li><code>KIND:individual</code> — ignored or crashes many scanners</li>
      <li><code>GENDER</code> — not imported by most clients</li>
      <li><code>ANNIVERSARY</code>, <code>BDAY</code> with date-time — partial support</li>
      <li><code>XML</code> property — completely unsupported</li>
      <li>Extended types (e.g. <code>IMPP</code>) — rarely handled</li>
    </ul>

    <h2>Tested Compatibility (2025)</h2>
    <ul>
      <li>iOS 18: Full vCard 3.0 support — Partial vCard 4.0</li>
      <li>Android 15: Full 3.0 — KIND causes crash in some apps</li>
      <li>Outlook 365: Full 3.0 — Ignores most 4.0 extensions</li>
      <li>macOS Contacts: Full 3.0 — XML property breaks import</li>
    </ul>

    <h2>Why vCard 3.0 Wins for QR Codes</h2>
    <ul>
      <li>100% compatibility across all devices</li>
      <li>Smaller payload (no extra properties)</li>
      <li>Faster parsing in scanner apps</li>
      <li>No risk of silent failures</li>
    </ul>

    <h2>Recommendation</h2>
    <p>Use <strong>vCard 3.0</strong> for all QR code contact sharing. The features added in 4.0 are not worth the compatibility risk in a medium where reliability is everything.</p>

    <p class="italic-note">Future-proof isn’t about using the newest standard — it’s about using the one that actually works.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2{
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }
  
  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>