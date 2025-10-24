import HeaderAbout from '@/components/about/HeaderAbout';
import CompanyHighLight from '@/components/about/CompanyHighLight';
import TeamSection from '@/components/about/TeamSection';
import CertificatesSection from '@/components/about/CertificatesSection';
import CareersSection from '@/components/about/CareersSection';
import FeedBack from '@/components/FeedBack';

export default function AboutPage() {
  return (
    <>
      <HeaderAbout/>
      <CompanyHighLight/>
      <TeamSection/>
      <CertificatesSection/>
      <CareersSection/>
      <FeedBack/>
    </>
  );
}
