import "../../styles/styles.js";
import styled from "styled-components";

export default function FooterComponent() {
  return (
    <Footer>
      <p>
        &copy; 2023 / Say hey @{" "}
        <a href="https://cassandratang.me">cassandratang.me</a>
      </p>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) 0px;

  @media (min-width: 800px) {
    padding: var(--spacing-lg) 0px var(--spacing-sm) 0px;
  }
`;
