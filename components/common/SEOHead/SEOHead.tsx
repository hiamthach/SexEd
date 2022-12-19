import NextHead from 'next/head';

/**
 * SEO Head component
 */

interface Props {
  seoTitle?: string;
  children?: JSX.Element;
}

const defaultMeta = {
  seoTitle: 'SXus',
  siteName: 'SXus',
};

export const SEOHead = ({ seoTitle, children }: Props) => {
  const meta = {
    ...defaultMeta,
    seoTitle,
  };

  return (
    <NextHead>
      <title>{meta.seoTitle}</title>
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keyword" content="SXus" />
      <meta charSet="utf-8" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:title" content={meta.seoTitle} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      {children}
    </NextHead>
  );
};

export default SEOHead;
