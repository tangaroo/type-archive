import "../../styles/styles.js";
import styled from "styled-components";

import data from "../../public/data.json";

export default function HeaderComponent({ selected, setSelected }) {
  return (
    <Header>
        <h1>The type wunderkammer ({data.length})</h1>
      <Nav>
      <StyledButton
      className={selected === "all" ? "active" : ""}
      onClick={() => setSelected("all")}
    >
      All
    </StyledButton>

    <StyledButton
      className={selected === "FR" ? "active" : ""}
      onClick={() => setSelected("FR")}
    >
          +33
        </StyledButton>

        <StyledButton
      className={selected === "ES" ? "active" : ""}
      onClick={() => setSelected("ES")}
    >
          +34
        </StyledButton>

        <StyledButton
      className={selected === "UK" ? "active" : ""}
      onClick={() => setSelected("UK")}
    >
          +44
        </StyledButton>

        <StyledButton
      className={selected === "DE" ? "active" : ""}
      onClick={() => setSelected("DE")}
    >
          +49
        </StyledButton>


        <StyledButton
      className={selected === "JP" ? "active" : ""}
      onClick={() => setSelected("JP")}
    >
          +81
        </StyledButton>

        <StyledButton 
      className={selected === "HK" ? "active" : ""}
      onClick={() => setSelected("HK")}
    >
          +852
        </StyledButton>

        <StyledButton
      className={selected === "US" ? "active" : ""}
      onClick={() => setSelected("US")}
    >
          +1
        </StyledButton>

      </Nav>
    </Header>
  );
}

const Header = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--spacing-md) var(--spacing-sm) var(--spacing-lg) var(--spacing-sm);

`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const StyledButton = styled.button`
  background: rgba(0, 0, 0, 0);
  color: var(--grey);
  border: none;
  padding: 0px var(--spacing-unit);
  margin: var(--spacing-xxs);
  transition: all 0.3s;

  &:hover,
  &:focus {
    border-bottom: 1px solid;
    outline: none; /* Optional: Remove default focus outline */
  }

  &.active {
    color: var(--color-text);
    border-bottom: 1px solid;
  }
`;