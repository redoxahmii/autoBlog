/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "enews.hamariweb.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.tribune.com.pk",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
