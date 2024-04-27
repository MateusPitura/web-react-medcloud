import React from "react";
import { field } from "../../types/field";
import './Field.css'

const Field = ({ title, type }: field) => {
    return (
        <div className={type == "heaeder" ? "Field__header" : "Field__default"}>
            {title}
        </div>
    )
}

export default Field;