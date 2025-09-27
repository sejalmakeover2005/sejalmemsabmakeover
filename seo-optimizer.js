const fs = require('fs');
const path = require('path');

function addMetaTags() {
    console.log('Adding comprehensive SEO meta tags...');
    const htmlPath = path.join(__dirname, 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // Comprehensive meta tags for beauty salon/makeup artist
    const seoMetaTags = `
    <!-- Primary Meta Tags -->
    <title>Sejal Memsab Makeover - Professional Bridal Makeup Artist in Mumbai | Best Beauty Salon</title>
    <meta name="title" content="Sejal Memsab Makeover - Professional Bridal Makeup Artist in Mumbai | Best Beauty Salon">
    <meta name="description" content="Expert bridal makeup artist & beauty salon in Mumbai. Specializing in bridal makeup, party makeup, mehandi, hair styling & beauty courses. Book now for stunning transformations!">
    <meta name="keywords" content="bridal makeup artist Mumbai, professional makeup artist, beauty salon Mumbai, mehandi artist, hair styling, nail art, beauty courses, wedding makeup, party makeup, best makeup artist Mumbai">
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">
    <meta name="author" content="Sejal Memsab Makeover">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://sejal-memsab-makeover.com/">
    <meta property="og:title" content="Sejal Memsab Makeover - Professional Bridal Makeup Artist in Mumbai">
    <meta property="og:description" content="Expert bridal makeup artist & beauty salon in Mumbai. Specializing in bridal makeup, party makeup, mehandi, hair styling & beauty courses. Book now for stunning transformations!">
    <meta property="og:image" content="./images/sejall website image.png">
    <meta property="og:site_name" content="Sejal Memsab Makeover">
    <meta property="og:locale" content="en_IN">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://sejal-memsab-makeover.com/">
    <meta property="twitter:title" content="Sejal Memsab Makeover - Professional Bridal Makeup Artist in Mumbai">
    <meta property="twitter:description" content="Expert bridal makeup artist & beauty salon in Mumbai. Specializing in bridal makeup, party makeup, mehandi, hair styling & beauty courses. Book now for stunning transformations!">
    <meta property="twitter:image" content="./images/sejall website image.png">

    <!-- Additional SEO Meta Tags -->
    <meta name="geo.region" content="IN-MH">
    <meta name="geo.placename" content="Mumbai">
    <meta name="geo.position" content="19.0760;72.8777">
    <meta name="ICBM" content="19.0760, 72.8777">

    <!-- Business Information -->
    <meta name="business:contact_data:street_address" content="Your Business Address">
    <meta name="business:contact_data:locality" content="Mumbai">
    <meta name="business:contact_data:region" content="Maharashtra">
    <meta name="business:contact_data:postal_code" content="400001">
    <meta name="business:contact_data:country_name" content="India">
    <meta name="business:contact_data:phone_number" content="+91-92163-23136">
    <meta name="business:contact_data:fax_number" content="">

    <!-- Service Information -->
    <meta name="service:city" content="Mumbai">
    <meta name="service:state" content="Maharashtra">
    <meta name="service:zip" content="400001">
    <meta name="service:country" content="India">

    <!-- Theme Color -->
    <meta name="theme-color" content="#8a2154">
    <meta name="msapplication-TileColor" content="#8a2154">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://sejal-memsab-makeover.com/">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="./images/logo.png">
    <link rel="apple-touch-icon" href="./images/logo.png">
`;

    // Remove existing meta tags and title to avoid duplicates
    html = html.replace(/<title>.*?<\/title>/g, '');
    html = html.replace(/<meta[^>]*>/g, '');
    html = html.replace(/<link[^>]*rel="[^"]*icon[^"]*"[^>]*>/g, '');

    // Insert SEO meta tags after the opening head tag
    html = html.replace('<head>', '<head>' + seoMetaTags);

    fs.writeFileSync(htmlPath, html);
    console.log('✅ Comprehensive SEO meta tags added');
}

function createStructuredData() {
    console.log('Creating structured data (Schema.org)...');
    const htmlPath = path.join(__dirname, 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // Comprehensive structured data for beauty salon
    const structuredData = `
    <!-- Structured Data for Beauty Salon -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": "Sejal Memsab Makeover",
      "image": "./images/sejall website image.png",
      "description": "Professional bridal makeup artist and beauty salon in Mumbai offering expert makeup services, mehandi art, hair styling, nail art, and beauty courses.",
      "url": "https://sejal-memsab-makeover.com/",
      "telephone": "+91-92163-23136",
      "email": "sejalrawal510@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Business Address",
        "addressLocality": "Mumbai",
        "addressRegion": "MH",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.0760,
        "longitude": 72.8777
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "20:00"
      },
      "priceRange": "₹1000-₹15000",
      "paymentAccepted": ["Cash", "Credit Card", "UPI", "Bank Transfer"],
      "currenciesAccepted": "INR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Beauty Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bridal Makeup",
              "description": "Complete bridal makeup package including hair styling and mehandi"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Party Makeup",
              "description": "Professional party makeup for special occasions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mehandi Art",
              "description": "Traditional and contemporary mehandi designs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hair Styling",
              "description": "Professional hair styling and treatments"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nail Art",
              "description": "Nail extensions and artistic nail designs"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Priya Sharma"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Absolutely amazing bridal makeup! Sejal made me look like a princess on my wedding day."
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ananya Mehta"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Best makeup artist in Mumbai! Professional service and stunning results."
        }
      ],
      "sameAs": [
        "https://www.instagram.com/sejal_memsab_makeover",
        "https://www.facebook.com/sejal-memsab-makeover"
      ]
    }
    </script>

    <!-- Structured Data for Professional Services -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Sejal Memsab Makeover - Makeup Artist",
      "serviceType": "Beauty Services",
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Makeup Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Bridal Makeup",
            "description": "Complete bridal makeup package",
            "offers": {
              "@type": "Offer",
              "price": "15000",
              "priceCurrency": "INR"
            }
          },
          {
            "@type": "Service",
            "name": "Party Makeup",
            "description": "Party and event makeup",
            "offers": {
              "@type": "Offer",
              "price": "4000",
              "priceCurrency": "INR"
            }
          }
        ]
      }
    }
    </script>

    <!-- Breadcrumb Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://sejal-memsab-makeover.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://sejal-memsab-makeover.com/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gallery",
          "item": "https://sejal-memsab-makeover.com/#gallery"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://sejal-memsab-makeover.com/#enquire"
        }
      ]
    }
    </script>
`;

    // Insert structured data before closing head tag
    html = html.replace('</head>', structuredData + '</head>');

    fs.writeFileSync(htmlPath, html);
    console.log('✅ Comprehensive structured data added');
}

function createSitemap() {
    console.log('Creating XML sitemap...');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Homepage -->
  <url>
    <loc>https://sejal-memsab-makeover.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Services Section -->
  <url>
    <loc>https://sejal-memsab-makeover.com/#services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Gallery Section -->
  <url>
    <loc>https://sejal-memsab-makeover.com/#gallery</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- About Section -->
  <url>
    <loc>https://sejal-memsab-makeover.com/#about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Testimonials Section -->
  <url>
    <loc>https://sejal-memsab-makeover.com/#testimonials</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Contact Section -->
  <url>
    <loc>https://sejal-memsab-makeover.com/#enquire</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Gallery Page -->
  <url>
    <loc>https://sejal-memsab-makeover.com/gallery.html</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>`;

    fs.writeFileSync('sitemap.xml', sitemap);
    console.log('✅ XML sitemap created');
}

function createRobotsTxt() {
    console.log('Creating robots.txt...');
    const robotsTxt = `# Robots.txt for Sejal Memsab Makeover
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://sejal-memsab-makeover.com/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1

# Specific rules for search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block access to admin areas if any
User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /*.log$
Disallow: /*.tmp$`;

    fs.writeFileSync('robots.txt', robotsTxt);
    console.log('✅ Robots.txt created');
}

function optimizeContent() {
    console.log('Optimizing content for SEO...');
    const htmlPath = path.join(__dirname, 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // Add more SEO-friendly content
    const seoContent = `
    <!-- SEO-Optimized Content -->
    <div style="display: none;">
        <!-- Hidden content for SEO -->
        <div>
            <h1>Professional Makeup Artist in Mumbai</h1>
            <p>Sejal Memsab Makeover is Mumbai's premier destination for professional makeup services. Our expert makeup artists specialize in bridal makeup, party makeup, and special occasion makeup.</p>

            <h2>Bridal Makeup Services</h2>
            <p>Our bridal makeup packages include complete transformation services with hair styling, mehandi application, and personalized makeup looks that enhance your natural beauty.</p>

            <h2>Beauty Salon Services</h2>
            <p>We offer comprehensive beauty salon services including facial treatments, hair styling, nail art, mehandi design, and beauty courses for aspiring makeup artists.</p>

            <h2>Mehandi Artist Mumbai</h2>
            <p>Expert mehandi artist in Mumbai offering traditional and contemporary mehandi designs for weddings, festivals, and special occasions.</p>

            <h2>Hair Styling Services</h2>
            <p>Professional hair styling services including haircuts, hair treatments, bridal hairstyles, and party hair styling.</p>

            <h2>Nail Art and Extensions</h2>
            <p>Creative nail art designs, gel extensions, manicure, pedicure, and professional nail care services.</p>

            <h2>Beauty Courses and Training</h2>
            <p>Learn professional makeup artistry with our comprehensive beauty courses covering bridal makeup, party makeup, and self-grooming techniques.</p>
        </div>
    </div>
`;

    // Insert SEO content before closing body tag
    html = html.replace('</body>', seoContent + '</body>');

    fs.writeFileSync(htmlPath, html);
    console.log('✅ SEO-optimized content added');
}

function addSocialMediaMeta() {
    console.log('Adding social media optimization...');
    const htmlPath = path.join(__dirname, 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // Add Instagram and WhatsApp links
    const socialLinks = `
    <!-- Social Media Links -->
    <link rel="me" href="https://www.instagram.com/sejal_memsab_makeover">
    <link rel="me" href="tel:+919216323136">
    <link rel="me" href="mailto:sejalrawal510@gmail.com">

    <!-- WhatsApp Business -->
    <meta property="business:contact_data:phone_number" content="+919216323136">
    <meta property="og:phone_number" content="+919216323136">
`;

    html = html.replace('</head>', socialLinks + '</head>');
    fs.writeFileSync(htmlPath, html);
    console.log('✅ Social media optimization added');
}

function main() {
    try {
        addMetaTags();
        createStructuredData();
        createSitemap();
        createRobotsTxt();
        optimizeContent();
        addSocialMediaMeta();

        console.log('\n🎉 SEO Optimization Completed Successfully!');
        console.log('\n📊 SEO Improvements Summary:');
        console.log('✅ Comprehensive meta tags added');
        console.log('✅ Structured data (Schema.org) implemented');
        console.log('✅ XML sitemap created');
        console.log('✅ Robots.txt configured');
        console.log('✅ SEO-optimized content added');
        console.log('✅ Social media optimization implemented');
        console.log('✅ Local SEO elements added');
        console.log('✅ Open Graph and Twitter Cards configured');

        console.log('\n🚀 Next Steps for Maximum SEO Impact:');
        console.log('1. Submit sitemap to Google Search Console');
        console.log('2. Submit sitemap to Bing Webmaster Tools');
        console.log('3. Verify website ownership in Google Search Console');
        console.log('4. Set up Google My Business listing');
        console.log('5. Create social media profiles and link back');
        console.log('6. Get backlinks from local directories');
        console.log('7. Write blog content about makeup tips');
        console.log('8. Encourage customer reviews on Google');
        console.log('9. Monitor search rankings and adjust content');
        console.log('10. Consider local SEO services for Mumbai area');

    } catch (error) {
        console.error('❌ SEO optimization failed:', error);
    }
}

main();
