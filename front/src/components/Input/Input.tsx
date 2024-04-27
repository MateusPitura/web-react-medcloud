import React from "react";
import "./Input.css"
import { input } from '../../types/input.ts';

const Input = ({label, type, value, onChange}: input) => {
    return (
        <div>
            <label className="Input">
                <div className="Input__label">{label}</div>
                <input
                    type={type}
                    value={value}
                    className="Input__input"
                    onChange={e =>
                        onChange ? //Se onChange existe
                            onChange!(e.target.value) //Executa
                            : (e) //Se não chama uma função que não faz nada
                    }
                />
            </label>
        </div>
    )
}

export default Input;