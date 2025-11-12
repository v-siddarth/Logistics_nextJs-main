
import Breadcrumb from '@/common/Breadcrumb';
import FooterTwo from '@/layouts/footers/FooterTwo';
import HeaderTwo from '@/layouts/headers/HeaderTwo'; 
import TeamHomeOne from '../homes/home-1/TeamHomeOne';
import AboutHomeTwo from '../homes/home-2/AboutHomeTwo';
import PricingHomeOne from '../homes/home-1/PricingHomeOne';
import DeliverHomeOne from '../homes/home-1/DeliverHomeOne';
import ServiceAreaHomeTwo from '../homes/home-2/ServiceAreaHomeTwo';

const About = () => {
  return (
    <>
    <HeaderTwo />
    <Breadcrumb title="About Us" subtitle="About Us" />
    <AboutHomeTwo style_2={true} />
    <TeamHomeOne />
    <ServiceAreaHomeTwo />
    <DeliverHomeOne />
    {/* <PricingHomeOne /> */}
    <FooterTwo />
    </>
  );
};

export default About;