import React from "react";
import "./Input.css"
import { inputType } from '../../types/inputType.ts';

const Input = ({label, type, value, onChange, isValid, isStatic}: inputType) => {

    return (
        <div>
            <label className="Input">
                <div className="Input__label">{label}</div>
                <input
                    type={type}
                    value={value?value:undefined}
                    className={`Input__input Input__valid${isValid} Input__static${isStatic}`}
                    onChange={e =>
                        onChange ? //Se onChange existe
                        onChange(e.target.value) //Executa
                        : null //Caso contrário, faz nada
                    }
                />
            </label>
        </div>
    )
}

export default Input