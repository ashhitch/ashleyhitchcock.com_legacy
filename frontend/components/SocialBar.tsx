import Github from '../static/images/icons/github.svg';
import Instagram from '../static/images/icons/instagram.svg';
import Linkedin from '../static/images/icons/linkedin.svg';
import React from 'react';
import Twitter from '../static/images/icons/twitter.svg';
// import Link from 'next/link';
import styled from 'styled-components';

const SocialStyle = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0px;
    margin: 0 0 1rem 0;

    li + li {
      margin-left: 1rem;
    }

    li {
      text-align: center;
      width: 1rem;

      svg {
        max-width: 100%;
        height: auto;
      }

      a svg {
        transition: transform 0.2s ease-in;
        path {
          transition: fill 0.2s ease-in;
        }
      }
      a:hover svg {
        transform: scale(1.1);
      }
      a:hover svg path {
        fill: ${props => props.theme.primary};
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
