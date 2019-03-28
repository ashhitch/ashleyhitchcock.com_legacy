import React from 'react';
import { IconGridStyle, IconGridItemStyle } from './styles/IconGrid';

import ConfusedIcon from './icons/confused.svg';
import JlpIcon from './icons/jlp.svg';
import JustEat from './icons/justeat.svg';

import { SubHeading } from './styles/Headings';

const BrandStack = () => (
  <>
    <SubHeading>Trusted by</SubHeading>
    <IconGridStyle>
      <IconGridItemStyle brandbg="#000a8c">
        <ConfusedIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#000000">
        <JlpIcon />
      </IconGridItemStyle>
      <IconGridItemStyle brandbg="#f50028">
        <JustEat />
      </IconGridItemStyle>
    </IconGridStyle>
  </>
);

export default BrandStack;
