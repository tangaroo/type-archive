import "../../styles/styles.js";
import styled from "styled-components";

import data from "../../public/data.json";
import Accordion from "../accordion/accordion.jsx";

export default function HeaderComponent({ selected, setSelected }) {
  return (
    <Header>
      <Intro>
        <h1>The type wunderkammer ({data.length})</h1>
        <About>
          <span><h2>
            Wunderkammer: a place where a collection of curiosities and rarities is exhibited.
            </h2></span>
          <h2>
            This is an online archive of type related things
            that have been collected over the last few years, all from various
            places during my travels.
          </h2>
        </About>
      </Intro>
      <Accordion selected={selected} setSelected={setSelected} />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px var(--spacing-sm) 0px;
 
  @media (min-width: 800px) {
    align-items: flex-end;
    padding: var(--spacing-md) 0px var(--spacing-md) 0px;
  }
`;

const Intro = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

@media (min-width: 800px) {
  flex-direction: row;
  align-items: flex-start;
justify-content: space-between;
}

span {
  color: var(--grey);
}
`

const About = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr;
gap: var(--spacing-md);
text-align: left;

@media (min-width: 800px){
  grid-template-columns: 1fr 1fr;
  width: 50%;
  text-align: right;
}

`
