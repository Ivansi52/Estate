// data/cards.js
import home_photo from '@/images/home_photo.png';
import rewies_logo from '@/images/rewies_logo.png';
const cards = [
  {
    id: 1,
    photo: home_photo,
    logo: rewies_logo,
    name: 'Eduard Menshikov, Company Director',
    description:
      `Expertise, attention to detail, and business understanding are exactly what’s needed for successful SEO promotion in Moscow. Thanks to the professionalism and technical expertise of 2Clients, we saw a growth in conversions and a significant increase in the number of inquiries within just three months of work.`,
    tag: 'Cut Ad Spend by 40%',
    caseLink: 'See the case',
    categories: ['Goals', 'Results']
  },
  {
    id: 2,
    photo: home_photo,
    logo: rewies_logo,
    name: 'Anna Petrova, Marketing Head',
    description:
      `The cooperation with 2Clients was smooth and effective. We reached KPI targets in record time. Highly recommend their SEO team.`,
    tag: 'ROI +120%',
    caseLink: 'See the case',
    categories: ['Strategy', 'Conversion']
  },
  {
    id: 3,
    photo: home_photo,
    logo: rewies_logo,
    name: 'Michael Ivanov, CTO',
    description:
      `They implemented technical SEO fixes we had overlooked for years. It’s rare to find this level of technical depth.`,
    tag: 'Fixes in 2 weeks',
    caseLink: 'See the case',
    categories: ['Tech SEO', 'Improvements']
  }
];

export default cards;
