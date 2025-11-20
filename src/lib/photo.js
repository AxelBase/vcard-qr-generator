// src/lib/photo.js

// Convert uploaded file to base64 string
// file: File object (from input)
// Returns Promise<string> (base64 without data: prefix)
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('File must be an image (JPG/PNG/WebP)'));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      // Extract base64 part (after ,)
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Validate file (size < 1MB, types: jpg/png/webp)
export function validatePhotoFile(file) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Only JPG, PNG, or WebP allowed');
  }
  if (file.size > 1024 * 1024) {  // 1MB limit for base64 sanity
    throw new Error('Photo must be under 1MB');
  }
  return true;
}