// src/lib/vcard.js

import VCard from 'vcard-creator';

// Normalize, trim, remove curly quotes & diacritics
function normalizeText(text) {
  if (!text) return '';

  return text
    .toString()
    .trim()
    .replace(/’/g, "'")
    .replace(/‘/g, "'")
    .replace(/“/g, '"')
    .replace(/”/g, '"')
    .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

// Website rule: force `www.*`
function normalizeWebsite(url) {
  if (!url) return '';

  url = normalizeText(url).toLowerCase();

  if (url.startsWith("www.")) return url;

  if (url.startsWith("https://")) {
    url = url.replace("https://", "");
  } else if (url.startsWith("http://")) {
    url = url.replace("http://", "");
  }

  if (!url.startsWith("www.")) {
    url = "www." + url;
  }

  return url;
}

// Build single-line address
function buildSingleLineAddress(street, city, postalCode, country) {
  return [street, city, postalCode, country]
    .filter(x => x && x.trim() !== "")
    .join(", ");
}

export function generateVCard(data = {}) {
  const vcard = new VCard();

  const firstName = normalizeText(data.firstName);
  const lastName = normalizeText(data.lastName);
  const organization = normalizeText(data.organization);
  const title = normalizeText(data.title);
  const mobilePhone = normalizeText(data.mobilePhone);
  const workPhone = normalizeText(data.workPhone);
  const email = normalizeText(data.email);
  const street = normalizeText(data.street);
  const city = normalizeText(data.city);
  const postalCode = normalizeText(data.postalCode);
  const country = normalizeText(data.country);
  const website = normalizeWebsite(data.website);
  const photoBase64 = data.photoBase64 ? data.photoBase64.trim() : '';

  // Name
  if (firstName || lastName) {
    vcard.addName(lastName, firstName, '', '', '');
  }

  // Organization & Title
  if (organization) vcard.addCompany(organization);
  if (title) vcard.addJobtitle(title);

  // Phones
  if (mobilePhone) vcard.addPhoneNumber(mobilePhone, 'CELL');
  if (workPhone) vcard.addPhoneNumber(workPhone, 'WORK;VOICE');

  // Email
  if (email) vcard.addEmail(email);

  // Website
  if (website) {
    vcard.addURL(website);
  }

  // Address
  const fullAddress = buildSingleLineAddress(street, city, postalCode, country);

  if (fullAddress) {
    vcard.addAddress('', '', fullAddress, '', '', '', '');
  }

  // Photo
  if (photoBase64) {
    const raw = photoBase64.replace(/^data:image\/[a-zA-Z]+;base64,/, '');
    vcard.addPhoto(raw, 'JPEG');
  }

  // Convert to vCard string
  let output = vcard.toString();

  // Add a space after the FIRST colon on all non-protected lines
  output = output
    .split("\n")
    .map(line => {
      if (
        line.startsWith("BEGIN:") ||
        line.startsWith("END:") ||
        line.startsWith("VERSION:") ||
        line.startsWith("REV:")
      ) {
        return line; // Do not touch these lines
      }

      // Add a space after the first colon if missing
      return line.replace(/^([^:]+):(.*)$/, (_, label, value) => {
        // If value already starts with a space, keep it
        if (value.startsWith(" ")) return `${label}:${value}`;
        return `${label}: ${value}`;
      });
    })
    .join("\n");

  return output;
}

export function getVCardFilename() {
  return 'contact.vcf';
}
