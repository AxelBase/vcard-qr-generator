<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Why QR Codes Remain the Universal Contact Standard in 2025',
      description: 'A data-driven look at why vCard QR codes outperform NFC, Apple/Google Wallet passes, and link-in-bio tools in real-world adoption.'
    },
    {
      href: '/blog/posts/post2',
      title: 'Deep Dive: vCard 3.0 Format and QR Code Payload Optimization',
      description: 'Line-by-line breakdown of vCard 3.0 syntax, folding rules, character encoding, and how to keep payload under 1KB for maximum scan speed.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Error Correction Levels: When to Use L, M, Q, or H in Practice',
      description: 'Technical analysis of QR error correction capacity vs. data density — with exact thresholds and real scanner tolerance tests.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Minimizing vCard Payload: Removing Redundant Fields Without Breaking Compatibility',
      description: 'How to strip unnecessary vCard properties (NICKNAME, CATEGORIES, REV, etc.) while maintaining 100% compatibility with iOS, Android, Outlook, and macOS.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Building Fully Static, Zero-JS-Framework QR Tools with SvelteKit',
      description: 'How adapter-static + client-side generation enables true offline-first, no-tracking, zero-server tools — with full build analysis.'
    },
    {
      href: '/blog/posts/post6',
      title: 'QR Code Scannability: Contrast, Quiet Zone, and Module Size Requirements',
      description: 'ISO/IEC 18004 compliance deep dive: minimum X-dimension, quiet zone math, and why even "perfect" QR codes fail on glossy paper.'
    },
    {
      href: '/blog/posts/post7',
      title: 'vCard 4.0 vs 3.0: Why We Still Recommend 3.0 for QR Codes',
      description: 'Detailed compatibility matrix showing which devices break on vCard 4.0 features (KIND, XML, etc.) — and why 3.0 wins for QR use.'
    }
  ];
</script>

<svelte:head>
  <title>Blog • vCard QR Generator</title>
  <meta name="description" content="Advanced technical guides on vCard 3.0, QR code optimization, error correction, and building privacy-first contact sharing tools." />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="text-center mb-5 pb-4 border-bottom border-primary">
    <h1 class="display-4 fw-bold mb-4">Technical Blog</h1>
    <p class="lead text-muted col-lg-9 mx-auto">
      In-depth articles on vCard standards, QR code engineering, payload optimization, and building truly private, offline-first contact tools.
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="text-decoration-none h-100 d-block">
          <div class="card h-100 border-0 shadow-sm post-card">
            <div class="card-body d-flex flex-column p-4">
              <h3 class="h5 fw-bold text-primary mb-3">{post.title}</h3>
              <p class="text-muted small flex-grow-1 lh-lg">{post.description}</p>
              <div class="mt-4">
                <span class="text-primary fw-semibold small">
                  Read technical article →
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    max-width: 1300px;
    margin: 0 auto;
  }

  .post-card {
    background: var(--card-bg);
    border-radius: 16px;
    transition: all 0.35s ease;
    overflow: hidden;
  }

  .post-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
  }

  .post-card:hover .text-primary {
    color: var(--accent-primary) !important;
  }

  .card-body {
    background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%);
  }
</style>