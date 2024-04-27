import React from "react";
import Field from "../Field/Field.tsx";
import './Table.css'
import EditButton from "../EditButton/EditButton.tsx";
import DeleteButton from "../DeleteButton/DeleteButton.tsx";
import TableRow from '../../components/TableRow/TableRow.tsx'
import { tableRow } from "../../types/tableRow.ts";

const data = [
    {
        id: 1,
        name: 'Mateus',
        birthdate: '19/02/2000',
        email: 'mateus@gmail.com',
        address: 'Ponta Grossa, PR'
    },
    {
        id: 2,
        name: 'Ana',
        birthdate: '15/07/1995',
        email: 'ana@example.com',
        address: 'São Paulo, SP'
    },
    {
        id: 3,
        name: 'Carlos',
        birthdate: '03/11/1988',
        email: 'carlos@yahoo.com',
        address: 'Rio de Janeiro, RJ'
    },
    {
        id: 4,
        name: 'João',
        birthdate: '10/05/1992',
        email: 'joao@hotmail.com',
        address: 'Belo Horizonte, MG'
    },
    {
        id: 5,
        name: 'Maria',
        birthdate: '25/09/1985',
        email: 'maria@example.com',
        address: 'Curitiba, PR'
    },
    {
        id: 6,
        name: 'Pedro',
        birthdate: '08/12/1998',
        email: 'pedro@gmail.com',
        address: 'Porto Alegre, RS'
    },
    {
        id: 7,
        name: 'Juliana',
        birthdate: '21/03/1990',
        email: 'juliana@yahoo.com',
        address: 'Fortaleza, CE'
    },
    {
        id: 8,
        name: 'Lucas',
        birthdate: '14/06/1993',
        email: 'lucas@example.com',
        address: 'Salvador, BA'
    },
    {
        id: 9,
        name: 'Fernanda',
        birthdate: '02/04/1987',
        email: 'fernanda@hotmail.com',
        address: 'Recife, PE'
    },
    {
        id: 10,
        name: 'Amanda',
        birthdate: '30/11/1996',
        email: 'amanda@gmail.com',
        address: 'Manaus, AM'
    },
];

const Table = () => {
    return (
        <main className='Table'>
            <Field type="heaeder" title="ID" />
            <Field type="heaeder" title="Name" />
            <Field type="heaeder" title="Birthdate" />
            <Field type="heaeder" title="Email" />
            <Field type="heaeder" title="Address" />
            <Field type="heaeder" title="Actions" />
            {
                data.map((item: tableRow) => (
                    <TableRow
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        birthdate={item.birthdate}
                        email={item.email}
                        address={item.address}
                    />
                ))
            }
        </main>
    )
}

export default Table;