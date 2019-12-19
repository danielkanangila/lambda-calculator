import React from "react";
import Specials from "./SpecialButtons/Specials"
import "./ButtonComponents.scss";

const ButtonGroup = props => {

    return (
        <div className="btn-group-wrapper">
            <Specials />
        </div>
    )
}

export default ButtonGroup;