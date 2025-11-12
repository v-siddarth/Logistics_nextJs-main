import Breadcrumb from '@/common/Breadcrumb';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import React from 'react';
import TrackingArea from './TrackingArea';
import FooterTwo from '@/layouts/footers/FooterTwo';

const Tracking = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Tracking" subtitle="Tracking" />
      <TrackingArea />
      <FooterTwo />
    </>
  );
};

export default Tracking;