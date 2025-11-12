
import Breadcrumb from '@/common/Breadcrumb';
import FooterTwo from '@/layouts/footers/FooterTwo';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import React from 'react';
import ProjectsGalleryArea from './ProjectsGalleryArea';
import ProjectsGalleryContact from './ProjectsGalleryContact';

const ProjectsGallery = () => {
  return (
    <>
    <HeaderTwo />
    <Breadcrumb title="Projects Gallery" subtitle="Projects Gallery" />
    <ProjectsGalleryArea />
    <ProjectsGalleryContact />
    <FooterTwo />
      
    </>
  );
};

export default ProjectsGallery;