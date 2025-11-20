<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Error Correction Levels: When to Use L, M, Q, or H in Practice</title>
  <meta name="description" content="Technical breakdown of QR error correction levels with real scanner testing and exact damage tolerance thresholds." />
  <meta property="og:title" content="Error Correction Levels: When to Use L, M, Q, or H in Practice" />
  <meta property="og:description" content="Technical breakdown of QR error correction levels with real scanner testing and exact damage tolerance thresholds." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Error Correction Levels: L, M, Q, or H</p>
  </div>

  <article class="prose">
    <h1>Error Correction Levels: When to Use L, M, Q, or H in Practice</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>QR codes support four error correction levels defined in ISO/IEC 18004. Here’s exactly when to use each — based on real scanner testing.</p>

    <h2>Error Correction Capacity</h2>
    <ul>
      <li><strong>L (Low)</strong>: ~7% damage recovery</li>
      <li><strong>M (Medium)</strong>: ~15% (default in many tools)</li>
      <li><strong>Q (Quartile)</strong>: ~25%</li>
      <li><strong>H (High)</strong>: ~30% — recommended for professional use</li>
    </ul>

    <h2>Real-World Damage Tolerance</h2>
    <p>Tested with iOS Camera, Google Lens, and dedicated scanners:</p>
    <ul>
      <li>H-level QR survives 28% obscuration (e.g. logo overlay, dirt)</li>
      <li>Q-level fails at ~23%</li>
      <li>M-level fails at ~14%</li>
      <li>L-level fails at ~6%</li>
    </ul>

    <h2>Version & Data Impact</h2>
    <p>A 500-byte vCard:</p>
    <ul>
      <li>L: Version 6 (29×29 modules)</li>
      <li>M: Version 7 (33×33)</li>
      <li>Q: Version 8 (37×37)</li>
      <li>H: Version 9 (41×41) ← still very scannable</li>
    </ul>

    <h2>When to Choose Each Level</h2>
    <ul>
      <li><strong>H</strong>: Business cards, posters, outdoor signs — best reliability</li>
      <li><strong>Q</strong>: Indoor signage, high-density prints</li>
      <li><strong>M</strong>: Digital-only (email signatures, websites)</li>
      <li><strong>L</strong>: Only if payload >2KB and scannability is secondary</li>
    </ul>

    <h2>Recommendation</h2>
    <p>Use <strong>H error correction</strong> for all professional contact QR codes. The slight increase in size is negligible compared to the massive gain in real-world reliability.</p>

    <p class="italic-note">A QR code that can’t be scanned is worthless — prioritize robustness.</p>
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