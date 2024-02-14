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
      <Gallery selected={selected}/>
      <FooterComponent />
    </main>
  );
}

