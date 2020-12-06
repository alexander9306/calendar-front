import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { PlaceholderImageQuery } from "../generated/static";

const Logo: React.FunctionComponent = () => {
  const { placeholderImage } = useStaticQuery<PlaceholderImageQuery>(graphql`
    query PlaceholderImage {
    placeholderImage: file(relativePath: {eq: "logo-bg.png"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
    `);

  return (
    <Img
      fluid={placeholderImage?.childImageSharp?.fluid as FluidObject}
      alt="Logo"
      fadeIn
    />
  );
};

export default Logo;
