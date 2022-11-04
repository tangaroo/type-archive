import "../../styles/styles.js";
import styled from "styled-components";

import Gallery from "../gallery/gallery.jsx";

export default function Layout() {
  return (
    <Container>
      <Gallery />
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 580px) {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--spacing-md);
    row-gap: var(--spacing-md);
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1140px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
