[![Azure Static Web Apps CI/CD](https://github.com/speaktosteve/nextjs-azure-static-web-app-accelerator/actions/workflows/azure-static-web-apps.yml/badge.svg)](https://github.com/speaktosteve/nextjs-azure-static-web-app-accelerator/actions/workflows/azure-static-web-apps.yml)

Its primary goal of this repo is to provide a simple Next JS application (using App Routes) along with an example Azure Dev Ops pipeline and GitHub action to provide ability to deploy the app to an [Azure Static Web App](https://azure.microsoft.com/en-us/products/app-service/static/). See [Deploy on Azure Static Web Apps](#deploy-on-azure-static-web-apps) for instructions on deployments.

It also includes:

- Unit tests using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Storybook [Storybook](https://storybook.js.org/docs/react/get-started/why-storybook)

## Table of Contents

- [The Next.js App](#the-nextjs-app)
  - [Getting Started](#getting-started)
  - [Structure](#structure)
  - [Unit Tests](#unit-tests)
  - [Storybook](#storybook)
- [Deploy on Azure Static Web Apps](#deploy-on-azure-static-web-apps)
- [Learn More About Next.js](#learn-more-about-nextjs)

## The Next.js App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Styling

This app leverages PostCSS and Tailwind. There are the beginnings of a theme in [src/styles/globals.css](src/styles/globals.css)

### Structure

📦
┣ 📂 docs (assets referenced by this readme)
┣ 📂 src
┃ ┣ 📂 app
┃ ┃ ┣ 📂 components (contains page-specific and shared components)
┃ ┃ ┃ ┣ 📂 shared (shared components)
┃ ┣ 📂 hooks (contains React hooks for reusable functionality)
┃ ┣ 📂 images (contains pngs etc)
┃ ┣ 📂 styles (contains CSS files)
┃ ┣ 📂 types (TS types)

### Unit Tests

Component tests using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/) sit next to the corresponding component file, e.g. [Spinner.test.tsx](./src/app/components/shared/Spinner.test.tsx).

Unit tests can be run using `npm run test` and are also ran as part of the CI/CD pipeline.

### Storybook

This app includes [Storybook](https://storybook.js.org/docs/react/get-started/why-storybook) to provide a component library, presenting each component along with documentation outside of any business logic or context.

"Storybook is packaged as a small, development-only, workshop that lives alongside your app. It provides an isolated iframe to render components without interference from app business logic and context. That helps you focus development on each variation of a component, even the hard-to-reach edge cases."

Each component is described by a 'story' which displays the component and its variations/states. For example [Spinner.stories.ts](./src/app/components/shared/Spinner.stories.ts) sits next to the [Spinner.tsx](./src/app/components/shared/Spinner.tsx) component file in the folder structure.
You can view the Storybook component library by running `npm run storybook` and browsing the library at http://localhost:6006/.

## Deploy on Azure Static Web Apps

Deploying the app is simple, firstly create a new Azure Static Web App - see https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript&pivots=github

As this repo includes a working GitHub action and ADO pipeline you can skip the repository integration step and choose 'Other'

![deployment choice](docs/deployment-choice.png?raw=true 'Deployment choice')

In order to allow either the ADO pipeline, or the GitHub action to connect to your new app you will need to acquire the deployment token and add it as a variable.

- if wish to use the GitHub Action then you will need to add the deployment token as a repository secret called AZURE_STATIC_WEB_APPS_API_TOKEN
  ![github repository secret](docs/github-repository-secret.png?raw=true 'GitHub repository secret')
- if you wish to use the Azure DevOps pipeline then you will need to add the deployment token as a variable called AZURE_STATIC_WEB_APPS_API_TOKEN in a variable group named 'ui-variables'
  ![ado variable](docs/ado-variables.png?raw=true 'ADO variable')
- an optional BUILD_VERSION can be added, mapped to the $(Build.BuildNumber) variable. This will be rendered on the /config page on the app to help inform the user as to what version of the app has been deployed.

## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
