import "../../styles/styles.js";
import styled from "styled-components";

import data from "../../public/data.json";

export default function Introduction() {
  return (
    <Content>
      <p>
        <i>Wunderkammer</i>, also known as the cabinet of curiosities. This is a
        simple online archive of all sorts of type related things from various
        places. Apart from being a huge type fan, I also collect{" "}
        <a
          href="https://worthynewsletters.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          awesome newsletters
        </a>{" "}
        and{" "}
        <a
          href="https://thingsivelearnt.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          interesting reads
        </a>
        .
      </p>
      <p>{data.length} things / Last updated 25.06.2023</p>
    </Content>
  );
}

const Content = styled.div`
  max-width: 100%;
  text-align: center;
  margin: 0px 0px var(--spacing-lg) 0px;

  @media (min-width: 800px) {
    max-width: 80%;
  }
`;
