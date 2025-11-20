<script>
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  const paypalUsername = 'AxelLab427'; // Replace with your actual username later
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Svelte Action for clicking outside
  function clickOutside(node) {
    const handleClick = (event) => {
      if (node && !node.contains(event.target)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  const currentYear = new Date().getFullYear();
</script>

<header class="custom-navbar">
  <nav class="nav-container">
    
    <div class="brand-section">
      <a href="{base}/" aria-label="Home">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelLab Logo" class="navbar-brand-logo" />
      </a>
      
      <a class="navbar-brand-text" href="{base}/">AxelBase</a>

      <div style="width: 1px; height: 25px; background: #ccc; margin: 0 5px;"></div>

      <div class="bmac-wrapper" use:clickOutside on:click_outside={closeDropdown}>
        <button class="bmac-button" class:active={isDropdownOpen} on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
          </svg>
          <span class="d-none d-sm-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            {#each donationAmounts as amount}
              <a 
                href="https://paypal.me/{paypalUsername}/{amount}" 
                target="_blank" 
                rel="noopener noreferrer"
                on:click={closeDropdown}
              >
                ${amount}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav-links">
      <li><a class="nav-link" href="{base}/">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to">How to use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>
    </ul>

  </nav>
</header>

<slot />

<footer class="custom-footer">
  <span>&copy; AxelBase vCard - Contact QR Generator – {currentYear}</span>
  <div class="footer-links">
    <span>|</span>
    <a href="{base}/privacy" class="footer-link">Privacy</a>
    <a href="{base}/terms" class="footer-link">Terms</a>
  </div>
</footer>