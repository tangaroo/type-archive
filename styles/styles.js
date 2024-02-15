import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap');

:root {
    --white: #f9f9f9;
    --light-grey: #f1f1f1;
    --grey: #666666;
    --black: #222222;
    --color-text: var(--black);
    --color-background: var(--white);
    --color-card: var(--light-grey);

    --spacing-unit: 4px;
    --spacing-xxs: calc(3*var(--spacing-unit));
    --spacing-xs: calc(3*var(--spacing-unit));
    --spacing-sm: calc(5*var(--spacing-unit));
    --spacing-md: calc(8*var(--spacing-unit));
    --spacing-lg: calc(15*var(--spacing-unit));
    --rounded: calc(7*var(--spacing-unit));

    --heading-font: Instrument Serif;
    --body-font: Inter;

    --type-sm: calc(3.5*var(--spacing-unit));
    --type-md: calc(6*var(--spacing-unit));
    --type-heading: calc(10*var(--spacing-unit));

    body {
    background: var(--color-background);
    color: var(--color-text);
    
  }
}

  main {
    max-width: 1440px;
    margin: 0 auto;
    padding: var(--spacing-sm);
    align-items: center;

    display: flex;
    flex-direction: column;
    padding: var(--spacing-sm);
    overflow: hidden;
    }
  }

  h1 {
    font: 400 var(--type-md)/1.3 var(--heading-font), serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: var(--spacing-xxs);

    @media (min-width: 600px) {
      font-size: var(--type-heading);
    }
  }

  h2 {
    font: 400 var(--type-md)/1.3 var(--body-font), sans-serif;
    margin-bottom: var(--spacing-xxs);
  }

  p {
    font: 400 var(--type-sm)/1.3 var(--body-font), sans-serif;
    margin: 0px;
  }

  a {
    text-decoration: none;
    color: var(--color-text);
    transition: 0.3s all;

    :hover {
    color: var(---color-text);
    border-bottom: 1px solid var(--color-text);
  }
}

  img {
    max-width: 100%;
  }

  button {
    background: rgba(0,0,0,0);
    border: none;
    padding: 0px var(--spacing-unit);
    margin: var(--spacing-xs);
    transition: all 0.3s;

    :hover {
      border-bottom: 1px solid;
    }

    &.selected {
      border-bottom: 1px solid;
    }

  }

`;

export const PrimaryButton = css`
  cursor: pointer;
  background-color: var(--color-card);
  color: var(--text);
  border: 1px solid rgba(0,0,0,0);
  border-radius: var(--spacing-sm);
  cursor: pointer;
  padding: var(--spacing-xs) var(--spacing-sm);
  margin-top: var(--spacing-md);
  transition: all 0.5s;

  &:hover {
    background-color: var(--color-background);
    border: 1px solid var(--grey);
  }

  @media (min-width: 600px) {
    margin-top: var(--spacing-lg);
  }
`;
