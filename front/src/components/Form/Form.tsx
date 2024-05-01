import React, { ReactNode } from "react"
import Button from "../Button/Button.tsx"
import "./Form.css"

type formType = {
    children: ReactNode
    onSubmit: (a: React.FormEvent<HTMLFormElement>) => Promise<boolean>
    buttonText: string
}

const Form = ({ children, onSubmit, buttonText }: formType) => {

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(event)
    }

    return (
        <form onSubmit={event => handleOnSubmit(event)} className="Form">
            {children}
            <div className="Form__button">
                <Button onClick={() => { }} type={'primary'}>
                    {buttonText}
                </Button>
            </div>
        </form>
    )
}

export default Form