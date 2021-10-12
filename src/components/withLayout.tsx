import React from "react";
import { Layout } from "../modules/layout";

export const withLayout = (Component: React.FC) => () => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};
