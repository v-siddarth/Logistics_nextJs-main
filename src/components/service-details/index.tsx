
import Breadcrumb from '@/common/Breadcrumb';
import HeaderTwo from '@/layouts/headers/HeaderTwo'; 
import ServiceDetailsArea from './ServiceDetailsArea';
import FooterTwo from '@/layouts/footers/FooterTwo';

const ServiceDetails = () => {
  return (
    <>
    <HeaderTwo />
    <Breadcrumb title="Service Details" subtitle="Service Details" />
    <ServiceDetailsArea />
    <FooterTwo />      
    </>
  );
};

export default ServiceDetails;