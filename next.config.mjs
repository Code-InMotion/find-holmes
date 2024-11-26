/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // 모든 경로에 적용
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' https://dapi.kakao.com; object-src 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
