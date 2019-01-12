import styled from 'styled-components';

const StyledPagination = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 1rem 302rem;
    border-right: 1px solid ${props => props.theme.primary};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default StyledPagination;