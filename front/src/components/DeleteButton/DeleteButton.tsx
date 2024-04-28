import React, { ReactNode } from "react";
import "./DeleteButton.css"

type DeleteButton = {
    children: ReactNode
}

const DeleteButton = ({children}: DeleteButton) => {
    return (
        <>
            <button className='DeleteButton'>
                {children}
            </button>
        </>
    )
}

export default DeleteButton