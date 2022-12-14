import { GlobalStyle } from "../styles/styles.js";

import SEO from "../components/head/head.jsx";
import HeaderComponent from "../components/header/header.jsx";
import Layout from "../components/layout/layout.jsx";
import FooterComponent from "../components/footer/footer.jsx";
import Introduction from "../components/content/content.jsx";

export default function Home() {
  return (
    <main>
      <SEO />
      <GlobalStyle />
      <HeaderComponent />
      <Introduction />
      <Layout />
      <FooterComponent />
    </main>
  );
}
