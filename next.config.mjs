/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org'],
      },
};

import withVideos from 'next-videos';

export default withVideos(nextConfig)