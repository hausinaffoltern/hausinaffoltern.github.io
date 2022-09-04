import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import images from "./images";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 30px;
`;

const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [opened, setOpened] = useState('');

  const openLightbox = useCallback((event, { photo, index }, gal) => {
    setOpened(gal)
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container>
      <h3>Erdgeschoss</h3>
      <Gallery photos={images.eg} onClick={(e, { index }) => openLightbox(e, { index }, 'eg')} />
      <h3>Obergeschoss</h3>
      <Gallery photos={images.og} onClick={(e, { index }) => openLightbox(e, { index }, 'og')} />
      <h3>Dachgeschoss</h3>
      <Gallery photos={images.dg} onClick={(e, { index }) => openLightbox(e, { index }, 'dg')} />
      <h3>Untergeschoss</h3>
      <Gallery photos={images.ug} onClick={(e, { index }) => openLightbox(e, { index }, 'ug')} />
      <h3>Aussen</h3>
      <Gallery photos={images.outside} onClick={(e, { index }) => openLightbox(e, { index }, 'outside')} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images[opened].map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
};

export default Photos;
