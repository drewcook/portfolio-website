# Portfolio

This is the code for my online portfolio hosted at [https://dco.dev](https://dco.dev).

It's hosted on Amazon Web Services:

- S3 for holding the statically-generated site assets
- Route 53 for DNS
- Cloudfront for caching and distribution
- Lamda serverless functions for response header inception

### Tech Stack

- Built within the [Nuxt.js](https://nuxtjs.org) framework and written in [Vue](https://v3.vuejs.org).

- Incorporates the [Vuetify](https://vuetifyjs.com/) component library for a Material Design-based theme.

- Incorporates the use of [Vue transitions](https://v1.vuejs.org/guide/transitions.html) in combination with [Animate.css](https://animate.style/) for a more interesting user experience.

- Contains [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/), and [Prettier](https://prettier.io/) linting packages.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

<p align="center">
 <img src="https://visitor-badge.glitch.me/badge?page_id=drewcook.portfolio-website" alt="visitor count"/>
</p>
