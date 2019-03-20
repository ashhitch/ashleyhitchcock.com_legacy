import { css } from 'styled-components';

export interface IMediaSizes {
  xl: number;
  lg: number;
  md: number;
  sm: number;
}
export const mediaSizes: IMediaSizes = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
};

// Iterate through the sizes and create a media template
const media: any = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${mediaSizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
