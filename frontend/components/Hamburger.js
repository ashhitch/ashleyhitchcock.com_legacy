import React from "react";

const Header = props => (
         
            
              <a href="#" className={"menu-toggle " + (props.active ? 'is-active' : '')} onClick={props.toggle} >
                <span></span>
                <span></span>
                <span></span>
              </a>
             
         
        );
 

export default Header;
