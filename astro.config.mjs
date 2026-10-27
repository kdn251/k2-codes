// @ts-check
import { defineConfig } from 'astro/config';

// Hosts allowed to reach the dev/preview servers. The tailnet hostname is used
// while reviewing the site through `tailscale serve`.
const allowedHosts = ['.ts.net'];

export default defineConfig({
  site: 'https://k2.codes',
  server: { host: '127.0.0.1', port: 4321, allowedHosts },
  vite: {
    server: { allowedHosts },
    preview: { allowedHosts },
  },
});
