# 20 CI-CD: GitHub Actions CI/CD Solution

## Overview

This project demonstrates a fullstack web application with a robust CI/CD pipeline using GitHub Actions. The pipeline ensures code quality and automates deployment to Render, following best practices for modern software development.

## Features

- **Continuous Integration (CI):**
  - All new features are developed in feature branches and merged into the `develop` branch via Pull Requests.
  - When a Pull Request is created to the `develop` branch, a GitHub Action is triggered to run Cypress component tests, ensuring code quality before merging.
  - Test results are visible in the GitHub Actions tab for easy review.

- **Continuous Deployment (CD):**
  - When code is merged from `develop` to the `main` branch, another GitHub Action is triggered to automatically deploy the application to Render using a secure deploy hook.
  - This ensures the live application is always up-to-date with the latest stable code.

## Branching Workflow

- All feature development occurs in separate branches, which are merged into `develop` via Pull Requests.
- Only the `develop` branch is merged into `main` for production releases.
- This workflow ensures a clean, stable main branch and facilitates easy integration and testing.

## CI/CD Implementation

### 1. Cypress Tests on Pull Request to `develop`
- **Trigger:** Pull Request to `develop` branch
- **Action:** Runs Cypress component tests using the configuration in `Develop/cypress.config.ts`.
- **Result:** Test results are displayed in the GitHub Actions tab. Code can only be merged if tests pass.

### 2. Automatic Deployment to Render on Merge to `main`
- **Trigger:** Push/merge to `main` branch
- **Action:** Triggers a deploy hook to Render, automatically deploying the latest code.
- **Result:** The application is updated at the live URL with no manual intervention.


## Getting Started

1. **Clone the repository and install dependencies:**
   - Run `npm run install` from the `Develop` directory to install both client and server dependencies.
2. **Set up Render deployment:**
   - Deploy the application to Render and MongoDB Atlas as described in the [Render and MongoDB deployment guide](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-render-and-mongodb-atlas).
   - In Render, turn off Auto-Deploy and copy the Deploy Hook URL.
   - Add the Deploy Hook URL as a secret (`RENDER_DEPLOY_HOOK_URL`) in your GitHub repository settings.
3. **Branching:**
   - Create a `develop` branch for all feature integrations.
   - Only merge `develop` into `main` for production releases.
4. **CI/CD Workflows:**
   - Two YAML files in `.github/workflows/` handle CI and CD:
     - `ci-cypress.yml`: Runs Cypress tests on PRs to `develop`.
     - `deploy-render.yml`: Deploys to Render on merge to `main`.

## Deployment

- **Live Application URL:** [Add your Render deployment URL here]
- **GitHub Repository URL:** [Add your GitHub repository URL here]

---

© 2025 Christopher Lin. All Rights Reserved.
