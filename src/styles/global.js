import { css } from "@emotion/react";
import { colors, shadow } from "./colors";
import { typography } from "./typography";

export const reset = css`
  /* CSS Reset by Andy Bell (https://piccalil.li/blog/a-modern-css-reset/) */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  /* Specific styles for non-active links */
  .link {
    color: #adadaf;
  }

  /* Specific styles for active links */
  .link-active {
    color: #fa4a0c;
    filter: drop-shadow(0px 6px 20px rgba(215, 56, 0, 0.4));
  }
  .button-active {
    border-bottom: 3px solid #fa4a0c;
  }
`;

export const global = css`
  @import url("@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');");
  body {
    font-family: "Source Sans Pro", sans-serif;
    display: flex;
    justify-content: center;
    padding: 1rem;
    background-color: gray;
    ${typography.size.m}
  }

  #root {
    width: 460px;
    color: ${colors.black};
    background-color: ${colors.backgroundGray};
    box-shadow: ${shadow.pageHeader};
    border-radius: 25px;
    padding: 1.5rem 2.5rem;
  }
`;

// general background page color:  ${colors.gray}
