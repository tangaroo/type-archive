import { useState } from "react";
import styled from "styled-components";
import Image from "next/image.js";
import data from "../../public/data.json";

export default function Gallery({ selected }) {
  const itemsPerPage = 15;
  const [visibleImages, setVisibleImages] = useState(itemsPerPage);

  const filteredImages =
    selected === "all"
      ? data
      : data.filter((item) => item.type.includes(selected));

  const paginatedImages = filteredImages.slice(0, visibleImages);

  const handleLoadMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + itemsPerPage);
  };

  return (
    <>
    <GalleryContainer>
      {paginatedImages.map((image) => (
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
      ))}

    </GalleryContainer>
          {visibleImages < filteredImages.length && (
            <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
          )}
          </>
  );
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

const LoadMoreButton = styled.button`
  background-color: var(--color-card);
  color: var(--text);
  border: 1px solid var(--color-background);
  border-radius: var(--spacing-sm);
  cursor: pointer;
  padding: var(--spacing-xs) var(--spacing-sm);
  margin-top: var(--spacing-md);
  transition: all 0.5s;

  &:hover {
    background-color: var(--color-background);
    border: 1px solid var(--grey);
  }

  @media (min-width: 600px){
    margin-top: var(--spacing-lg);
  }
`;

const GalleryContainer = styled.section`
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