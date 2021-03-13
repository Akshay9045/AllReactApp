import React from "react";
import {GrClose, GrRadial, GrGolang} from"react-icons/gr";

const Icons = ({name}) => {
    switch (name) {
        case "circle":
            return(<GrRadial className="icons" size="3em" color="yellow"/>);
        case "cross":
            return(<GrClose className="icons" size="3em" color="red"/>);
        default:
            return(<GrGolang className="icons" size="3em"/>);
    }   
}
export default Icons;