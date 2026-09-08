/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [{ source: '/cars', destination: '/' }, { source: '/cars/:path*', destination: '/' }, { source: '/compare', destination: '/' }, { source: '/emi-calculator', destination: '/' }, { source: '/test-drive', destination: '/' }, { source: '/saved', destination: '/' }, { source: '/bookings', destination: '/' }]
  },
}

export default nextConfig
