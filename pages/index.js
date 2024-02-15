import { useState } from "react";
import { GlobalStyle } from "../styles/styles.js";
import styled from "styled-components";


import SEO from "../components/head/head.jsx";
import HeaderComponent from "../components/header/header.jsx";
import Gallery from "../components/gallery/gallery.jsx";
import Drawer from "../components/drawer/drawer.jsx";
import FooterComponent from "../components/footer/footer.jsx";

export default function Home() {
  const [selected, setSelected] = useState("all");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(!isDrawerOpen); 
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <main>
      <SEO />
      <GlobalStyle />
      <HeaderComponent selected={selected} setSelected={setSelected} />
      <Gallery selected={selected}/>
      <FooterComponent />

      <Info onClick={handleClick}>Info</Info>

      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </main>
  );
};


const Info = styled.div`
  position: fixed;
  top: var(--spacing-md);
  right: var(--spacing-md);
  cursor: pointer;
  font: 400 var(--type-sm)/1.3 var(--body-font), sans-serif;
  color: var(--grey);
`;
