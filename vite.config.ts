import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import fs from 'fs';

// Copy the uploaded user image to assets directory if it exists
const sourcePath = 'C:/Users/DELL/.gemini/antigravity/brain/33f827ce-f648-4a89-8a57-297e631f9b52/media__1782756434272.png';
const destPath = path.resolve(__dirname, 'src/assets/images/lycora_all_products.png');
try {
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log('Successfully copied user image to assets.');
  }
} catch (e) {
  console.error('Error copying file:', e);
}


export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
