import React from "react";
import Specials from "./SpecialButtons/Specials"
import Numbers from "./NumberButtons/Numbers";

import "./ButtonComponents.scss";

const ButtonGroup = props => {

    return (
        <div className="btn-group-wrapper">
            <div  className="btn-group-wrapper--1">
                <Specials />
                <Numbers />
            </div>
            
        </div>
    )
}

export default ButtonGroup;