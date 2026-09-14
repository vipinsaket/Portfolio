# V I P — React Portfolio

Vipin Kumar Saket's responsive Java / Spring Boot developer portfolio, built with React and Vite.

## Publish on GitHub Pages

1. Extract this ZIP on your computer.
2. Create a **public** GitHub repository, for example `portfolio`. Use `main` as its default branch.
3. Upload the **contents** of `vip-portfolio-react` to the repository root. `package.json`, `index.html`, `src`, `public`, and `.github` must be directly at the repository root, not inside another folder. Upload the extracted files, not this ZIP.
4. In the repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open **Actions → Deploy V I P Portfolio to GitHub Pages → Run workflow**. Subsequent pushes to `main` deploy automatically.
6. After the workflow succeeds, open the link shown by the deployment or by Settings → Pages.

For the `vipinsaket/portfolio` repository, the normal URL is `https://vipinsaket.github.io/portfolio/`. To use `https://vipinsaket.github.io/`, name the repository `vipinsaket.github.io` instead. Relative Vite asset paths support either option.

**Do not miss the `.github` folder:** file browsers sometimes hide it. If the workflow is absent after uploading, create `.github/workflows/deploy.yml` with GitHub's Add file → Create new file, then copy in the included workflow.

GitHub Pages needs the one-time setting in step 4; simply uploading React source does not host it. The included workflow builds the React application and publishes `dist`. No personal access token or API key is needed. Do not upload `node_modules` or configure Pages to serve the unbuilt source from a branch.

Official reference: https://vite.dev/guide/static-deploy.html#github-pages

## Run locally

Install Node.js 24 LTS (or Node 22.12+), then run:

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Open the local URL printed by Vite. Opening `index.html` directly with a double click does not run the React app.

## Included changes

- V I P logo in the header, loader, footer, favicon, and mechanical keyboard.
- React Bits SplashCursor from the supplied component, using a transparent WebGL fluid simulation.
- Desktop splash animation with touch, reduced-motion, unsupported-WebGL, and hidden-tab handling.
- Sticky glass header, active-section links, mobile menu, keyboard focus styling, and a skip link.
- Mechanical keyboard with raised keycaps, RGB underglow, animated key lighting, and JAVA typing.
- DBeaver in tools. C and C++ added to languages. SQL removed from languages; SQL remains in the database demo.
- Hero **View projects** opens `https://github.com/vipinsaket`.
- Existing content, resume download, project details, terminal demo, and contact links retained.
- GitHub Pages workflow and dependency lockfile.

## Edit your portfolio

- `src/App.jsx`: hero, about, projects, experience, and contact content.
- `src/components/Portfolio.jsx`: header, loader, skill groups, terminal, keyboard, and live repository metadata.
- `src/components/SplashCursor.jsx`: supplied React Bits fluid effect.
- `src/styles.css`: styles, responsive breakpoints, and RGB animations.
- `public/Vipin_Kumar_Saket_Resume.pdf`: replace this file to update the resume.
- `public/favicon.svg`: V I P favicon.

Project metrics reproduce the supplied portfolio brief. GitHub metadata loads from public repositories without credentials; if GitHub is unavailable or rate limited, project content and GitHub links still work. The terminal is a visual simulation. Contact uses email/telephone links, with no form server required. Fonts and skill logos load from public CDNs with text/font fallbacks.

The package is prepared for your own GitHub deployment. It does not update the previously hosted ChatGPT Site or push anything to your GitHub account.

## Component attribution

SplashCursor source was supplied in `Pasted text(2).txt`, identified there as React Bits, with local performance and compatibility adjustments. See `THIRD_PARTY_NOTICES.md` for source attribution.
