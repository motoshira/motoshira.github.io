/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	distDir: "./dist", // Changes the build output directory to `./dist/`.
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
