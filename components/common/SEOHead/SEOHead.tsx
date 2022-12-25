import NextHead from 'next/head';

/**
 * SEO Head component
 */

interface Props {
  seoTitle?: string;
  children?: JSX.Element;
  description?: string;
}

const defaultMeta = {
  seoTitle: 'SXus',
  siteName: 'SXus',
  description: 'Trang cung cấp thông tin và trắc nghiệm về giáo dục giới tính toàn diện',
};

export const SEOHead = ({ seoTitle, description, children }: Props) => {
  const meta = {
    ...defaultMeta,
    seoTitle,
    description,
  };

  return (
    <NextHead>
      <title>{meta.seoTitle}</title>
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keyword" content="SXus" />
      <meta name="description" content={meta.description} />
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
