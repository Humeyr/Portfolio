/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {nextConfig,
env:{
  NEXT_PUBLIC_GRAPHCMS_URL: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
}}
