import styled from "styled-components";
import { PrimaryButton } from "../../styles/styles";

export default function Drawer({ isOpen, onClose }) {
  return (
    <DrawerContainer isOpen={isOpen}>
      <DrawerContent>
        <h1>About</h1>
        <h2>
          This is a simple online archive of all sorts of type related things
          that have been collected over the last few years, all from various
          places during my travels.
        </h2>

        <h2>
          Some just caught my attention right away, others made me think for
          abit. And for a few, I just loved the visual aesthetics or concepts behind it.
        </h2>

        <h2>
          Apart from being a huge type fan, I also collect other things like
          <a href="https://awesomenewsletters.vercel.app/">
            {" "}
            awesome newsletters
          </a>
          .
        </h2>

        <button onClick={onClose}>✕ Close</button>
      </DrawerContent>
    </DrawerContainer>
  );
}

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  height: 100%;
  width: 100%;
  background: var(--black);
  color: var(--light-grey);
  transition: right 0.5s;
  overflow-y: auto;

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 800px) {
    width: 40%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }

`;

const DrawerContent = styled.div`
  padding: var(--spacing-md);

  a {
    color: var(--light-grey);

    :hover {
      border-bottom: 1px solid;
    }
  }

  button {
    font: 400 var(--type-md)/1.3 var(--body-font), sans-serif;
    color: var(--light-grey);
    padding: var(--spacing-xs) 0px;
    border: none;
    margin-top: var(--spacing-md);
  }
`;
