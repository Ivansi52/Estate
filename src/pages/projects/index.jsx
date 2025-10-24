import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ProjectPageHeader from "@/components/portfolio/ProjectPageHeader";
import FilterBar from "@/components/portfolio/FilterBar";
import ProjectCards from "@/components/portfolio/ProjectsGrid";
import TrustedBlock from "@/components/TrustedBlock";
import FeedBack from "@/components/FeedBack";


export default function Projects() {
  return (
    <>
    <ProjectPageHeader/>
    <FilterBar/>
    <ProjectCards/>
    <TrustedBlock number="02"/>
    <FeedBack/>
    </>
  );
}
