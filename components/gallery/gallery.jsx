import { useState } from "react";
import styled from "styled-components";
import Image from "next/image.js";
import data from "../../public/data.json";
import { PrimaryButton } from "../../styles/styles";

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
        {paginatedImages.map((image, index) => (
          <Container key={index}>
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
              {filteredImages.length - index} / {image.title}
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
  ${PrimaryButton}
`;

