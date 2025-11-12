
import Breadcrumb from '@/common/Breadcrumb';
import FooterTwo from '@/layouts/footers/FooterTwo';
import HeaderTwo from '@/layouts/headers/HeaderTwo'; 
import ServiceArea from './ServiceArea';
import FaqHomeTwo from '../homes/home-2/FaqHomeTwo';

const Service = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Service" subtitle="Service" />
      <ServiceArea />
      <FaqHomeTwo style_2={true} />
      <FooterTwo />
    </>
  );
};

export default Service;