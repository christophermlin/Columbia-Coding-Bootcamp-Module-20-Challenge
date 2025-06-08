# 20 CI-CD: GitHub Actions CI/CD Setup

## Overview
This project demonstrates a full CI/CD pipeline for a MERN stack application using GitHub Actions and Render. It includes:
- Cypress component tests run on every pull request to the `develop` branch
- Automatic deployment to Render when code is merged to the `main` branch

## User Story
```
AS A developer looking to integrate a pipeline in a codebase for continuous integration and deployment,
I WANT to create a GitHub Action that will follow best practices by running test cases when a Pull Request is made to the develop branch
SO THAT I can ensure that all code integrations are clean and pass the proper requirements.

AS A developer looking to deploy the application automatically to Render when code is merged from develop to main,
I WANT to create a GitHub Action that will run when the code is merged to main and automatically deploys to Render
SO THAT the application is constantly updated when major releases are made to the main branch.
```

## Acceptance Criteria
- PRs to `develop` run Cypress component tests via GitHub Actions
- Merges to `main` trigger a GitHub Action that deploys to Render
- Both workflows are defined in `.github/workflows/`
- Application is deployed and loads with no errors
- Repository has both `main` and `develop` branches

## Setup & Usage
1. **Push code to GitHub and create `develop` and `main` branches.**
2. **Configure Render deploy hook:**
   - Deploy your app to Render and turn off Auto-Deploy
   - Copy the Deploy Hook URL
   - Add it as a GitHub secret named `RENDER_DEPLOY_HOOK_URL`
3. **CI Workflow:**
   - On PR to `develop`, `.github/workflows/ci.yml` runs Cypress component tests
4. **CD Workflow:**
   - On push to `main`, `.github/workflows/deploy.yml` triggers Render deploy hook

## Example Workflow Files
- `.github/workflows/ci.yml` (Cypress tests on PR to develop)
- `.github/workflows/deploy.yml` (Deploy to Render on push to main)

## Resources
- [Render Deploy Hooks](https://docs.render.com/deploy-hooks)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Cypress Docs](https://docs.cypress.io/)

## Grading Requirements
- Application is deployed at a live URL
- GitHub repo contains code, workflows, and a README with a screenshot and deployed link
- All tests pass and workflows run as described

---
© 2025 Your Name. All Rights Reserved.
