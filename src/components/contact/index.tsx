
import ContactArea from './ContactArea';
import Breadcrumb from '@/common/Breadcrumb';
import GoogleMap from '../homes/home-2/GoogleMap';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import FooterTwo from '@/layouts/footers/FooterTwo';

const Contact = () => {
  return (
    <>
    <HeaderTwo />
    <Breadcrumb title="Contact" subtitle="Contact" />
    <ContactArea />
    <GoogleMap />
    <FooterTwo />
    </>
  );
};

export default Contact;