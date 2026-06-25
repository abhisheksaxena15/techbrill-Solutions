"use client";

import dynamic from 'next/dynamic';

const AdvancedServices = dynamic(() => import("@/components/AdvancedServices"), { ssr: false });

const AdvancedServicesClient = () => {
  return <AdvancedServices />;
};

export default AdvancedServicesClient; 