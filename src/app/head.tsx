export default function Head() {
  return (
    <>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <meta name="description" content="사용자 맞춤 매물 추천 구해줘, 홈즈!" />
      <meta name="keywords" content="부동산, 집 구하기, 매물 추천" />
      <meta property="og:title" content="구해줘, 홈즈" />
      <meta
        property="og:description"
        content="사용자 맞춤 매물 추천 구해줘, 홈즈!"
      />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}`}
      />
      <meta property="og:site_name" content="구해줘, 홈즈" />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/images/system/thumbnail.png`}
      />
      <meta property="og:locale" content="ko" />
      <meta property="og:type" content="website" />
      <link
        rel="icon"
        href={`${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/images/system/favicon.ico`}
      />
      <link
        rel="apple-touch-icon"
        href={`${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/images/system/favicon.png`}
      />
      <title>구해줘, 홈즈</title>
    </>
  );
}
