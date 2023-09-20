/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript :{
      ignoreDuringBuilds : true,
    },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn-images-1.medium.com",
          },
          {
            protocol: "https",
            hostname: "images.clerk.dev",
          },
          {
            protocol: "https",
            hostname: "uploadthing.com",
          },
          {
            protocol: "https",
            hostname: "placehold.co",
          },
          {
            protocol: "https",
            hostname: "utfs.io",
          },
        ],
      },
    };
    
    module.exports = nextConfig;