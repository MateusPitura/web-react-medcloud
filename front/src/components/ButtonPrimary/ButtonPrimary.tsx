import React from "react";
import './ButtonPrimary.css';
import { buttonPrimary } from "../../types/buttonPrimary";

const ButtonPrimary = ({title, onClick}: buttonPrimary) => {
    return (
        <>
            <button 
                onClick={()=>onClick()}
                className='ButtonPrimary'
            >
                {title}
            </button>
        </>
    )
}

export default ButtonPrimary;