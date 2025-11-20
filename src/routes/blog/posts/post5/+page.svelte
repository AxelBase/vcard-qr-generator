<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Building Fully Static, Zero-JS-Framework QR Tools with SvelteKit</title>
  <meta name="description" content="How adapter-static + client-side generation creates truly private, offline-first contact tools with no tracking or server dependency." />
  <meta property="og:title" content="Building Fully Static, Zero-JS-Framework QR Tools with SvelteKit" />
  <meta property="og:description" content="How adapter-static + client-side generation creates truly private, offline-first contact tools with no tracking or server dependency." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Static Sites + Dynamic QR Codes</p>
  </div>

  <article class="prose">
    <h1>Building Fully Static, Zero-JS-Framework QR Tools with SvelteKit</h1>
    <p class="post-meta">Published: November 20, 2025</p>

    <p>This vCard QR generator runs entirely in your browser — no server, no analytics, no cookies. Here’s how SvelteKit makes that possible.</p>

    <h2>The Core Trick: adapter-static + Client-Side Generation</h2>
    <p>Using <code>@sveltejs/adapter-static</code>, the entire site builds to pure HTML/CSS/JS. All vCard and QR generation happens 100% client-side using <code>vcard-creator</code> and <code>Qrious</code>.</p>

    <h2>Key Technical Advantages</h2>
    <ul>
      <li>No backend = no attack surface</li>
      <li>No database = no data collection</li>
      <li>No cookies = no tracking</li>
      <li>Works offline (after first load)</li>
      <li>Deployable to GitHub Pages, Netlify, Vercel, or any static host</li>
    </ul>

    <h2>Bundle Size Reality</h2>
    <p>Final production build: ~185 KB gzipped<br>
    QRious: 26 KB<br>
    vcard-creator: 8 KB<br>
    Everything else: vanilla SvelteKit</p>

    <h2>Privacy by Design</h2>
    <p>No telemetry. No Google Analytics. No Facebook Pixel. No “contact form” that phones home. Your contact data never leaves your device — not even temporarily.</p>

    <h2>Why This Matters</h2>
    <p>Most online QR generators log your data. Some inject tracking URLs. Some add their owny logo. This tool does none of that.</p>

    <p class="italic-note">True privacy isn’t a feature — it’s the default when you remove the server.</p>
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