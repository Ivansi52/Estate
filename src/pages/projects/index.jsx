import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ProjectPageHeader from "@/components/portfolio/ProjectPageHeader";
import FilterBar from "@/components/portfolio/FilterBar";
import ProjectCards from "@/components/portfolio/ProjectsGrid";
import TrustedBlock from "@/components/TrustedBlock";
import FeedBack from "@/components/FeedBack";
import StructuredDataPortfolio from "@/components/SEO/StructuredDataPortfolio";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Portfolio - Web Development Projects & Case Studies | 2Clients</title>
        <meta name="description" content="Explore our portfolio of successful web development projects, e-commerce solutions, and digital marketing campaigns. See how we've helped businesses grow online." />
        <meta name="keywords" content="web development portfolio, case studies, e-commerce projects, website design, digital marketing campaigns, web design examples" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2clients.com/projects" />
        <meta property="og:title" content="Portfolio - Web Development Projects | 2Clients" />
        <meta property="og:description" content="Explore our portfolio of successful web development projects and digital marketing campaigns." />
        <meta property="og:image" content="https://2clients.com/projects-og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://2clients.com/projects" />
        <meta name="twitter:title" content="Portfolio - Web Development Projects | 2Clients" />
        <meta name="twitter:description" content="Explore our portfolio of successful web development projects and digital marketing campaigns." />
        <meta name="twitter:image" content="https://2clients.com/projects-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://2clients.com/projects" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="2Clients" />
        <meta name="language" content="English" />
      </Head>
      
      <main>
        <StructuredDataPortfolio />
        <ProjectPageHeader/>
        <FilterBar/>
        <ProjectCards/>
        <TrustedBlock number="02"/>
        <FeedBack/>
      </main>
    </>
  );
}
