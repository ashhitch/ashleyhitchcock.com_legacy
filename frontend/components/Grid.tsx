import Card from './Card';
import React from "react";

const Grid = props => (
         
  <section className="grid">


    {props.cards.map((card, index) => {
      return (
        <div key={index} className="grid__item">
          <Card {...card} linkType={props.linkType} />
        </div>
      ) 
    })}


  </section>    
        );
 

export default Grid;
