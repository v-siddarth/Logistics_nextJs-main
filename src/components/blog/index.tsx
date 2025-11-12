
import BlogArea from './BlogArea';
import Breadcrumb from '@/common/Breadcrumb';
import FooterTwo from '@/layouts/footers/FooterTwo';
import HeaderTwo from '@/layouts/headers/HeaderTwo'; 

const Blog = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Blog" subtitle="Blog" />
      <BlogArea />
      <FooterTwo />
    </>
  );
};

export default Blog;