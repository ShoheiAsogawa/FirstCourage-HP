/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/FirstCourage-HP' : '';

const nextConfig = {
      output: 'export',
      basePath,
      assetPrefix: basePath,
      env: {
              NEXT_PUBLIC_BASE_PATH: basePath,
      },
      images: {
              unoptimized: true,
      },
};

export default nextConfig;
