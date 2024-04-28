import React from "react";
import Field from "../Field/Field.tsx";
import './Table.css'
import TableRow from '../../components/TableRow/TableRow.tsx'
import { patientType } from "../../types/patientType.ts";
import { tableType } from '../../types/tableType.ts'

const data = [
    {
        id: 1,
        name: 'Mateus',
        birthdate: '2000-02-19',
        email: 'mateus@gmail.com',
        address: 'Ponta Grossa, PR'
    },
    {
        id: 2,
        name: 'Ana',
        birthdate: '1995-07-15',
        email: 'ana@example.com',
        address: 'São Paulo, SP'
    },
    {
        id: 3,
        name: 'Carlos',
        birthdate: '1988-11-03',
        email: 'carlos@yahoo.com',
        address: 'Rio de Janeiro, RJ'
    },
    {
        id: 4,
        name: 'João',
        birthdate: '1992-05-10',
        email: 'joao@hotmail.com',
        address: 'Belo Horizonte, MG'
    },
    {
        id: 5,
        name: 'Maria',
        birthdate: '1985-09-25',
        email: 'maria@example.com',
        address: 'Curitiba, PR'
    },
    {
        id: 6,
        name: 'Pedro',
        birthdate: '1998-12-08',
        email: 'pedro@gmail.com',
        address: 'Porto Alegre, RS'
    },
    {
        id: 7,
        name: 'Juliana',
        birthdate: '1990-03-21',
        email: 'juliana@yahoo.com',
        address: 'Fortaleza, CE'
    },
    {
        id: 8,
        name: 'Lucas',
        birthdate: '1993-06-14',
        email: 'lucas@example.com',
        address: 'Salvador, BA'
    },
    {
        id: 9,
        name: 'Fernanda',
        birthdate: '1987-04-02',
        email: 'fernanda@hotmail.com',
        address: 'Recife, PE'
    },
    {
        id: 10,
        name: 'Amanda',
        birthdate: '1996-11-30',
        email: 'amanda@gmail.com',
        address: 'Manaus, AM'
    },
];

const Table = ({setModalVisible, setEditingData, onDelete}: tableType) => {
    return (
        <main className='Table'>
            <Field type="heaeder" title="ID" />
            <Field type="heaeder" title="Name" />
            <Field type="heaeder" title="Birthdate" />
            <Field type="heaeder" title="E-mail" />
            <Field type="heaeder" title="Address" />
            <Field type="heaeder" title="Actions" />
            {
                data.map((item: patientType) => (
                    <TableRow
                        key={item.id}
                        patient={item}
                        setModalVisible={setModalVisible}
                        setEditingData={setEditingData}
                        onDelete = {onDelete}
                    />
                ))
            }
        </main>
    )
}

export default Table;