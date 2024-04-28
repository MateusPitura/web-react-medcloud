import React from "react";
import './Button.css';
import { buttonType } from "../../types/buttonType";

const ButtonPrimary = ({ type, onClick, children }: buttonType) => {
    return (
        <button
            onClick={() => onClick()}
            className={`Button Button__${type}`}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary;