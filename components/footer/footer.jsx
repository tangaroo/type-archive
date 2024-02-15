import "../../styles/styles.js";
import styled from "styled-components";

export default function FooterComponent() {
  return (
    <Footer>
      <p>Last updated 15.02.2024</p>
      <p>
        Say hey @{" "}
        <a href="https://cassandratang.me">cassandratang.me</a>
      </p>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--spacing-sm) 0px;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    padding: var(--spacing-lg) 0px var(--spacing-sm) 0px;
  }

  p, a {
    color: var(--grey);
  }

`;
