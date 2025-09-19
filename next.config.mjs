/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: false,
    },
    images: {
        remotePatterns: [new URL('https://d1b82hscw3e9o2.cloudfront.net/**')],
    },
};

export default nextConfig;
