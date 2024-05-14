/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:"prod-api.mediaexpert.pl",
        port: '',
       
      },
      {
        protocol: 'https',
        hostname:"randomuser.me",
        port: '',
       
      },
      {
        protocol: 'https',
        hostname:"cdn.pixabay.com",
        port: '',
       
      },
      {
        protocol: 'https',
        hostname:"plus.unsplash.com",
        port: '',
       
      },
      {
        protocol: 'https',
        hostname:"images.unsplash.com",
        port: '',
       
      },
      {
        protocol: 'https',
        hostname:"media.istockphoto.com",
        port: '',
       
      },
    ],
  },
};

export default nextConfig;
