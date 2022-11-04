import Head from "next/head";

export default function SEO() {
  const seo = {
    title: "The Type Wunderkammer",
    description: "A simple online archive of type related objects",
    url: "https://thetypewunderkammer.com",
  };
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="icon" href="/favicon.svg" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
    </Head>
  );
}
