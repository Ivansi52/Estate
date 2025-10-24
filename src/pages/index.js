import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import FirstBlock from '@/components/FirstBlock'
import SecondBlockMainPage from '@/components/SecondBlockMainPage';
import ThirdBlockMainPage from '@/components/ThirdBlockMainPage';
import CalculatorBlock from "@/components/CalculatorBlock";
import FourthSection from "@/components/FourthSectionMainPage";
import ProjectStages from '@/components/ProjectStages';
import SixthSection from "@/components/SixthSection";
import TrustedBlock from "@/components/TrustedBlock";
import FeedBack from "@/components/FeedBack";

export default function Home() {
  return (
    <>
    <Head>
      <title>2Clients - Digital Marketing Agency | Web Development & SEO</title>
      <meta name="description" content="Professional digital marketing agency specializing in web development, SEO, and digital strategy. Transform your business with our full-cycle digital solutions." />
      <meta name="keywords" content="digital marketing, web development, SEO, digital agency, marketing strategy" />
      <meta property="og:title" content="2Clients - Digital Marketing Agency" />
      <meta property="og:description" content="Professional digital marketing agency specializing in web development, SEO, and digital strategy." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://2clients.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="2Clients - Digital Marketing Agency" />
      <meta name="twitter:description" content="Professional digital marketing agency specializing in web development, SEO, and digital strategy." />
    </Head>
    <FirstBlock/>
    <SecondBlockMainPage/>
    <ThirdBlockMainPage/>
    <CalculatorBlock/>
    <FourthSection sectionNumber='04' />
    <ProjectStages/>
    <SixthSection/>
    <TrustedBlock number="07"/>
    <FeedBack/>
    </>
  );
}
