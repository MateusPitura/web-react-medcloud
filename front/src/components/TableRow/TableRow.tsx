import React from "react";
import './TableRow.css';
import Field from "../Field/Field.tsx";
import EditButton from "../EditButton/EditButton.tsx";
import DeleteButton from "../DeleteButton/DeleteButton.tsx";
import { tableRow } from "../../types/tableRow";

const TableRow = ({patient, setModalVisible, setEditingData }: tableRow) => {

    return (
        <>
            <Field title={patient.id} />
            <Field title={patient.name} />
            <Field title={patient.birthdate} />
            <Field title={patient.email} />
            <Field title={patient.address} />
            <div className="TableRow">
                <div onClick={() => {
                    setModalVisible()
                    const data = {
                        id: patient.id,
                        name: patient.name,
                        birthdate: patient.birthdate,
                        email: patient.email,
                        address: patient.address
                    }
                    setEditingData(data)
                }}>
                    <EditButton>
                        <img src={require("../../assets/icons/editIcon.svg").default} />
                    </EditButton>
                </div>
                <DeleteButton>
                    <img src={require("../../assets/icons/deleteIcon.svg").default} />
                </DeleteButton>
            </div>
        </>
    )
}

export default TableRow