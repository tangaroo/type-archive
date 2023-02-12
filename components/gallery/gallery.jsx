import "../../styles/styles.js";
import styled from "styled-components";

import Image from "next/image.js";

import data from "../../public/data.json";

const Gallery = () => {
  return data.map((image) => {
    // const img = new Image();
    // img.src = `http://localhost:3000/${image}`;

    // img.onload = () => {
    //   console.log(img.height);
    //   console.log(img.width);
    // };
    return (
      <Container key={image.id}>
        <Card>
          <img src={image.img} alt={image.alt} loading="lazy" />
          {/* <Image src={image.img} alt={image.alt} layout="responsive" width="" /> */}
        </Card>
        <p>
          {image.id} / {image.title}
        </p>
      </Container>
    );
  });
};

export default Gallery;

const Container = styled.section`
  text-align: center;
  margin-bottom: var(--spacing-sm);

  @media (min-width: 600px) {
    margin-bottom: 0px;
  }
`;

const Card = styled.section`
  background-color: var(--color-card);
  padding: var(--spacing-md);
  border-radius: var(--rounded);
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  }
`;
