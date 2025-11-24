import React from 'react';
import { Helmet } from 'react-helmet';
interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  jsonLd?: object;
}
export function SEO({
  title,
  description,
  image = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
  url = 'https://anuradhapura-heritage.com',
  type = 'website',
  jsonLd
}: SEOProps) {
  const fullTitle = title.includes('Anuradhapura') ? title : `${title} | Anuradhapura — Ancient City of Sri Lanka`;
  return <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>;
}