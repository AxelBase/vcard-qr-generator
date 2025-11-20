// src/lib/qr.js

import QRious from 'qrious';
import { saveAs } from 'file-saver';

function safeEncode(text) {
  if (!text) return '';
  return unescape(encodeURIComponent(text));
}

export function createQr(canvasId, initialValue = '', initialLevel = 'H') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) throw new Error('Canvas element not found');

  return new QRious({
    element: canvas,
    value: safeEncode(initialValue),
    size: 300,
    level: initialLevel,
    padding: 20,
    background: 'white',
    foreground: 'black'
  });
}

export function updateQr(qr, value, level) {
  qr.set({
    value: safeEncode(value),
    level
  });
}

export function downloadQrPng(qr, filename = 'qrcode.png') {
  const highResQr = new QRious({
    value: safeEncode(qr.value),
    size: 1024,
    level: qr.level,
    padding: 20 * (1024 / 300),
    background: qr.background,
    foreground: qr.foreground
  });

  const dataUrl = highResQr.toDataURL('image/png');

  const byteString = atob(dataUrl.split(',')[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([ab], { type: 'image/png' });
  saveAs(blob, filename);
}
