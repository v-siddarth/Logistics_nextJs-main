
import Breadcrumb from '@/common/Breadcrumb';
import FooterTwo from '@/layouts/footers/FooterTwo';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import BlogDetailsArea from './BlogDetailsArea';

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <FooterTwo />
    </>
  );
};

export default BlogDetails;