import HomeTwo from '@/components/homes/home-2';
import HomeOne from '@/components/homes/home-1';
import Wrapper from '@/layouts/Wrapper';

 
export const metadata  = {
  title: "SG Logistics",
  description: "SG Logistics",
}
 

const index = () => {
  return (
    <Wrapper>
      <HomeTwo /> 
    </Wrapper>
  );
};

export default index;