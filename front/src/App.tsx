import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table/Table.tsx';
import CustomModal from './components/Modal/CustomModal.tsx';
import Header from './components/Header/Header.tsx';
import Input from './components/Input/Input.tsx';
import { patientType } from './types/patientType.ts';
import { ToastContainer } from 'react-toastify';
import { toastSucess } from "./controller/ToastController.ts"

function App() {

  const [isModalAddVisible, setIsModalAddVisible] = useState<boolean>(false);
  const [isModalEditVisible, setIsModalEditVisible] = useState<boolean>(false);
  //Os espaços em branco são necessário para indicar ao react que o componente é controlado e assim evitar uma mensagem do console
  const [editingData, setEditingData] = useState<patientType>({id: 1, name: ' ', birthdate: ' ', email: ' ', address: ' '});
  const [name, setName] = useState<string>(' ');
  const [birthdate, setBirthdate] = useState<string>(' ');
  const [email, setEmail] = useState<string>(' ');
  const [address, setAddress] = useState<string>(' ');

  useEffect(()=>{
    setName(editingData?.name)
    setBirthdate(editingData?.birthdate)
    setEmail(editingData?.email)
    setAddress(editingData?.address)
  }, [editingData])

  const handleSubmitAddNewPatient = (event: React.FormEvent<HTMLFormElement>) => {
    toastSucess("Patient created")
    const newData = {
      name: event.target[1].value,
      birthdate: event.target[2].value,
      email: event.target[3].value,
      address: event.target[4].value
    }
    console.log(newData)
  }

  const handleSubmitEditPatient = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toastSucess("Patient edited")
    const newData = {
      name,
      birthdate,
      email,
      address
    }
    console.log(editingData?.id, newData)
  }

  const handleSubmitDeletePatient = (id: number) => {
    toastSucess("Patient deleted: " + id)
  }

  return (
    <div className='App'>
      <div className='App__container'>
        <Header
          title="Patient Management"
          buttonText='ADD NEW PATIENT'
          action={() => setIsModalAddVisible(true)}
        />
        <Table
          setModalVisible={setIsModalEditVisible}
          setEditingData={setEditingData}
          onDelete = {handleSubmitDeletePatient}
        />
        <CustomModal
          isVisible={isModalAddVisible}
          setIsVisible={setIsModalAddVisible}
          onSubmit={handleSubmitAddNewPatient}
          title='New Patient'
          buttonText='SAVE'
        >
          <Input label='Name' type='text' />
          <Input label='Birthdate' type='date' />
          <Input label='E-mail' type='email' />
          <Input label='Address' type='string' />
        </CustomModal>
        <CustomModal
          isVisible={isModalEditVisible}
          setIsVisible={setIsModalEditVisible}
          onSubmit={handleSubmitEditPatient}
          title='Edit Patient'
          buttonText='SAVE CHANGES'
        >
          <Input onChange={e => setName(e)} value={name} label='Name' type='text' />
          <Input onChange={e => setBirthdate(e)} value={birthdate} label='Birthdate' type='date' />
          <Input onChange={e => setEmail(e)} value={email} label='E-mail' type='email' />
          <Input onChange={e => setAddress(e)} value={address} label='Address' type='string' />
        </CustomModal>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
