import React from "react";
import "./DeleteButton.css"

const DeleteButton = ({children}: React.SVGProps<SVGSVGElement>) => {
    return (
        <>
            <button className='DeleteButton'>
                {children}
            </button>
        </>
    )
}

export default DeleteButton