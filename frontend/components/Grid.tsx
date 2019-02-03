import React from "react";
import { GridItem, GridWrapper } from "./styles/Grid";

import Card from "./Card";

const Grid = props => (
  <GridWrapper>
    {!!props.cards && props.cards.length
      ? props.cards.map((card, index) => (
          <GridItem key={index}>
            <Card {...card.node} linkType={props.linkType} />
          </GridItem>
        ))
      : null}
  </GridWrapper>
);

export default Grid;
