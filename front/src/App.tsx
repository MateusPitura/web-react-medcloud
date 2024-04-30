import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table/Table.tsx';
import CustomModal from './components/CustomModal/CustomModal.tsx';
import Header from './components/Header/Header.tsx';
import Input from './components/Input/Input.tsx';
import Form from './components/Form/Form.tsx';
import { patientType } from './types/patientType.ts';
import { ToastContainer } from 'react-toastify';
import { readPatients, deletePatient, createPatient, updatePatient, fetchPostalCode } from './controller/FetchData.ts'
import { validateName, validateBirthdate, validateEmail, validatePostalCode, validateNumber } from './controller/ValidateInputs.ts';
import { toastError } from './controller/ToastController.ts';
import { handleSubmitForm } from './controller/SubmitForm.ts';

function App() {

  const [isModalAddVisible, setIsModalAddVisible] = useState<boolean>(false);
  const [isModalEditVisible, setIsModalEditVisible] = useState<boolean>(false);
  //Os espaços em branco são necessário para indicar ao react que o componente é controlado e assim evitar uma mensagem do console
  const [data, setData] = useState<patientType[]>([]);
  const [editingData, setEditingData] = useState<patientType>({ id: ' ', name: ' ', birthdate: ' ', email: ' ', postalCode: ' ', street: ' ', number: ' ', neighborhood: ' ', city: ' ', state: ' ' });
  const [name, setName] = useState<string>(' ');
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [birthdate, setBirthdate] = useState<string>(' ');
  const [isBirthdateValid, setIsBirthdateValid] = useState<boolean>(true);
  const [email, setEmail] = useState<string>(' ');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [postalCode, setPostalCode] = useState<string>(' ');
  const [isPostalCodeValid, setIsPostalCodeValid] = useState<boolean>(true);
  const [street, setStreet] = useState<string>(' ');
  const [number, setNumber] = useState<string>(' ');
  const [isNumberValid, setIsNumberValid] = useState<boolean>(true)
  const [neighborhood, setNeighborhood] = useState<string>(' ');
  const [city, setCity] = useState<string>(' ');
  const [state, setState] = useState<string>(' ');

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

  //Ao fechar a modal ele reseta os valores dos validatores e dos dados sobre o endereço
  useEffect(() => {
    if (!isModalAddVisible && !isModalEditVisible) {
      setIsNameValid(true)
      setIsBirthdateValid(true)
      setIsEmailValid(true)
      setIsPostalCodeValid(true)
      setIsNumberValid(true)
      setPostalCode("")
      setStreet(" ") //Precisa ser espaço em branco para o value do input entender que ele existe
      setNumber("")
      setNeighborhood(" ")
      setCity(" ")
      setState(" ")
    }
  }, [isModalAddVisible, isModalEditVisible])

  const fetchDataFromViaCEP = async () => {
    if (validatePostalCode(postalCode)) {
      const postalCodeData = await fetchPostalCode(postalCode)
      if (!postalCodeData) {
        setIsPostalCodeValid(false)
        return false
      }
      setIsPostalCodeValid(true)
      setStreet(postalCodeData.logradouro)
      setNeighborhood(postalCodeData.bairro)
      setCity(postalCodeData.localidade)
      setState(postalCodeData.uf)
      return true
    }
  }

  useEffect(() => {
    fetchDataFromViaCEP()
  }, [postalCode])

  const validateInputs = async (patient: patientType) => {
    const nameValid = validateName(patient.name)
    setIsNameValid(nameValid)

    const birthdateValid = validateBirthdate(patient.birthdate)
    setIsBirthdateValid(birthdateValid)

    const emailValid = validateEmail(patient.email)
    setIsEmailValid(emailValid)

    const postalCodeValid = validatePostalCode(patient.postalCode)
    setIsPostalCodeValid(postalCodeValid)
    if (!postalCode) toastError("Invalid postal code")

    const postalCodeNotExist = await fetchDataFromViaCEP()

    const numberValid = validateNumber(patient.number)
    setIsNumberValid(numberValid)

    if (!nameValid || !birthdateValid || !emailValid || !postalCodeValid || !postalCodeNotExist || !numberValid) {
      return false
    }
    return true
  }

  const listPatients = () => {
    setTimeout(async () => {
      setData(await readPatients())
    }, 100)
  }

  //Chamado ao carregar a página pela primeira vez
  useEffect(() => {
    listPatients()
  }, [])

  const handleSubmitAddNewPatient = async (event: React.FormEvent<HTMLFormElement>) => {
    if (await handleSubmitForm(event, validateInputs, createPatient)) {
      listPatients()
      setIsModalAddVisible(false)
      return true
    }
    return false
  }

  const handleSubmitEditPatient = async (event: React.FormEvent<HTMLFormElement>) => {
    if (await handleSubmitForm(event, validateInputs, updatePatient, editingData?.id)) {
      listPatients()
      setIsModalEditVisible(false)
      return true
    }
    return false
  }

  const handleSubmitDeletePatient = async (id: string) => {
    if (await deletePatient(id)) listPatients()
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
          data={data}
        />
        <CustomModal
          isVisible={isModalAddVisible}
          setIsVisible={setIsModalAddVisible}
          title='New Patient'
        >
          <Form
            buttonText='SAVE'
            onSubmit={handleSubmitAddNewPatient}
          >
            <Input label='Name' type='text' isValid={isNameValid} />
            <Input label='Birthdate' type='date' isValid={isBirthdateValid} />
            <Input label='E-mail' type='text' isValid={isEmailValid} />
            <Input onChange={e => setPostalCode(e)} value={postalCode} label='Postal Code' type='text' isValid={isPostalCodeValid} />
            <Input label='Street' type='text' value={street} isStatic={true} />
            <Input label='Number' type='text' isValid={isNumberValid} isStatic={false} />
            <Input label='Neighborhood' type='text' value={neighborhood} isStatic={true} />
            <Input label='City' type='text' value={city} isStatic={true} />
            <Input label='State' type='text' value={state} isStatic={true} />
          </Form>
        </CustomModal>
        <CustomModal
          isVisible={isModalEditVisible}
          setIsVisible={setIsModalEditVisible}
          title='Edit Patient'
        >
          <Form
            onSubmit={handleSubmitEditPatient}
            buttonText='SAVE CHANGES'
          >
            <Input onChange={e => setName(e)} value={name} label='Name' type='text' isValid={isNameValid} />
            <Input onChange={e => setBirthdate(e)} value={birthdate} label='Birthdate' type='date' isValid={isBirthdateValid} />
            <Input onChange={e => setEmail(e)} value={email} label='E-mail' type='text' isValid={isEmailValid} />
            <Input onChange={e => setPostalCode(e)} value={postalCode} label='Postal Code' type='text' isValid={isPostalCodeValid} />
            <Input label='Street' type='text' value={street} isStatic={true} />
            <Input onChange={e => setNumber(e)} label='Number' type='text' value={number} isValid={isNumberValid} />
            <Input label='Neighborhood' type='text' value={neighborhood} isStatic={true} />
            <Input label='City' type='text' value={city} isStatic={true} />
            <Input label='State' type='text' value={state} isStatic={true} />
          </Form>
        </CustomModal>
        <ToastContainer />
      </div>
    </div >
  );
}

export default App;
