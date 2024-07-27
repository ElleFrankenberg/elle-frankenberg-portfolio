/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAIN_CONTENT_TOKEN: process.env.NEXT_PUBLIC_MAIN_CONTENT_TOKEN,
    NEXT_PUBLIC_PROJECTS_TOKEN: process.env.NEXT_PUBLIC_PROJECTS_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
