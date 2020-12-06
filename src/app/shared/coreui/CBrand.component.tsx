/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";
// import { tagPropType } from "./helper.js";
import type { CBrand as CBrandProps } from "@coreui/react";
import CLink from "./CLink.component";

// component - CoreUI / CBrand
const CBrand: React.FunctionComponent<CBrandProps> = (props) => {
  const {
    tag,
    className,
    //
    innerRef,
    ...attributes
  } = props;

  // render

  const classes = classNames(className);

  const Tag = attributes.to || attributes.href ? CLink : tag;
  // const Tag = tag;
  const ref = { [`${typeof Tag === "string" ? "ref" : "innerRef"}`]: innerRef };
  return <Tag className={classes} {...attributes} {...ref} />;
};

// CBrand.propTypes = {
//   // tag: tagPropType,
//   children: PropTypes.node,
//   className: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.array,
//     PropTypes.object,
//   ]),
//   //
//   innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
// };

// CBrand.defaultProps = {
//   tag: "div",
// };

export default CBrand;
