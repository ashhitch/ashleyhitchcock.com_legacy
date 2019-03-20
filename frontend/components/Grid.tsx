import React from 'react';
import { GridItem, GridWrapper } from './styles/Grid';

import Card from './Card';

const Grid = props => {
  const { cards, linkType } = props;
  return (
    <GridWrapper>
      {!!cards && cards.length
        ? cards.map((card, index) => (
          <GridItem key={index}>
            <Card {...card.node} linkType={linkType} />
          </GridItem>
        ))
        : null}
    </GridWrapper>
  );
};

export default Grid;
