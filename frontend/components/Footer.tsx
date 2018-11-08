import { Center, MaxWidthLayout } from "./styles/Layout";

import Link from "next/link";
import SocialBar from "./SocialBar";
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 2rem 0 1rem 0;
`;

const Footer = () => (
    <StyledFooter>
        <MaxWidthLayout>
            <Center>
                <SocialBar></SocialBar>
                <p>© 2018 Ashley Hitchcock</p>
            </Center>
        </MaxWidthLayout>
    </StyledFooter>
);

export default Footer;
