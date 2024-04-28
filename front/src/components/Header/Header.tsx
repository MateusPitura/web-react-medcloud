import React from "react";
import "./Header.css"
import Divider from "../Divider/Divider.tsx";
import Button from "../Button/Button.tsx";
import { headerType } from '../../types/headerType.ts'

const Header = ({ title, buttonText, action, buttonType }: headerType) => {
    return (
        <div className='Header'>
            <div className='Header__content'>
                <div className='Header__title'>{title}</div>
                <div className='Header__button'>
                    <Button onClick={() => action()} type={buttonType}>{buttonText}</Button>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Header;