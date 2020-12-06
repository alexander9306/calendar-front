import React from "react";
import { Helmet, HelmetProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import type { GetSiteMetadataQuery } from "./generated/static";

interface DataProps extends Pick<HelmetProps, "meta"> {
  description?: string;
  lang?: string;
  title: string;
}

type SEOFunction = (props: DataProps) => React.ReactElement;

const SEO: SEOFunction = ({
  description = "",
  lang = "es",
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery<GetSiteMetadataQuery>(
    graphql`
      query GetSiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site?.siteMetadata?.description;

  meta.push(
    {
      name: `description`,
      content: metaDescription ?? "",
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription ?? "",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site?.siteMetadata?.author ?? "",
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription ?? "",
    }
  );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      meta={meta}
    />
  );
};

export default SEO;
