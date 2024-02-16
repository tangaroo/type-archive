import { useState } from "react";
import { GlobalStyle } from "../styles/styles.js";
import styled from "styled-components";

import SEO from "../components/head/head.jsx";
import HeaderComponent from "../components/header/header.jsx";
import Gallery from "../components/gallery/gallery.jsx";
import FooterComponent from "../components/footer/footer.jsx";

export default function Home() {
  const [selected, setSelected] = useState("all");

  const BacktoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <SEO />
      <GlobalStyle />
      <HeaderComponent selected={selected} setSelected={setSelected} />
      <Gallery selected={selected} />
      <FooterComponent />
      <BackToTop onClick={BacktoTop}>Back to Top</BackToTop>
    </main>
  );
}

const BackToTop = styled.button`
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  position: fixed;
  bottom: var(--spacing-xs);
  right: var(--spacing-xs);
  font-family: var(--heading-font);
  text-decoration: none;
`;
