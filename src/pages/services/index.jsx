import Head from "next/head";
import FeedBack from '@/components/FeedBack';
import Header from '@/components/services/HeaderServices';
import FilterButtons from '@/components/services/FilterButtons';
import ThirdBlock from '@/components/FourthSectionMainPage'
import ServicesGrid from '@/components/services/ServicesGrid';
import FAQ from '@/components/services/FAQ';
import ChoiceSection from '@/components/services/ChoiceSection';
import FullCycleCare from '@/components/services/FullCycleCare';
import StructuredDataServices from '@/components/SEO/StructuredDataServices';

export default function Services() {
  return (
    <>
      <Head>
        <title>Digital Marketing Services - Web Development & SEO | 2Clients</title>
        <meta name="description" content="Professional digital marketing services including web development, SEO, e-commerce solutions, and digital strategy. Full-cycle care for your business growth." />
        <meta name="keywords" content="digital marketing services, web development, SEO services, e-commerce development, digital strategy, web design, online marketing" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2clients.com/services" />
        <meta property="og:title" content="Digital Marketing Services - 2Clients" />
        <meta property="og:description" content="Professional digital marketing services including web development, SEO, and digital strategy." />
        <meta property="og:image" content="https://2clients.com/services-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://2clients.com/services" />
        <meta name="twitter:title" content="Digital Marketing Services - 2Clients" />
        <meta name="twitter:description" content="Professional digital marketing services including web development, SEO, and digital strategy." />
        <meta name="twitter:image" content="https://2clients.com/services-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://2clients.com/services" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="2Clients" />
        <meta name="language" content="English" />
      </Head>
      
      <main>
        <StructuredDataServices />
        <Header />
        <ServicesGrid/>
        <FullCycleCare/>
        <ThirdBlock sectionNumber='03'/>
        <ChoiceSection/>
        <FAQ/>
        <FeedBack/>
      </main>
    </>
  );
}