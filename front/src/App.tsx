import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table/Table.tsx';
import CustomModal from './components/Modal/CustomModal.tsx';
import Header from './components/Header/Header.tsx';
import Input from './components/Input/Input.tsx';
import { patientType } from './types/patientType.ts';
import { ToastContainer } from 'react-toastify';
import { toastSucess, toastError } from "./controller/ToastController.ts"
import { validateName, validateBirthdate, validateEmail, validatePostalCode, validateNumber } from './controller/ValidateInputs.ts';

function App() {

  const [isModalAddVisible, setIsModalAddVisible] = useState<boolean>(false);
  const [isModalEditVisible, setIsModalEditVisible] = useState<boolean>(false);
  //Os espaços em branco são necessário para indicar ao react que o componente é controlado e assim evitar uma mensagem do console
  const [editingData, setEditingData] = useState<patientType>({ id: 1, name: ' ', birthdate: ' ', email: ' ', postalCode: ' ', street: ' ', number: ' ', neighborhood: ' ', city: ' ', state: ' ' });
  const [name, setName] = useState<string>(' ');
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [birthdate, setBirthdate] = useState<string>(' ');
  const [isBirthdateValid, setIsBirthdateValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>(' ');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [postalCode, setPostalCode] = useState<string>(' ');
  const [isPostalCodeValid, setIsPostalCodeValid] = useState<boolean>(true);
  const [street, setStreet] = useState<string>(' ');
  const [isStreetValid, setIsStreetValid] = useState<boolean>(true);
  const [number, setNumber] = useState<string>(' ');
  const [isNumberValid, setIsNumberValid] = useState<boolean>(true)
  const [neighborhood, setNeighborhood] = useState<string>(' ');
  const [isNeighborhoodValid, setIsNeighborhoodValid] = useState<boolean>(true);
  const [city, setCity] = useState<string>(' ');
  const [isCityValid, setIsCityValid] = useState<boolean>(true)
  const [state, setState] = useState<string>(' ');
  const [isStateValid, setIsStateValid] = useState<boolean>(true)


  //Ao se alterar o valor do editingData, o que ocorre ao clicar no botão 'edit', ele setta os states
  useEffect(() => {
    setName(editingData?.name)
    setBirthdate(editingData?.birthdate)
    setEmail(editingData?.email)
    setPostalCode(editingData?.postalCode)
    setStreet(editingData?.street)
    setNumber(editingData?.number)
    setNeighborhood(editingData?.neighborhood)
    setCity(editingData?.city)
    setState(editingData?.state)
  }, [editingData])

  //Ao fechar a modal ele reseta os valores dos validatores e será o CEP
  useEffect(() => {
    if (!isModalAddVisible && !isModalEditVisible) {
      setIsNameValid(true)
      setIsBirthdateValid(true)
      setIsEmailValid(true)
      setIsPostalCodeValid(true)
      setIsStreetValid(true)
      setIsNumberValid(true)
      setIsNeighborhoodValid(true)
      setIsCityValid(true)
      setPostalCode("")
      setIsStateValid(true)
      setStreet("")
      setNeighborhood("")
      setCity("")
      setState("")
    }
  }, [isModalAddVisible, isModalEditVisible])

  const fetchDataFromViaCEP = async () => {
    if (validatePostalCode(postalCode)) {
      const dataFromViaCep = await fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
      if(dataFromViaCep.ok){
        const dataJson = await dataFromViaCep.json()
        setStreet(dataJson.logradouro)
        setNeighborhood(dataJson.bairro)
        setCity(dataJson.localidade)
        setState(dataJson.uf)
        alert('teste1')
      } else {
        setIsPostalCodeValid(false)
        toastError("Invalid postal code")
        alert('teste1')
      }
    }
  }

  useEffect(() => {
    fetchDataFromViaCEP()
  }, [postalCode])

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

    const postalCodeValid = validatePostalCode(event.target[3].value)
    setIsPostalCodeValid(postalCodeValid)
    if (!postalCodeValid) {
      toastError("Invalid postal code")
    }

    const numberValid = validateNumber(event.target[5].value)
    setIsNumberValid(numberValid)
    if (!numberValid) {
      toastError("Invalid number")
    }

    if (!nameValid || !birthdate || !emailValid || !postalCodeValid) {
      return false
    }
    return true
  }

  const handleSubmitAddNewPatient = (event: React.FormEvent<HTMLFormElement>) => {
    if (!validateInputs(event)) {
      return false
    }
    toastSucess("Patient created")
    const newData = {
      name: event.target[0].value,
      birthdate: event.target[1].value,
      email: event.target[2].value,
      postalCode: event.target[3].value,
      street: event.target[4].value,
      number: event.target[5].value,
      neighborhood: event.target[6].value,
      city: event.target[7].value,
      state: event.target[8].value
    }
    console.log(newData)
    return true
  }

  const handleSubmitEditPatient = (event: React.FormEvent<HTMLFormElement>) => {
    if (!validateInputs(event)) {
      return false
    }
    toastSucess("Patient edited")
    const newData = {
      name: event.target[0].value,
      birthdate: event.target[1].value,
      email: event.target[2].value,
      postalCode: event.target[3].value,
      street: event.target[4].value,
      number: event.target[5].value,
      neighborhood: event.target[6].value,
      city: event.target[7].value,
      state: event.target[8].value
    }
    console.log(editingData?.id, newData)
    return true
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
          <Input label='E-mail' type='text' isValid={isEmailValid} />
          <Input onChange={e => setPostalCode(e)} value={postalCode} label='Postal Code' type='text' isValid={isPostalCodeValid} />
          <Input label='Number' type='text' isValid={isNumberValid} />
          <Input label='Street' type='text' value={street} isValid={isStreetValid} />
          <Input label='Neighborhood' type='text' value={neighborhood} isValid={isNeighborhoodValid} />
          <Input label='City' type='text' value={city} isValid={isCityValid} />
          <Input label='State' type='text' value={state} isValid={isStateValid} />
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
          <Input onChange={e => setEmail(e)} value={email} label='E-mail' type='text' isValid={isEmailValid} />
          <Input onChange={e => setPostalCode(e)} value={postalCode} label='Postal Code' type='text' isValid={isPostalCodeValid} />
          <Input label='Street' type='text' value={street} isValid={isStreetValid} />
          <Input onChange={e => setNumber(e)} label='Number' type='text' value={number} isValid={isNumberValid} />
          <Input label='Neighborhood' type='text' value={neighborhood} isValid={isNeighborhoodValid} />
          <Input label='City' type='text' value={city} isValid={isCityValid} />
          <Input label='State' type='text' value={state} isValid={isStateValid} />
        </CustomModal>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
