/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
		config.resolve.modules.push(__dirname + 'src'); // 추가
		return config;
	},
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
