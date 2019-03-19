import React from 'react';
import styled from 'styled-components';
import Github from './icons/github.svg';
import Instagram from './icons/instagram.svg';
import Linkedin from './icons/linkedin.svg';
import Twitter from './icons/twitter.svg';
import media from './styles/media';
// import Link from 'next/link';

const SocialStyle = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0px;
    margin: 0 0 1rem 0;

    li + li {
      margin-left: 1.5rem;
    }

    li {
      text-align: center;
      width: 1.5rem;
      ${media.md`width: 1.8rem;`}
      svg {
        max-width: 100%;
        height: auto;
      }

      a svg {
        transition: transform 0.2s ease-in;
        path {
          transition: fill 0.2s ease-in;
          fill: ${props => props.theme.primary};
        }
      }
      a:hover svg {
        transform: scale(1.1);
      }
      a:hover svg path {
        fill: ${props => props.theme.highlight};
      }
    }
  }
`;
const SocialBar = () => (
  <SocialStyle>
    <ul>
      <li>
        <a href="https://github.com/ashhitch" target="_blank">
          <Github />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/Ash_Hitchcock" target="_blank">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ashhitchcock/" target="_blank">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/ash_hitch/" target="_blank">
          <Instagram />
        </a>
      </li>
    </ul>
  </SocialStyle>
);

export default SocialBar;
