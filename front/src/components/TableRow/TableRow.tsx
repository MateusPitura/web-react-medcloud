import React from "react";
import './TableRow.css';
import Field from "../Field/Field.tsx";
import EditButton from "../Button/Button.tsx";
import DeleteButton from "../Button/Button.tsx";
import { tableRowType } from "../../types/tableRowType.ts";

const TableRow = ({ patient, setModalVisible, setEditingData, onDelete }: tableRowType) => {

    const handleEditButton = () => {
        const data = {
            id: patient.id,
            name: patient.name,
            birthdate: patient.birthdate,
            email: patient.email,
            address: patient.address
        }
        setEditingData(data)
        setModalVisible(true)
    }

    const handleDeleteButton = () => {
        onDelete(patient.id)
    }

    return (
        <>
            <Field title={patient.id} />
            <Field title={patient.name} />
            <Field title={patient.birthdate} />
            <Field title={patient.email} />
            <Field title={patient.address} />
            <div>
                <EditButton onClick={handleEditButton} type={'edit'}>
                    <img src={require("../../assets/icons/editIcon.svg").default} />
                </EditButton>
                <DeleteButton onClick={handleDeleteButton} type={'delete'}>
                    <img src={require("../../assets/icons/deleteIcon.svg").default} />
                </DeleteButton>
            </div>
        </>
    )
}

export default TableRow