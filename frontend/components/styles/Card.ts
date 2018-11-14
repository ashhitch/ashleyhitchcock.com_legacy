import styled from 'styled-components';

const CardArticle = styled.article`
background-color: ${props => props.theme.white};
text-decoration: none;
color: #333;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
transition: transform 0.2s ease-in;
display: flex;
flex-direction: column;
min-height: 100%;

&:hover,
&:focus {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.6);
  transform: scale(1.01);
}
.card__image {
  &__src {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
}

.card__content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card__title {
  margin: 0;

  &__link {
    color: ${props => props.theme.black};
    text-decoration: none;
  }
}

.card__body {
  flex: 1;
}

.card__footer {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #444;
  font-weight: 600;
}

.card__tag {
  & + & {
    margin-left: 10px;
  }
}

`;

export default CardArticle;