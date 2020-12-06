import React from "react";
import { PageProps } from "gatsby";

import Layout from "../app/shared/layouts/layout.component";
import SEO from "../app/seo";

const IndexPage: React.FunctionComponent<PageProps> = () => (
  <Layout>
    <SEO title="Index" />
    <h1>Calendar app</h1>
  </Layout>
);

export default IndexPage;
