import Head from "next/head";
import HeaderAbout from '@/components/about/HeaderAbout';
import CompanyHighLight from '@/components/about/CompanyHighLight';
import TeamSection from '@/components/about/TeamSection';
import CertificatesSection from '@/components/about/CertificatesSection';
import CareersSection from '@/components/about/CareersSection';
import FeedBack from '@/components/FeedBack';
import StructuredDataAbout from '@/components/SEO/StructuredDataAbout';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Digital Marketing Agency Team | 2Clients</title>
        <meta name="description" content="Learn about 2Clients digital marketing agency. Our experienced team specializes in web development, SEO, and digital strategy to help businesses grow online." />
        <meta name="keywords" content="about 2clients, digital marketing agency, web development team, SEO experts, digital strategy consultants, company history" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2clients.com/about" />
        <meta property="og:title" content="About Us - Digital Marketing Agency | 2Clients" />
        <meta property="og:description" content="Learn about 2Clients digital marketing agency and our experienced team." />
        <meta property="og:image" content="https://2clients.com/about-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://2clients.com/about" />
        <meta name="twitter:title" content="About Us - Digital Marketing Agency | 2Clients" />
        <meta name="twitter:description" content="Learn about 2Clients digital marketing agency and our experienced team." />
        <meta name="twitter:image" content="https://2clients.com/about-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://2clients.com/about" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="2Clients" />
        <meta name="language" content="English" />
      </Head>
      
      <main>
        <StructuredDataAbout />
        <HeaderAbout/>
        <CompanyHighLight/>
        <TeamSection/>
        <CertificatesSection/>
        <CareersSection/>
        <FeedBack/>
      </main>
    </>
  );
}
