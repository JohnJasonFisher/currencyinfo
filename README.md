# Currency Info

https://currencyinfo.vercel.app/

A personal project to track my currency collection. I will also add useful links and information about coins and banknotes.

## How does this project work?

This app is developed using svelte. It uses vite under the hood as documented at svelte's docs. The app is deployed using Vercel.

## What's next?

- Reduce the image 'pop' while images are loading, so that the page doesn't jump around and disorient the user.
- Consolidate all price data into one redis hash, so that it's easier to query and update.
- Convert this project to typescript.
- Redesign the UI. (I'm not a designer, so I'm open to suggestions)
- Select and display different versions of the same currency, so you can see how it has changed over time.

## How to deploy?

1. Setup the repo by cloning it and installing the dependencies.
2. Commit and push to the `main` branch.
3. The app will be deployed automatically by Vercel.
