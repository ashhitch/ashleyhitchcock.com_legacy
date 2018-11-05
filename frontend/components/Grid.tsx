import { GridItem, GridWrapper } from 'components/styles/Grid';

import Card from './Card';
import React from "react";

const Grid = props => (
         
  <GridWrapper>


    {!!props.cards && props.cards.length ? props.cards.map((card, index) => {
      return (
        <GridItem key={index}>
          <Card {...card} linkType={props.linkType} />
        </GridItem>
      ) 
    }): null}


  </GridWrapper>    
        );
 

export default Grid;