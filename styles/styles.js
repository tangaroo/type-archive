import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --white: #f9f9f9;
    --grey: #f1f1f1;
    --black: #222222;
    --color-text: var(--black);
    --color-background: var(--white);
    --color-card: var(--grey);

    --spacing-unit: 4px;
    --spacing-sm: calc(5*var(--spacing-unit));
    --spacing-md: calc(8*var(--spacing-unit));
    --spacing-lg: calc(15*var(--spacing-unit));
    --rounded: calc(7*var(--spacing-unit));

    --heading-font: Baskerville;
    --body-font: Courier New;

    --type-sm: calc(3.5*var(--spacing-unit));
    --type-md: calc(4*var(--spacing-unit));
    --type-heading: calc(10*var(--spacing-unit));

    body {
    background: var(--color-background);
    color: var(--color-text);
    max-width: 1440px;
    margin: 0 auto;
  }
}

  main {
    max-width: 1440px;
    margin: auto;
    padding: var(--spacing-sm);
    align-items: center;

    display: flex;
    flex-direction: column;

      @media (min-width: 480px) {
        margin-left: auto;
        margin-right: auto;
        padding: var(--spacing-lg);
    }
  }

  h1 {
    font: 400 var(--type-md)/1.3 var(--heading-font), 'Times';
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
  }

  p {
    font: 400 var(--type-sm)/1.3 var(--body-font), 'Courier';
    margin: var(spacing-sm) 0px 0px 0px;
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
    max-height: 100%;
  }
  
`;
