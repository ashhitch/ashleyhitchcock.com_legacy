import React, { useEffect, useState, useRef } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider.module';
import 'tiny-slider/dist/tiny-slider.css';
import styled from 'styled-components';
import media from './styles/media';

const GridWSliderWrapper = styled.section`
  display: flex;
  flex-direction: row;

  ${media.lg`
    display: grid;
    width: 100%;
    padding: 0;
    list-style-type: none;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 2.5rem;
  `}
`;

const GridSliderItem = styled.div`
  /* ${media.lg`
    
    ${props => (props.position ? 'grid-column: span 3;' : '')}
     
    `} */
`;

const GridSlider = ({ children }) => {
  //   const nextButton = `<button class="nav-button" data-controls="next" tabindex="-1">
  // <svg version="1.1" id="nav_next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  // 	 width="307.046px" height="307.046px" viewBox="0 0 307.046 307.046" style="enable-background:new 0 0 307.046 307.046;"
  // 	 xml:space="preserve">
  // <g>
  // 	<g id="nav_next">
  // 		<g>
  // 			<path d="M239.087,142.427L101.259,4.597c-6.133-6.129-16.073-6.129-22.203,0L67.955,15.698c-6.129,6.133-6.129,16.076,0,22.201
  // 				l115.621,115.626L67.955,269.135c-6.129,6.136-6.129,16.086,0,22.209l11.101,11.101c6.13,6.136,16.07,6.136,22.203,0
  // 				l137.828-137.831C245.222,158.487,245.222,148.556,239.087,142.427z"/>
  // 		</g>
  // 	</g>
  // </g>
  // </svg>
  // </button>`;

  //   const prevButton = `<button class="nav-button" data-controls="previous" tabindex="-1">
  // <svg version="1.1" id="nav_prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  // 	 viewBox="0 0 307 307" style="enable-background:new 0 0 307 307;" xml:space="preserve">
  // <g>
  // 	<g id="nav_prev">
  // 		<g>
  // 			<path d="M68,164.6l137.8,137.8c6.1,6.1,16.1,6.1,22.2,0l11.1-11.1c6.1-6.1,6.1-16.1,0-22.2L123.5,153.5L239.1,37.9
  // 				c6.1-6.1,6.1-16.1,0-22.2L228,4.6c-6.1-6.1-16.1-6.1-22.2,0L68,142.4C61.8,148.6,61.8,158.5,68,164.6z"/>
  // 		</g>
  // 	</g>
  // </g>
  // </svg>
  // </button>`;

  const settings = {
    lazyload: false,
    nav: false,
    mouseDrag: true,
    gutter: 20,
    controls: false,
    preventScrollOnTouch: 'auto',
    responsive: {
      768: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
      },
      992: {
        disable: true,
      },
    },
  };

  const [slider, setSlider] = useState(null);
  const sliderContainer = useRef(null);

  useEffect(() => {
    const theSlider = tns({
      ...settings,
      container: sliderContainer.current,
    });
    setSlider(theSlider);
  }, []);

  const goToSlide = index => {
    slider.goTo(index);
  };

  return (
    <GridWSliderWrapper ref={sliderContainer}>
      {React.Children.map(children, (child, index) => (
        <GridSliderItem position={index === 0}>
          {React.cloneElement(child, { onClick: () => goToSlide(index) })}
        </GridSliderItem>
      ))}
    </GridWSliderWrapper>
  );
};

export default GridSlider;
