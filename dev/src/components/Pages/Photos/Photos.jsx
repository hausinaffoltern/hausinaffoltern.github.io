import React, { useState, useCallback, useContext } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import images from "./images";
import styled from 'styled-components';
import translations from "../../common/translations";
import { LanguageContext } from '../../../hooks/useStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 30px;
`;

const SGallery = styled.article`
.react-photo-gallery--gallery {
  @media print {
    img {
      display: block;
      width: calc(50% - 10px);
      margin: 0 5px;
      height: 270px;
      object-fit: contain;
    }
  }
}`;

const SGallery1 = styled(SGallery)`
.react-photo-gallery--gallery {
  @media print {
    img {
      &:nth-child(6) {
        padding-bottom: 140px;
      } 
      &:nth-child(12) {
        padding-bottom: 165px;
      }
      &:nth-child(14),
      &:nth-child(7) {
        height: 0px;
        width: 0px;
      }
    }
  }
}`;
const SGallery2 = styled(SGallery)`
.react-photo-gallery--gallery {
  @media print {
    img {
      &:nth-child(6), 
      &:nth-child(14) {
        padding-bottom: 165px;
      }
      &:nth-child(11),
      &:nth-child(12) {
        height: 0px;
        width: 0px;
      }
    }
  }
}`;
const SGallery3 = styled(SGallery)`
.react-photo-gallery--gallery {
  @media print {
    img {
      &:nth-child(6) {
        padding-bottom: 195px;
      } 
      &:nth-child(12) {
        padding-bottom: 165px;
      }
    }
  }
}`;
const SGallery4 = styled(SGallery)`
.react-photo-gallery--gallery {
  @media print {
    img {
      &:nth-child(6) {
        padding-bottom: 195px;
      } 
      &:nth-child(9) {
        padding-bottom: 415px;
      }
    }
  }
}`;
const SGallery5 = styled(SGallery)``;

const Photos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [opened, setOpened] = useState('');

  const { language, dispatch } = useContext(LanguageContext);
  if(!language || !dispatch) {
    return <></>;
  }

  const t = v => translations(v,language);

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
      <h3>{t('eg')}</h3>
      <SGallery1>
        <Gallery photos={images.eg} onClick={(e, { index }) => openLightbox(e, { index }, 'eg')} />
      </SGallery1>
      <h3>{t('og')}</h3>
      <SGallery2>
        <Gallery photos={images.og} onClick={(e, { index }) => openLightbox(e, { index }, 'og')} />
      </SGallery2>
      <h3>{t('dg')}</h3>
      <SGallery3>
        <Gallery photos={images.dg} onClick={(e, { index }) => openLightbox(e, { index }, 'dg')} />
      </SGallery3>
      <h3>{t('ug')}</h3>
      <SGallery4>
        <Gallery photos={images.ug} onClick={(e, { index }) => openLightbox(e, { index }, 'ug')} />
      </SGallery4>
      <h3>{t('sg')}</h3>
      <SGallery5>
        <Gallery photos={images.outside} onClick={(e, { index }) => openLightbox(e, { index }, 'outside')} />
      </SGallery5>
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
