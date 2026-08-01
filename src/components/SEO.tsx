import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  pageName?: string;
  faqItems?: Array<{ question: string; answer: string }>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'Maa Durga Medical Hall, pharmacy in Paliganj, medical store Sonari Gali, genuine medicines Paliganj, WhatsApp medicine order',
  canonicalUrl,
  pageName = 'Home',
  faqItems,
}) => {
  const currentUrl = canonicalUrl || window.location.href;

  useEffect(() => {
    // Page Title
    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Meta Keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.setAttribute('name', 'keywords');
      document.head.appendChild(metaKw);
    }
    metaKw.setAttribute('content', keywords);

    // Canonical Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', currentUrl);

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Maa Durga Medical Hall' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
    ];

    ogTags.forEach(tag => {
      let el = document.querySelector(`meta[property="${tag.property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', tag.property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', tag.content);
    });

    // LocalBusiness Schema (JSON-LD)
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      'name': 'माँ दुर्गा मेडिकल हॉल (Maa Durga Medical Hall)',
      'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
      'telephone': '+917542846888',
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '8RG3+583, Sonari Gali',
        'addressLocality': 'Paliganj',
        'addressRegion': 'Bihar',
        'postalCode': '801110',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '25.3211',
        'longitude': '84.8122'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          'opens': '07:00',
          'closes': '22:00'
        }
      ],
      'url': currentUrl,
      'paymentAccepted': 'Cash, UPI, PhonePe, Google Pay, Paytm, Cards'
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin
        },
        ...(pageName !== 'Home' ? [{
          '@type': 'ListItem',
          'position': 2,
          'name': pageName,
          'item': currentUrl
        }] : [])
      ]
    };

    let scriptLd = document.getElementById('jsonld-schema');
    if (!scriptLd) {
      scriptLd = document.createElement('script');
      scriptLd.id = 'jsonld-schema';
      scriptLd.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptLd);
    }
    
    let combinedSchemas: any[] = [localBusinessSchema, breadcrumbSchema];

    if (faqItems && faqItems.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqItems.map(item => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer
          }
        }))
      };
      combinedSchemas.push(faqSchema);
    }

    scriptLd.textContent = JSON.stringify(combinedSchemas);

  }, [title, description, keywords, currentUrl, pageName, faqItems]);

  return null;
};
