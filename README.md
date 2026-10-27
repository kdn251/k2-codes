# k2.codes

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
- `public/images/brands/*.svg` - partner logos, referenced by the `logo` field of each entry in `partners`. Single-colour artwork works best because logos are painted through a CSS mask.
- `public/setup.sh`, `public/start.sh`, `public/test.sh` - the VPS bootstrap scripts served at `k2.codes/setup.sh` and friends. They are plain static files; `vercel.json` sets their content type and redirects the old `/api/*.sh` paths.

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

The site is deployed by Vercel from the `kdn251/k2-codes` GitHub repository (project `k2-codes`, domain [k2.codes](https://k2.codes)).

- Every push to `main` builds and goes live on k2.codes.
- Every pull request gets a preview deployment; Vercel posts the URL on the PR.
- `vercel.json` pins the Astro framework preset, so no dashboard configuration is needed. Node is pinned to 24 through `engines` in `package.json` and `.node-version`.

To build exactly as Vercel does, run `vercel pull && vercel build` from a checkout linked to the project.
