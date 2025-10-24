import FeedBack from '@/components/FeedBack';
import Header from '@/components/Services/HeaderServices';
import FilterButtons from '@/components/services/FilterButtons';
import ThirdBlock from '@/components/FourthSectionMainPage'
import ServicesGrid from '@/components/services/ServicesGrid';
import FAQ from '@/components/services/FAQ';
import ChoiceSection from '@/components/services/ChoiceSection';
import FullCycleCare from '@/components/services/FullCycleCare';
// import AwardsSlider from '@/components/AwardsSlider';

export default function Services() {
  return (
    <main>
      <Header />
      <ServicesGrid/>
      <FullCycleCare/>
      <ThirdBlock sectionNumber='03'/>
      <ChoiceSection/>
      <FAQ/>
      <FeedBack/>
    </main>
  );
}