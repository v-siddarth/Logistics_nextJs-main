
import Breadcrumb from '@/common/Breadcrumb';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import TeamHomeOne from '../homes/home-1/TeamHomeOne';
import ContactHomeOne from '../homes/home-1/ContactHomeOne';
import FooterTwo from '@/layouts/footers/FooterTwo';

const Team = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Team" subtitle="Team" />
      <TeamHomeOne />
      <ContactHomeOne style_2={true} />
      <FooterTwo />
    </>
  );
};

export default Team;