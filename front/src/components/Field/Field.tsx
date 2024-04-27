import React from "react";
import { field } from "../../types/field";
import './Field.css'

const Field = ({title}: field) => {
    return(
        <>
            <div className='Field'>{title}</div>
        </>
    )
}

export default Field;