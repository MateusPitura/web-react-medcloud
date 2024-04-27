import React from "react";
import "./Header.css"
import Divider from "../Divider/Divider.tsx";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary.tsx";
import { header } from '../../types/header.ts'

const Header = ({ title, buttonText, action }: header) => {
    return (
        <div className='Header'>
            <div className='Header__content'>
                <div className='Header__title'>{title}</div>
                <div className='Header__button'>
                    <ButtonPrimary onClick={() => action()} title={buttonText} />
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Header;