/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import wrapWithProvider from "./wrap-with-provider";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = wrapWithProvider;
