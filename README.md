# Joseph R. Boyle - Personal Portfolio

This is a static personal portfolio for GitHub Pages. It has no build step or package dependencies.

## Local preview

From this directory:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Branch workflow

- `main` is the production branch used for the live website.
- `development` is a local-only branch for experiments and is not published.
- Preview changes on `development` with the local server above. When they are ready, merge them into `main` and push `main` to publish.

## GitHub Pages

This repository can be published as a project site at:

`https://s0meguynamedjoe.github.io/Site/`

To use a cleaner personal-site URL instead, rename the repository to:

`s0meguynamedj0e.github.io`

Do not commit or push until you are ready to publish.

### Publishing to GitHub Pages

Because the remote currently uses the `Site` project repository, the simplest first deployment is:

1. Commit the website files on a branch named `main`.
2. Open `https://github.com/s0meguynamedjoe/Site/settings/pages`.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then click **Save**.
5. Wait for the deployment, then open `https://s0meguynamedjoe.github.io/Site/`.

PowerShell commands for the first commit are:

```powershell
cd D:\PersonalWebsite\Site
git add .
git commit -m "Build personal portfolio"
git push -u origin main
```

For the cleaner `username.github.io` address later, rename or create a repository named `s0meguynamedj0e.github.io`, copy these files to that repository, publish `main` from `/ (root)`, and open `https://s0meguynamedj0e.github.io/`.

## Editing content

- `index.html` - Homepage
- `about.html` - Biography and education
- `projects.html` - Project cards and placeholders
- `involvement.html` - Leadership and interests
- `resume.html` - Education, experience, skills, and resume download
- `styles.css` - Site colors and layout
- `script.js` - Mobile navigation and theme preference
- `assets/` - Profile photo and resume

## Resume download analytics

The download button tracks an anonymous `Resume Download` event when one of these analytics providers is loaded:

- Umami: `window.umami.track(...)`
- Plausible: `window.plausible(...)`

No names or email addresses are collected by the download button. Umami Cloud currently offers a free Hobby tier for one site and up to 100,000 events per month; limits may change.

To enable Umami:

1. Create an Umami account and add `s0meguynamedj0e.github.io` or your custom domain as a website.
2. Copy its website ID.
3. Add this script to each HTML page in the `head`:

```html
<script defer src="https://cloud.umami.is/script.js" data-website-id="YOUR_WEBSITE_ID"></script>
```

The existing JavaScript will then send a `Resume Download` event automatically.

## Resume

The resume PDF is stored at `assets/resume.pdf`. The original Word document remains available at `assets/resume.docx`.
