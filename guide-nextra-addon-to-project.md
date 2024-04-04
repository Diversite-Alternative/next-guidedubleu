

## Install
To create a Nextra Docs site manually, you have to install Next.js, React, Nextra, and Nextra Docs Theme. In your project directory, run the following command to install the dependencies:
```bash
# react-dom
# npm i next react react-dom nextra nextra-theme-docs 
npm i next react nextra nextra-theme-docs

npm install nextra
npm install nextra-theme-docs

npm uninstall nextra 
npm uninstall nextra-theme-docs 
```

Add the following scripts in package.json:

```json
// package.json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

## Add Next.js Config
Create the following next.config.js file in your project’s root directory:

```js
// next.config.js or next.config.mjs 
const `ithNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
 
module.exports = withNextra()
 
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
```


## Create Docs Theme Config
Lastly, create the corresponding theme.config.jsx file in your project’s root directory. This will be used to configure the Nextra Docs theme:

```js
// theme.config.jsx 
export default {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: 'https://github.com/shuding/nextra'
  }
  // ... other theme options
}
```


## Ready to Go!
Now, you can create your first MDX page as pages/index.mdx:
```bash
mkdir pages
touch pages/index.mdx 