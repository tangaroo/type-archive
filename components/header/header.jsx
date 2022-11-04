import "../../styles/styles.js";
import styled from "styled-components";

export default function HeaderComponent() {
  return (
    <Header>
      <h1>The type wunderkammer</h1>
    </Header>
  );
}

const Header = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md) 0px var(--spacing-sm) 0px;

  @media (min-width: 800px) {
    padding: var(--spacing-lg) 0px var(--spacing-sm) 0px;
  }
`;
