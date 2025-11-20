<script>
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import ContactForm from '../components/ContactForm.svelte';
  import QrPreview from '../components/QrPreview.svelte';
  import DownloadButtons from '../components/DownloadButtons.svelte';
  import ResetButton from '../components/ResetButton.svelte';
  import '../app.css';

  let formData = {
    firstName: '', lastName: '', organization: '', title: '',
    mobilePhone: '', workPhone: '', email: '', website: '',
    street: '', city: '', postalCode: '', country: ''
  };
  let photoBase64 = '';
  let photoPreview = '';
  let vCardString = '';
  let qr = null;
  let errorLevel = 'H';
  let ready = false;

  onMount(() => {
    ready = browser;
  });

  async function updateVCard() {
    if (!ready) return;
    const { generateVCard } = await import('../lib/vcard.js');
    vCardString = await generateVCard({ ...formData, photoBase64 });
  }

  function handleFormUpdate(event) {
    formData = event.detail;
    updateVCard();
  }

  function handlePhotoUpdate(event) {
    photoBase64 = event.detail.photoBase64;
    updateVCard();
  }

  function handleReset() {
    formData = {
      firstName: '', lastName: '', organization: '', title: '',
      mobilePhone: '', workPhone: '', email: '', website: '',
      street: '', city: '', postalCode: '', country: ''
    };
    photoBase64 = '';
    photoPreview = '';
    vCardString = '';
    errorLevel = 'H';
    qr = null;
  }
</script>

<div class="container">
  
  <div class="row justify-content-center animate-fade-in mb-5">
    <div class="col-md-10 col-lg-9">
      <div class="text-center mb-4 pt-3">
        <h1 style="color: var(--brand-color); font-weight: 800;">vCard QR Generator</h1>
        <p class="text-muted">Create a shareable professional contact card. <br>100% client-side secure.</p>
      </div>

      <div class="card shadow-sm p-4 mb-4" style="border: 2px solid var(--outline-color); border-radius: 12px;">
        <ContactForm {formData} on:update={handleFormUpdate} />
        
        <hr class="my-4">
        
        <QrPreview {vCardString} bind:errorLevel bind:qr />
        
        <div class="mt-4">
          <DownloadButtons {vCardString} {qr} />
        </div>

        <div class="text-center mt-3">
          <ResetButton on:reset={handleReset} />
        </div>
      </div>
    </div>
  </div>

<!-- Updated sections for +page.svelte -->

<section id="about" class="py-5 border-top">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <h2 class="text-center mb-4" style="color: var(--brand-color);">About AxelBase</h2>
      <p class="lead text-center">
        The AxelBase vCard QR Generator is built with a very clear philosophy: empowering anyone to share their professional identity instantly, securely, and without relying on external servers, cloud storage, or third-party data processing. In a world where digital tools often require accounts, tracking, analytics, or hidden data transmissions, AxelBase takes the opposite approach. Everything runs entirely inside your browser. Nothing you enter—no name, no phone number, no email, no address, no photo—ever leaves your device. You generate your contact card, create the QR code, export the high-resolution PNG, copy the vCard text, or download the .vcf file, all without a single network request behind the scenes.
        <br><br>
        The tool was created for entrepreneurs, freelancers, professionals, and teams who want a seamless digital handoff experience. Whether you're preparing for a conference, printing business cards, adding a scannable contact badge to marketing materials, or sharing your details in a modern and efficient way, the generator eliminates friction. Instead of manually typing long emails, URLs, or phone numbers, anyone can simply scan your QR code and instantly save your details to their device’s contacts.
        <br><br>
        AxelBase is reliable by design. Because it is a static, single-page application built with SvelteKit, QRious, and the vCard-Creator library, it avoids the common pitfalls of online generators that break due to API limits, server downtime, or privacy restrictions. Once loaded, it even works offline. It also supports high-resolution QR exports, adjustable error-correction levels, embedded profile photos, and strict formatting rules to ensure your details scan perfectly.
        <br><br>
        Ultimately, AxelBase exists to make sharing your identity effortless. Whether you’re preparing for an event, equipping a team with digital cards, or simply wanting a faster way to exchange details with clients, the generator provides a modern, privacy-respecting solution.
      </p>
    </div>
  </div>
</section>

<section id="how-to" class="py-5 border-top bg-light rounded-3">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <h2 class="text-center mb-4" style="color: var(--brand-color);">How to Use</h2>
      <p>
        Using the AxelBase vCard QR Generator is simple, efficient, and designed to remove friction from the process of creating digital contact cards. Whether you're preparing a scannable card for networking, conferences, printed materials, or quick client exchanges, the workflow remains clean and intuitive.
        <br><br>
        Start by filling out the contact form above. The generator supports names, organization, job title, multiple phone numbers, email, website, and full address fields. You can also upload an optional profile photo, which becomes embedded directly into the exported vCard file so that contact apps will display your image automatically.
        <br><br>
        As soon as you type, the vCard file is updated in real time. This live generation happens entirely in your browser—no saving, no syncing, no uploads. The QR preview updates instantly as well, allowing you to confirm formatting, spacing, and correctness without waiting. The generator automatically refines your input: trimming excess spaces, converting curly quotes, fixing diacritics, normalizing website structure, ensuring proper colon spacing, and formatting the address as a clean single line.
        <br><br>
        If you plan to print your QR code, you can adjust the error-correction level. Higher levels (like "H") add redundancy, making the QR more resilient when printed small, placed on textured surfaces, or exposed to wear.
        <br><br>
        When you’re satisfied, choose how you want to export your data. You can download a high-resolution PNG for print, export the .vcf file for direct importing into contact apps, or copy the raw vCard text for use in signatures or internal systems. The Reset button instantly clears all fields and resets the preview.
        <br><br>
        All of this works offline once the page loads—fast, private, and completely local.
      </p>
    </div>
  </div>
</section>

<section id="faq" class="py-5 border-top mb-5">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <h2 class="text-center mb-4" style="color: var(--brand-color);">FAQ</h2>
      <div class="accordion" id="faqAccordion">

        <div class="accordion-item border-dark">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              Is my data saved?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No. The AxelBase vCard QR Generator is fully client-side. Nothing you type—name, phone number, email, address, or photo—is ever transmitted or stored. Every action, including QR creation and vCard generation, happens privately on your device.
            </div>
          </div>
        </div>

        <div class="accordion-item border-dark">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Do I need an account or sign-in?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No account is needed. The tool is a static application with no backend, no login system, and no data storage. Open it, create your card, download your files, and you're done.
            </div>
          </div>
        </div>

        <div class="accordion-item border-dark">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Why does it work offline after the first load?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              The generator is built with SvelteKit and deployed as a fully static site. Your browser caches everything, meaning it loads instantly and works offline after your first visit.
            </div>
          </div>
        </div>

        <div class="accordion-item border-dark">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
              What can I export?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              You can download a high-resolution PNG of the QR code or export a .vcf file containing all your contact details—including an embedded profile photo. Both formats are compatible with iOS, Android, CRMs, and desktop contact applications.
            </div>
          </div>
        </div>

        <div class="accordion-item border-dark">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
              Why does AxelBase modify punctuation and spacing?
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              vCard importing can be sensitive to formatting. AxelBase automatically trims extra spaces, normalizes curly quotes, removes diacritics, enforces proper colon spacing, converts websites to a clean “www.” format, and merges address fields into a single line to guarantee scanner and contact-app compatibility.
            </div>
          </div>
        </div>

        <div class="accordion-item border-dark">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
              Is it really free?
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes. AxelBase is completely free to use. If you find it helpful, you can support development through optional donation links.
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</div>