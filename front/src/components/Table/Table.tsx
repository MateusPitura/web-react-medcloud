import React, { useEffect, useState } from "react";
import Field from "../Field/Field.tsx";
import './Table.css'
import TableRow from '../../components/TableRow/TableRow.tsx'
import { patientType } from "../../types/patientType.ts";
import { tableType } from '../../types/tableType.ts'

const Table = ({ setViewModalVisible, setEditModalVisible, setCurrentId, onDelete, data }: tableType) => {

    return (
        <main className='Table'>
            <div className="Table__item"><Field type="heaeder" title="ID" /></div>
            <div className="Table__item"><Field type="heaeder" title="Name" /></div>
            <div className="Table__item"><Field type="heaeder" title="Birthdate" /></div>
            <div className="Table__item"><Field type="heaeder" title="Email" /></div>
            <div className="Table__item"><Field type="heaeder" title="City" /></div>
            <div className="Table__item"><Field type="heaeder" title="" /></div>
            {
                data?.map((item: patientType) => (
                    <TableRow
                        key={item.id}
                        patient={item}
                        setViewModalVisible={setViewModalVisible}
                        setEditModalVisible={setEditModalVisible}
                        setCurrentId={setCurrentId}
                        onDelete={onDelete}
                    />
                ))
            }
        </main>
    )
}

export default Table;