import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Carruusel.css';  // Archivo CSS para estilos personalizados

// Importa las imágenes que quieres utilizar en el carrusel
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

const items = [
  {
    src: img1,
    altText: '"Los Molcajetes 2"',
    caption: '"Restaurante Familiar"'
  },
  {
    src: img2,
    altText: '¡Comida En Molcajete!',
    caption: '"Carne Asada y Arrachera"'
  },
  {
    src: img3,
    altText: '¡Nuestros Clientes!',
    caption: '"Sientete Como en Casa"'
  }
];

const Carrusel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="d-block w-100" />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Carrusel;
