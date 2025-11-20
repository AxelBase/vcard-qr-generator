<!-- src/components/ContactForm.svelte -->

<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let formData = {
    firstName: '',
    lastName: '',
    organization: '',
    title: '',
    mobilePhone: '',
    workPhone: '',
    email: '',
    website: '',
    street: '',
    city: '',
    postalCode: '',
    country: ''
  };

  // Trim inputs on every update
  function handleInput() {
    for (const key in formData) {
      if (typeof formData[key] === 'string') {
        formData[key] = formData[key].trimStart(); // Do NOT trim end while typing
      }
    }
    dispatch('update', formData);
  }
</script>

<form class="row g-3" on:input={handleInput}>
  <div class="col-md-6">
    <label for="firstName" class="form-label">First Name *</label>
    <input id="firstName" type="text" class="form-control" bind:value={formData.firstName} required>
  </div>

  <div class="col-md-6">
    <label for="lastName" class="form-label">Last Name *</label>
    <input id="lastName" type="text" class="form-control" bind:value={formData.lastName} required>
  </div>

  <div class="col-md-6">
    <label for="organization" class="form-label">Organization</label>
    <input id="organization" type="text" class="form-control" bind:value={formData.organization}>
  </div>

  <div class="col-md-6">
    <label for="title" class="form-label">Title</label>
    <input id="title" type="text" class="form-control" bind:value={formData.title}>
  </div>

  <div class="col-md-6">
    <label for="mobilePhone" class="form-label">Mobile Phone</label>
    <input id="mobilePhone" type="tel" class="form-control" bind:value={formData.mobilePhone}>
  </div>

  <div class="col-md-6">
    <label for="workPhone" class="form-label">Work Phone</label>
    <input id="workPhone" type="tel" class="form-control" bind:value={formData.workPhone}>
  </div>

  <div class="col-md-6">
    <label for="email" class="form-label">Email</label>
    <input id="email" type="email" class="form-control" bind:value={formData.email}>
  </div>

  <div class="col-md-6">
    <label for="website" class="form-label">Website</label>
    <input id="website" type="url" class="form-control" bind:value={formData.website}>
  </div>

  <div class="col-12">
    <label for="street" class="form-label">Street Address</label>
    <input id="street" type="text" class="form-control" bind:value={formData.street}>
  </div>

  <div class="col-md-4">
    <label for="city" class="form-label">City</label>
    <input id="city" type="text" class="form-control" bind:value={formData.city}>
  </div>

  <div class="col-md-4">
    <label for="postalCode" class="form-label">Postal Code</label>
    <input id="postalCode" type="text" class="form-control" bind:value={formData.postalCode}>
  </div>

  <div class="col-md-4">
    <label for="country" class="form-label">Country</label>
    <input id="country" type="text" class="form-control" bind:value={formData.country}>
  </div>

  <small class="text-muted">* Required fields.</small>
</form>
