import React from "react";
import "./EditButton.css"

const EditButton = ({children}: React.SVGProps<SVGSVGElement>) => {
    return (
        <>
            <button className='EditButton'>
                {children}
            </button>
        </>
    )
}

export default EditButton