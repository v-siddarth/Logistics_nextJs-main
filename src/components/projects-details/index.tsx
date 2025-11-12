
import Breadcrumb from '@/common/Breadcrumb';
import FooterTwo from '@/layouts/footers/FooterTwo';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import React from 'react';
import ProjectsDetailsArea from './ProjectsDetailsArea';

const ProjectsDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Projects Details" subtitle="Projects Details" />
      <ProjectsDetailsArea />
      <FooterTwo />
    </>
  );
};

export default ProjectsDetails;