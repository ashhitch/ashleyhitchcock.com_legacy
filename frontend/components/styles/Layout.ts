import styled from 'styled-components';

const MaxWidthLayout = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
    `;

const Center = styled.div`
  text-align: center;
    `;

    export {
      MaxWidthLayout,
      Center
    }