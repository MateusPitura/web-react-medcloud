import React from "react";
import Field from "../Field/Field.tsx";
import './Table.css'

const Table = () => {
    return (
        <>
            <main className='Table'>
                <Field title="ID" />
                <Field title="Name" />
                <Field title="Birthdate" />
                <Field title="Email" />
                <Field title="Address" />
                <Field title="Actions" />
                <Field title="1" />
                <Field title="Mateus Pitura" />
                <Field title="10/02/2004" />
                <Field title="mateus@gmail.com" />
                <Field title="Ponta Grossa, PR" />
                <div className='Table__id'>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </main>
        </>
    )
}

export default Table;