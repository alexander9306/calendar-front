/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import wrapWithProvider from "./wrap-with-provider";

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = wrapWithProvider;
