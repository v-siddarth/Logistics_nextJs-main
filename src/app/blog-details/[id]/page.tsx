import BlogDetails from '@/components/blog-details';
import Wrapper from '@/layouts/Wrapper';

export const metadata = {
  title: "Blog Details - SG Logistics",
  description: "Read detailed blog posts about logistics, transportation, and supply chain management.",
}

interface BlogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const BlogDetailsPage = ({ params }: BlogDetailsPageProps) => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default BlogDetailsPage;