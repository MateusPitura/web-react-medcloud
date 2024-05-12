import React from "react";
import { fieldType } from "../../types/fieldType";
import './Field.css'

const Field = ({ title, type }: fieldType) => {
    return (
        <div className={type == "heaeder" ? "Field__header" : "Field__default"}>
            {title}
        </div>
    )
}

export default Field;