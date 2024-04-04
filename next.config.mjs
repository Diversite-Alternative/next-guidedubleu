import  nextra  from 'nextra';
/** @type {import('next').NextConfig} */
const nextConfig = {};

// export default nextConfig;

// const withNextra = require("nextra")({
// 	theme: "nextra-theme-docs",
// 	themeConfig: "./theme.config.tsx",
// });

// module.exports = withNextra({
// 	images: {
// 		domains: ["images.unsplash.com"],
// 	},
// });


//import 'nextra-theme-docs/style.css'; // Import the default CSS for the nextra theme

// const nextConfig = {};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx'
});

export default withNextra(nextConfig);


