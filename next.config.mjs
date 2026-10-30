/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // emit plain HTML/CSS/JS to ./out on `next build`
  basePath: '/disguise', // omit if deploying to username.github.io or a custom domain
  images: { unoptimized: true }, // the default image optimizer needs a server
  trailingSlash: true,       // optional: /about → /about/index.html, avoids 404s on refresh
};

export default nextConfig;