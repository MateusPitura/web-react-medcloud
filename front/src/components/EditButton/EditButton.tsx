import React, { ReactNode } from "react";
import "./EditButton.css"

type EditButton = {
    children: ReactNode
}

const EditButton = ({children}: EditButton) => {
    return (
        <>
            <button className='EditButton'>
                {children}
            </button>
        </>
    )
}

export default EditButton