import { useState } from "react";
import { GlobalStyle } from "../styles/styles.js";
import styled from "styled-components";


import SEO from "../components/head/head.jsx";
import HeaderComponent from "../components/header/header.jsx";
import Gallery from "../components/gallery/gallery.jsx";
import FooterComponent from "../components/footer/footer.jsx";

export default function Home() {
  const [selected, setSelected] = useState("all");

  return (
    <main>
      <SEO />
      <GlobalStyle />
      <HeaderComponent selected={selected} setSelected={setSelected} />
      <Container>
      <Gallery selected={selected}/>
      </Container>
      <FooterComponent />
    </main>
  );
}

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);

  @media (min-width: 580px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

`;
