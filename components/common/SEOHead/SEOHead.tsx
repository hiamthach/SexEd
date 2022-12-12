import NextHead from 'next/head';
import { useRouter } from 'next/router';

/**
 * SEO Head component
 */

interface Props {
  seoTitle?: string;
  children?: JSX.Element;
}

const defaultMeta = {
  seoTitle: 'Band',
  siteName: 'Band',
};

export const SEOHead = ({ seoTitle, children }: Props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    seoTitle,
  };

  return (
    <NextHead>
      <title>{meta.seoTitle}</title>
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keyword" content="Topebox Game" />
      <meta charSet="utf-8" />
      {/* Open Graph */}

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
