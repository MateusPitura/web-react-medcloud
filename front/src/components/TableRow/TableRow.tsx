import React from "react";
import './TableRow.css';
import Field from "../Field/Field.tsx";
import EditButton from "../EditButton/EditButton.tsx";
import DeleteButton from "../DeleteButton/DeleteButton.tsx";
import { tableRow } from "../../types/tableRow";

const TableRow = ({id, name, birthdate, email, address}: tableRow) => {
    return (
        <>
            <Field title={id} />
            <Field title={name} />
            <Field title={birthdate} />
            <Field title={email} />
            <Field title={address} />
            <div>
                <EditButton>
                    <img src={require("../../assets/icons/editIcon.svg").default} />
                </EditButton>
                <DeleteButton>
                    <img src={require("../../assets/icons/deleteIcon.svg").default} />
                </DeleteButton>
            </div>
        </>
    )
}

export default TableRow