import Link from 'next/link';
import styled from 'styled-components';
import { Center, MaxWidthLayout } from './styles/Layout';

import SocialBar from './SocialBar';

const StyledFooter = styled.footer`
  padding: 2rem 0 1rem 0;
`;
const dt: Date = new Date();
const Footer = () => (
  <StyledFooter>
    <MaxWidthLayout>
      <Center>
        <SocialBar />
        <p>© {dt.getFullYear()} Ash Hitchcock</p>
      </Center>
    </MaxWidthLayout>
  </StyledFooter>
);

export default Footer;
