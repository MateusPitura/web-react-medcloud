import React from "react";
import './TableRow.css';
import Field from "../Field/Field.tsx";
import Button from "../Button/Button.tsx";
import { tableRowType } from "../../types/tableRowType.ts";

const TableRow = ({ patient, setViewModalVisible, setEditModalVisible, setDeleteModalVisible, setCurrentId }: tableRowType) => {

    const handleViewButton = () => {
        setCurrentId(patient.id)
        setViewModalVisible(true)
    }

    const handleEditButton = () => {
        setCurrentId(patient.id)
        setEditModalVisible(true)
    }

    const handleDeleteButton = () => {
        setCurrentId(patient.id)
        setDeleteModalVisible(true)
    }

    return (
        <>
            <div className="Table__item"><Field title={patient.id} /></div>
            <div className="Table__item"><Field title={patient.name} /></div>
            <div className="Table__item"><Field title={patient.birthdate} /></div>
            <div className="Table__item"><Field title={patient.email} /></div>
            <div className="Table__item"><Field title={patient.city} /></div>
            <div className="Table__item Table__button">
                <Button onClick={handleViewButton} type={'action'}>
                    <img src={require("../../assets/icons/viewIcon.svg").default} />
                </Button>
                <Button onClick={handleEditButton} type={'action'}>
                    <img src={require("../../assets/icons/editIcon.svg").default} />
                </Button>
                <Button onClick={handleDeleteButton} type={'action'}>
                    <img src={require("../../assets/icons/deleteIcon.svg").default} />
                </Button>
            </div>
        </>
    )
}

export default TableRow