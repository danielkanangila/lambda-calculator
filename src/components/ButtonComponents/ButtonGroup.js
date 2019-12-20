import React from "react";
import Specials from "./SpecialButtons/Specials"
import Numbers from "./NumberButtons/Numbers";
import Operators from "./OperatorButtons/Operators";

import "./ButtonComponents.scss";

const ButtonGroup = props => {
    const { clickEventHandler } = props
    return (
        <div className="btn-group-wrapper">
            <div  className="btn-group-wrapper--1">
                <Specials onspecialclick={clickEventHandler} />
                <Numbers onnumberclick={clickEventHandler} />
            </div>
            <div className="btn-group-wrapper--2">
                <Operators onoperatorclick={clickEventHandler} />
            </div>
        </div>
    )
}

export default ButtonGroup;