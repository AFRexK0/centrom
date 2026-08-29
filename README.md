# Centrom

90s CRT-themed one-pager.

## Local dev

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages + GoDaddy domain

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial Centrom site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/centrom-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` and repo name with yours.

### 2. Enable GitHub Pages

In the repo on GitHub:

1. **Settings → Pages**
2. **Build and deployment → Source:** GitHub Actions
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually). The site will deploy from the `dist` folder via Actions.

### 3. Custom domain in GitHub

Still under **Settings → Pages → Custom domain**, enter:

```text
centrom.studio
```

Save. GitHub will verify DNS and enable HTTPS (can take up to 24 hours).

Edit `public/CNAME` if you use a different domain (e.g. `www.centrom.studio`), then commit and push.

### 4. GoDaddy DNS

In GoDaddy: **My Products → Domain → DNS** (or **Manage DNS**).

**If you use the root domain `centrom.studio`** — add four **A** records:

| Type | Name | Value           | TTL |
|------|------|-----------------|-----|
| A    | @    | 185.199.108.153 | 600 |
| A    | @    | 185.199.109.153 | 600 |
| A    | @    | 185.199.110.153 | 600 |
| A    | @    | 185.199.111.153 | 600 |

**If you use `www`** — add a **CNAME**:

| Type  | Name | Value              | TTL |
|-------|------|--------------------|-----|
| CNAME | www  | YOUR_USERNAME.github.io | 600 |

Use your GitHub username (or org name), not the repo name.

Remove old **A** or **CNAME** records that point `@` or `www` to GoDaddy parking or old hosting, or they will conflict.

### 5. Wait and test

DNS can take from a few minutes up to 48 hours. Then open `https://centrom.studio`.

---

Stack: React, Vite, Lenis.
