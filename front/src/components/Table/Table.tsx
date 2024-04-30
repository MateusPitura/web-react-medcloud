import React, { useEffect, useState } from "react";
import Field from "../Field/Field.tsx";
import './Table.css'
import TableRow from '../../components/TableRow/TableRow.tsx'
import { patientType } from "../../types/patientType.ts";
import { tableType } from '../../types/tableType.ts'

const Table = ({ setModalVisible, setCurrentId, onDelete, data }: tableType) => {

    return (
        <main className='Table'>
            <Field type="heaeder" title="ID" />
            <Field type="heaeder" title="Name" />
            <Field type="heaeder" title="Birthdate" />
            <Field type="heaeder" title="E-mail" />
            <Field type="heaeder" title="City" />
            <Field type="heaeder" title="Actions" />
            {
                data?.map((item: patientType) => (
                    <TableRow
                        key={item.id}
                        patient={item}
                        setModalVisible={setModalVisible}
                        setCurrentId={setCurrentId}
                        onDelete={onDelete}
                    />
                ))
            }
        </main>
    )
}

export default Table;