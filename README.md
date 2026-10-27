# kevinnaughtonjr.com

Personal brand site for Kevin Naughton Jr., built to show brands who Kevin is, who follows him, what he makes, and how to work with him.

Built with [Astro](https://astro.build) as a fully static site. No client framework, no CMS: every number, link, package and partner lives in one data file.

## Editing the site

- `src/data/site.ts` - all copy, stats, partners, featured videos, packages and links. This is the only file you need to touch for routine updates.
- `src/components/*.astro` - one component per section (Hero, Partners, About, Content, Audience, Partnerships, Newsletter, Contact, Footer). Each owns its own scoped CSS.
- `src/styles/global.css` - design tokens (colors, type, spacing), buttons, cards and shared utilities.
- `public/images/videos/<youtubeId>.jpg` - thumbnails for the featured videos. Fetch new ones with:

  ```sh
  curl -L -o public/images/videos/<id>.jpg https://i.ytimg.com/vi/<id>/maxresdefault.jpg
  ```

- `public/images/kevin.jpg` - hero portrait. Replace with a high-resolution photo (at least 1000px wide, roughly 5:6).
- `public/images/og.jpg` - social share image (1200x630). Not yet added.

Partner logos: add a `logo` path to an entry in `partners` to swap the wordmark for artwork.

## Development

```sh
npm ci
npm run dev        # http://127.0.0.1:4321
npm run check      # type-check Astro components and data
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

Node version is pinned in `.node-version` (works with fnm, nvm and Volta).

### Reviewing over Tailscale

The dev server allows requests from any `*.ts.net` hostname. To share it on the tailnet:

```sh
sudo tailscale serve --bg 4321
# https://<machine>.<tailnet>.ts.net/
```

Turn it off with `sudo tailscale serve --https=443 off`.

## Deploying

`npm run build` produces a plain static site in `dist/`. It can be hosted on Vercel, Netlify, Cloudflare Pages or GitHub Pages without configuration beyond pointing at the `dist/` folder. Update `site` in `astro.config.mjs` and `site.url` in `src/data/site.ts` when the final domain is chosen.
