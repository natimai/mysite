import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ClientFeedbackMain from "@/components/containers/ClientFeedbackMain";

const ClientFeedback = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="ملاحظات العميل" navigation="ملاحظات العميل" />
      <ClientFeedbackMain />
    </Layout>
  );
};

export default ClientFeedback;
