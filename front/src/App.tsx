import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table/Table.tsx';
import CustomModal from './components/Modal/CustomModal.tsx';
import Header from './components/Header/Header.tsx';
import Input from './components/Input/Input.tsx';
import { patientType } from './types/patientType.ts';
import { ToastContainer } from 'react-toastify';
import { toastSucess, toastError } from "./controller/ToastController.ts"
import { validateName, validateBirthdate, validateEmail, validateAddress } from './controller/ValidateInputs.ts';

function App() {

  const [isModalAddVisible, setIsModalAddVisible] = useState<boolean>(false);
  const [isModalEditVisible, setIsModalEditVisible] = useState<boolean>(false);
  //Os espaços em branco são necessário para indicar ao react que o componente é controlado e assim evitar uma mensagem do console
  const [editingData, setEditingData] = useState<patientType>({ id: 1, name: ' ', birthdate: ' ', email: ' ', address: ' ' });
  const [name, setName] = useState<string>(' ');
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [birthdate, setBirthdate] = useState<string>(' ');
  const [isBirthdateValid, setIsBirthdateValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>(' ');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [address, setAddress] = useState<string>(' ');
  const [isAddressValid, setIsAddressValid] = useState<boolean>(true);

  useEffect(() => {
    setName(editingData?.name)
    setBirthdate(editingData?.birthdate)
    setEmail(editingData?.email)
    setAddress(editingData?.address)
  }, [editingData])

  useEffect(() => {
    setIsNameValid(true)
    setIsBirthdateValid(true)
    setIsEmailValid(true)
    setIsAddressValid(true)
  }, [isModalAddVisible, isModalEditVisible])

  const validateInputs = (event: React.FormEvent<HTMLFormElement>) => {
    const nameValid = validateName(event.target[0].value)
    setIsNameValid(nameValid)
    if (!nameValid) {
      toastError("Invalid name")
    }

    const birthdateValid = validateBirthdate(event.target[1].value)
    setIsBirthdateValid(birthdateValid)
    if (!birthdateValid) {
      toastError("Invalid birthdate")
    }

    const emailValid = validateEmail(event.target[2].value)
    setIsEmailValid(emailValid)
    if (!emailValid) {
      toastError("Invalid email")
    }

    const addressValid = validateAddress(event.target[3].value)
    setIsAddressValid(addressValid)
    if (!addressValid) {
      toastError("Invalid address")
    }
  }

  const handleSubmitAddNewPatient = (event: React.FormEvent<HTMLFormElement>) => {
    toastSucess("Patient created")
    validateInputs(event)
    const newData = {
      name: event.target[0].value,
      birthdate: event.target[1].value,
      email: event.target[2].value,
      address: event.target[3].value
    }
    console.log(newData)
  }

  const handleSubmitEditPatient = (event: React.FormEvent<HTMLFormElement>) => {
    toastSucess("Patient edited")
    validateInputs(event)
    const newData = {
      name: event.target[0].value,
      birthdate: event.target[1].value,
      email: event.target[2].value,
      address: event.target[3].value
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
          buttonType='primary'
          action={() => setIsModalAddVisible(true)}
        />
        <Table
          setModalVisible={setIsModalEditVisible}
          setEditingData={setEditingData}
          onDelete={handleSubmitDeletePatient}
        />
        <CustomModal
          isVisible={isModalAddVisible}
          setIsVisible={setIsModalAddVisible}
          onSubmit={handleSubmitAddNewPatient}
          title='New Patient'
          buttonText='SAVE'
        >
          <Input label='Name' type='text' isValid={isNameValid} />
          <Input label='Birthdate' type='date' isValid={isBirthdateValid} />
          <Input label='E-mail' type='email' isValid={isEmailValid} />
          <Input label='Address' type='string' isValid={isAddressValid} />
        </CustomModal>
        <CustomModal
          isVisible={isModalEditVisible}
          setIsVisible={setIsModalEditVisible}
          onSubmit={handleSubmitEditPatient}
          title='Edit Patient'
          buttonText='SAVE CHANGES'
        >
          <Input onChange={e => setName(e)} value={name} label='Name' type='text' isValid={isNameValid} />
          <Input onChange={e => setBirthdate(e)} value={birthdate} label='Birthdate' type='date' isValid={isBirthdateValid} />
          <Input onChange={e => setEmail(e)} value={email} label='E-mail' type='email' isValid={isEmailValid} />
          <Input onChange={e => setAddress(e)} value={address} label='Address' type='string' isValid={isAddressValid} />
        </CustomModal>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
