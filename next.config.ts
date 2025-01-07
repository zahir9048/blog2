import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
        {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            pathname: '**',
        }
    ]
}
};

export default nextConfig;
