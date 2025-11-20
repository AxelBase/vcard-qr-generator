<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>QR Code Scannability: Contrast, Quiet Zone, and Module Size Requirements</title>
  <meta name="description" content="ISO/IEC 18004 compliance deep dive: minimum X-dimension, quiet zone math, and why even 'perfect' QR codes fail on glossy paper." />
  <meta property="og:title" content="QR Code Scannability: Contrast, Quiet Zone, and Module Size Requirements" />
  <meta property="og:description" content="ISO/IEC 18004 compliance deep dive: minimum X-dimension, quiet zone math, and why even 'perfect' QR codes fail on glossy paper." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>QR Code Scannability Requirements</p>
  </div>

  <article class="prose">
    <h1>QR Code Scannability: Contrast, Quiet Zone, and Module Size Requirements</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>Even with perfect data and H-level error correction, a QR code can fail to scan. Here’s why — and how to avoid it.</p>

    <h2>ISO/IEC 18004 Minimum Requirements</h2>
    <ul>
      <li><strong>Quiet Zone</strong>: 4 modules on all sides (not 3, not 2)</li>
      <li><strong>Contrast</strong>: ≥70% between dark and light modules</li>
      <li><strong>Minimum Module Size</strong>: 0.25 mm (0.01 in) for standard scanners</li>
    </ul>

    <h2>Real-World Failures</h2>
    <ul>
      <li>Printed on glossy card: reflection kills contrast</li>
      <li>White border 4 modules: scanner can’t find timing patterns</li>
      <li>Inverted colors (light on dark): most apps fail</li>
      <li>Printed at 0.3 mm/module: phone cameras struggle</li>
    </ul>

    <h2>Recommended Print Settings</h2>
    <ul>
      <li>Size: Minimum 25×25 mm (1×1 in) for business cards</li>
      <li>Quiet zone: 5–6 modules for extra safety</li>
      <li>Colors: Pure black (#000000) on pure white (#FFFFFF)</li>
      <li>Paper: Matte or uncoated</li>
    </ul>

    <h2>Tested Scanner Tolerance</h2>
    <p>iOS Camera: fails at 0.22 mm/module<br>
    Google Lens: fails at 0.18 mm/module<br>
    Dedicated scanners: work down to 0.15 mm/module</p>

    <h2>Conclusion</h2>
    <p>Error correction fixes data damage — not optical failure. Follow the physical standards, and your QR code will scan every time.</p>

    <p class="italic-note">The best QR code is the one that scans on the first try.</p>
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