/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/dashboard",
  // output: "export",
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/dashboard',
        destination: '/',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
