# GitHub Pages Deployment Guide

This project is configured for deployment to GitHub Pages using two methods: manual deployment and automatic deployment via GitHub Actions.

## Prerequisites

1. Push your project to a GitHub repository
2. Make sure the repository name matches the base path in `vite.config.js` (currently set to `nm-photography-master`)

## Method 1: Manual Deployment

### Steps:
1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

This will:
- Build your project into the `dist` folder
- Push the built files to the `gh-pages` branch
- GitHub Pages will automatically serve your site

### First-time setup:
1. Go to your GitHub repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select the `gh-pages` branch and `/ (root)` folder
5. Click "Save"

Your site will be available at: `https://yourusername.github.io/nm-photography-master/`

## Method 2: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys your site when you push to the main branch.

### Setup:
1. Push your code to the `main` branch of your GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically run and deploy your site

### Benefits:
- Automatic deployment on every push to main
- No need to run manual commands
- Built-in error handling and logs

## Important Notes

1. **Repository Name**: If you rename your GitHub repository, update the `base` path in `vite.config.js` to match the new repository name.

2. **Branch Name**: The automatic deployment assumes your default branch is `main`. If you use `master` or another branch name, update the workflow file.

3. **Custom Domain**: If you want to use a custom domain, add a `CNAME` file to the `public` folder with your domain name.

## Troubleshooting

- **404 errors**: Make sure the base path in `vite.config.js` matches your repository name
- **Assets not loading**: Check that all asset paths are relative and not absolute
- **Deployment fails**: Check the Actions tab in your GitHub repository for error logs

## Files Modified for GitHub Pages

- `package.json`: Added `predeploy` and `deploy` scripts
- `vite.config.js`: Added base path configuration
- `.github/workflows/deploy.yml`: GitHub Actions workflow for automatic deployment
- `public/.nojekyll`: Prevents Jekyll processing
