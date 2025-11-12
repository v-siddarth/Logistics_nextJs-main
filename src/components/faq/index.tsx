
import FaqArea from './FaqArea';
import Breadcrumb from '@/common/Breadcrumb';
import FooterTwo from '@/layouts/footers/FooterTwo';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import ContactHomeOne from '../homes/home-1/ContactHomeOne';

const Faq = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Faq" subtitle="Faq" />
      <FaqArea />
      <ContactHomeOne style_2={true} />
      <FooterTwo />
    </>
  );
};

export default Faq;