/** @type {import('next').NextConfig} */
import path from 'path'

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname)
        }
        return config
    }
}

module.exports = nextConfig
