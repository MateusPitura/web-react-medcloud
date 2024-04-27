import React from "react";
import './ButtonPrimary.css';
import { buttonPrimary } from "../../types/buttonPrimary";

const ButtonPrimary = ({title}: buttonPrimary) => {
    return (
        <>
            <button className='ButtonPrimary'>
                {title}
            </button>
        </>
    )
}

export default ButtonPrimary;