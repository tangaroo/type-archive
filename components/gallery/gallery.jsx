import "../../styles/styles.js";
import styled from "styled-components";

import Image from "next/image.js";

import data from "../../public/data.json";

export default function Gallery({ selected }) {
  const listofImages =
    selected === "all"
      ? data
      : data.filter((item) => item.type.includes(selected));

  return listofImages.map((image) => {
    return (
      <Container key={image.id}>
        <Card>
          <ImageWrapper>
            <StyledImage
              fill={true}
              src={image.url}
              alt={image.alt}
              loading="lazy"
              sizes="100%"
            />
          </ImageWrapper>
        </Card>
        <p>
          {image.id} / {image.title}
        </p>
        <SmallText>{image.location}</SmallText>
      </Container>
    );
  });
}

const Container = styled.section`
  text-align: left;
  margin-bottom: var(--spacing-sm);

  @media (min-width: 600px) {
    margin-bottom: 0px;
  }
`;

const SmallText = styled.p`
  color: var(--grey);
`

const Card = styled.section`
  position: relative;
  background-color: var(--color-card);
  padding: var(--spacing-md);
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  margin-bottom: var(--spacing-xs);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  position: absolute;
`;