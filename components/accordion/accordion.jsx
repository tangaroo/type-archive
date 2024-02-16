import "../../styles/styles.js";
import styled from "styled-components";

import { useState } from "react";
import { SecondaryButton } from "../../styles/styles.js";


export default function Accordion({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
  
    const toggleAccordion = () => {
      setIsActive(!isActive);
    };
  
    return (
      <AccordionContainer>
        <AccordionButton onClick={toggleAccordion}>
          {isActive ? 'Locations (-)' : 'Locations (+)'}
        </AccordionButton>
  
        {isActive && (
          <AccordionContent>
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
        </AccordionContent>
        )}
      </AccordionContainer>
    );
  };

  const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 800px) {
      align-items: flex-end;
    }
  `

  const AccordionButton = styled.button`
    background: rgba(0,0,0,0);
    color: var(--grey);
    border: none;
    text-decoration: none;
    margin: var(--spacing-sm) 0px 0px 0px;
    font: 400 var(--type-sm)/1.3 var(--heading-font), sans-serif;
    transition: all 0.3s ease;

    :hover {
      color: var(--text);
      border-bottom: none;
      cursor: pointer;
    }
  `

  const AccordionContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    @media (min-width:800px) {
      align-items: flex-end;
    }
  `
const StyledButton = styled.button`
  ${SecondaryButton}
`;