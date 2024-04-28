import React, { useEffect, useState } from "react";
import Field from "../Field/Field.tsx";
import './Table.css'
import TableRow from '../../components/TableRow/TableRow.tsx'
import { patientType } from "../../types/patientType.ts";
import { tableType } from '../../types/tableType.ts'
import { toastError } from "../../controller/ToastController.ts";
import { ToastContainer } from 'react-toastify';

// const data = [
//     {
//         id: 1,
//         name: 'Mateus',
//         birthdate: '2000-02-19',
//         email: 'mateus@gmail.com',
//         postalCode: '84060210',
//         street: 'Rua Crisântemo',
//         number: '278',
//         neighborhood: 'Contorno',
//         city: 'Ponta Grossa',
//         state: 'PR'
//     },
//     {
//         id: 2,
//         name: 'Ana',
//         birthdate: '1995-07-15',
//         email: 'ana@hotmail.com',
//         postalCode: '11045100',
//         street: 'Avenida São Paulo',
//         number: '405',
//         neighborhood: 'Boqueirão',
//         city: 'Santos',
//         state: 'SP'
//     },
//     {
//         id: 3,
//         name: 'Carlos',
//         birthdate: '1988-11-03',
//         email: 'carlos@yahoo.com',
//         postalCode: '20551030',
//         street: 'Rua da Paz',
//         number: '123',
//         neighborhood: 'Botafogo',
//         city: 'Rio de Janeiro',
//         state: 'RJ'
//     },
//     {
//         id: 4,
//         name: 'Juliana',
//         birthdate: '1992-04-25',
//         email: 'juliana@outlook.com',
//         postalCode: '88040001',
//         street: 'Avenida Beira Mar',
//         number: '1000',
//         neighborhood: 'Centro',
//         city: 'Florianópolis',
//         state: 'SC'
//     },
//     {
//         id: 5,
//         name: 'Ricardo',
//         birthdate: '1980-09-12',
//         email: 'ricardo@gmail.com',
//         postalCode: '01310904',
//         street: 'Rua Augusta',
//         number: '2409',
//         neighborhood: 'Cerqueira César',
//         city: 'São Paulo',
//         state: 'SP'
//     },
//     {
//         id: 6,
//         name: 'Fernanda',
//         birthdate: '1998-12-30',
//         email: 'fernanda@yahoo.com',
//         postalCode: '70001900',
//         street: 'Setor Comercial Sul',
//         number: '45',
//         neighborhood: 'Asa Sul',
//         city: 'Brasília',
//         state: 'DF'
//     },
//     {
//         id: 7,
//         name: 'Pedro',
//         birthdate: '1997-03-18',
//         email: 'pedro@hotmail.com',
//         postalCode: '40140010',
//         street: 'Avenida Tancredo Neves',
//         number: '450',
//         neighborhood: 'Caminho das Árvores',
//         city: 'Salvador',
//         state: 'BA'
//     },
//     {
//         id: 8,
//         name: 'Marina',
//         birthdate: '1985-06-21',
//         email: 'marina@gmail.com',
//         postalCode: '04072010',
//         street: 'Avenida Indianópolis',
//         number: '2500',
//         neighborhood: 'Moema',
//         city: 'São Paulo',
//         state: 'SP'
//     },
//     {
//         id: 9,
//         name: 'Lucas',
//         birthdate: '1990-10-05',
//         email: 'lucas@outlook.com',
//         postalCode: '22040002',
//         street: 'Rua Barata Ribeiro',
//         number: '150',
//         neighborhood: 'Copacabana',
//         city: 'Rio de Janeiro',
//         state: 'RJ'
//     },
//     {
//         id: 10,
//         name: 'Mariana',
//         birthdate: '1994-02-28',
//         email: 'mariana@hotmail.com',
//         postalCode: '30140105',
//         street: 'Avenida Afonso Pena',
//         number: '1500',
//         neighborhood: 'Centro',
//         city: 'Belo Horizonte',
//         state: 'MG'
//     }
// ];

const Table = ({ setModalVisible, setEditingData, onDelete }: tableType) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const dataFromServer = await fetch("http://localhost:8800")
            const dataJson = await dataFromServer.json()
            setData(dataJson)
        } catch (err) {
            toastError("Error in the server")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

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
                        setEditingData={setEditingData}
                        onDelete={onDelete}
                    />
                ))
            }
            <ToastContainer/>
        </main>
    )
}

export default Table;