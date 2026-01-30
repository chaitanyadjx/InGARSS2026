# InGARSS 2026 Website

A [Next.js](https://nextjs.org) static website for the InGARSS 2026 conference.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

```bash
npm run build
```

This generates a static export in the `out/` folder.

## Testing Production Build Locally

```bash
npx serve out
```

---

## 🚀 Automated Deployment (GitHub Actions)

The website automatically deploys when you push to the `main` branch.

### What happens automatically:
1. Next.js builds the static site
2. Site is deployed to AWS server
3. Nginx is restarted

### Required GitHub Secrets:
Go to **Repository Settings → Secrets → Actions** and add:

| Secret Name | Value |
|-------------|-------|
| `AWS_SSH_KEY` | Contents of `workshop_aws.pem` file |

### Manual Triggers:
- Go to **Actions** tab in GitHub
- Select **"Deploy to Production"**
- Click **"Run workflow"**

---

## 🔧 Manual Deployment (Without GitHub Actions)

(Commands to be done on WSL/Linux)

1. Build the project and get the `out/` folder
2. Put it in the same folder as `workshop_aws.pem`
3. Make pem file read only:
   ```bash
   chmod 400 ./workshop_aws.pem
   ```
4. Upload to server:
   ```bash
   rsync -avz -e "ssh -i ./workshop_aws.pem" ./out/ ubuntu@54.66.242.45:~/out
   ```
5. SSH into the server:
   ```bash
   ssh -i "./workshop_aws.pem" ubuntu@54.66.242.45
   ```
6. Copy to nginx directory:
   ```bash
   sudo rsync -av --delete /home/ubuntu/out/ /var/www/ingarss2026/
   ```
7. Verify and restart nginx:
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```
8. Logout: `logout`

---

## 📝 Making Content Changes

1. Edit the relevant JSON file in `src/data/` (e.g., `committee.json`)
2. Commit and push to `main` branch
3. GitHub Action will auto-deploy
