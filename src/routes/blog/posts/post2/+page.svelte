<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Deep Dive: vCard 3.0 Format and QR Code Payload Optimization</title>
  <meta name="description" content="Line-by-line breakdown of vCard 3.0 syntax, folding rules, character limits, and how to keep your QR payload under 1KB for maximum scannability." />
  <meta property="og:title" content="Deep Dive: vCard 3.0 Format and QR Code Payload Optimization" />
  <meta property="og:description" content="Line-by-line breakdown of vCard 3.0 syntax, folding rules, character limits, and how to keep your QR payload under 1KB for maximum scannability." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>vCard 3.0 Format and Payload Optimization</p>
  </div>

  <article class="prose">
    <h1>Deep Dive: vCard 3.0 Format and QR Code Payload Optimization</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>vCard 3.0 (RFC 2426) is the gold standard for QR code contact sharing. Here’s exactly how to structure it for minimum size and maximum scanner compatibility.</p>

    <h2>Required Minimal vCard</h2>
    <pre>BEGIN:VCARD
VERSION:3.0
N:Last;First;;;
FN:First Last
TEL;CELL:+1234567890
EMAIL:mail@example.com
END:VCARD</pre>

    <p>That’s only 126 bytes — fits in a Version 3 QR code with High error correction.</p>

    <h2>Line Folding Rules (RFC 2425)</h2>
    <p>Lines must be less than 76 characters. Longer lines are folded with a space or tab at the start of continuation lines:</p>
    <pre>URL;WORK:https://very-long-company-website.com/about/team/john-doe
    profile</pre>

    <p>Most generators get this wrong — causing scanner failures.</p>

    <h2>Fields to Avoid (Bloat)</h2>
    <ul>
      <li><code>CATEGORIES</code> — rarely used, adds 20–50 bytes</li>
      <li><code>NICKNAME</code> — almost never imported</li>
      <li><code>REV</code> — timestamp, useless in QR context</li>
      <li><code>PRODID</code> — generator signature, unnecessary</li>
    </ul>

    <h2>Character Encoding</h2>
    <p>Use UTF-8 only when required. For Latin names and standard fields, ASCII saves ~10–15% payload.</p>

    <h2>Real Payload Benchmarks</h2>
    <ul>
      <li>Minimal contact: ~180 bytes</li>
      <li>Full name + 2 phones + email + URL + address: ~520 bytes</li>
      <li>With unnecessary fields: 800+ bytes → Version 10+ QR → slower scanning</li>
    </ul>

    <h2>Recommendation</h2>
    <p>Keep total payload under 600 bytes. This fits in a Version 7 QR code with H error correction — scannable even when damaged or low-resolution.</p>

    <p class="italic-note">Smaller payload = faster, more reliable scanning.</p>
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