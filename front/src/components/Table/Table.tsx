import React from "react";
import Field from "../Field/Field.tsx";
import './Table.css'
import EditButton from "../EditButton/EditButton.tsx";
import DeleteButton from "../DeleteButton/DeleteButton.tsx";

const Table = () => {
    return (
        <>
            <main className='Table'>
                <Field type="heaeder" title="ID" />
                <Field type="heaeder" title="Name" />
                <Field type="heaeder" title="Birthdate" />
                <Field type="heaeder" title="Email" />
                <Field type="heaeder" title="Address" />
                <Field type="heaeder" title="Actions" />
                <Field title="1" />
                <Field title="Mateus Pitura" />
                <Field title="10/02/2004" />
                <Field title="mateus@gmail.com" />
                <Field title="Ponta Grossa, PR" />
                <div>
                    <EditButton>
                        <img src={require("../../assets/icons/editIcon.svg").default}/>
                    </EditButton>
                    <DeleteButton>
                        <img src={require("../../assets/icons/deleteIcon.svg").default}/>
                    </DeleteButton>
                </div>
            </main>
        </>
    )
}

export default Table;