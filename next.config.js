/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages can only host static files. `output: 'export'` makes Next emit `out/`.
  output: "export",
  // Produce `/contact/index.html` style paths.
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // This keeps exported markup simple (no image optimization server).
    unoptimized: true,
  },
};

module.exports = nextConfig;

