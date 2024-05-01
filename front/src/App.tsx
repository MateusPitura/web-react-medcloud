import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table/Table.tsx';
import CustomModal from './components/CustomModal/CustomModal.tsx';
import Header from './components/Header/Header.tsx';
import Input from './components/Input/Input.tsx';
import Form from './components/Form/Form.tsx';
import SearchBar from "./components/SearchBar/SearchBar.tsx"
import { patientType } from './types/patientType.ts';
import { ToastContainer } from 'react-toastify';
import { listAllPatients, deletePatient, createPatient, updatePatient, readPatient, fetchPostalCode, getCountDocuments } from './controller/FetchData.ts'
import { validateName, validateBirthdate, validateEmail, validatePostalCode, validateNumber } from './controller/ValidateInputs.ts';
import { toastError } from './controller/ToastController.ts';
import { handleSubmitForm } from './controller/SubmitForm.ts';

function App() {

  const [isModalAddVisible, setIsModalAddVisible] = useState<boolean>(false);
  const [isModalEditVisible, setIsModalEditVisible] = useState<boolean>(false);
  const [isModalViewVisible, setIsModalViewVisible] = useState<boolean>(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1)
  const [maxPages, setMaxPages] = useState<number>(1)

  const [data, setData] = useState<patientType[]>([]);
  const [currentId, setCurrentId] = useState<string>();

  const [name, setName] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(true);

  const [birthdate, setBirthdate] = useState<string>("");
  const [isBirthdateValid, setIsBirthdateValid] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const [postalCode, setPostalCode] = useState<string>("");
  const [isPostalCodeValid, setIsPostalCodeValid] = useState<boolean>(true);

  const [number, setNumber] = useState<string>("");
  const [isNumberValid, setIsNumberValid] = useState<boolean>(true)

  const [street, setStreet] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

  const getPatientData = async (currentId?: string) => {
    const data = await readPatient(currentId)
    setName(data?.name)
    setBirthdate(data?.birthdate)
    setEmail(data?.email)
    setPostalCode(data?.postalCode)
    setStreet(data?.street)
    setNumber(data?.number)
    setNeighborhood(data?.neighborhood)
    setCity(data?.city)
    setState(data?.state)
  }

  // Ao se alterar o valor do editingData, o que ocorre ao clicar no botão 'edit', ele setta os states
  useEffect(() => {
    if (currentId) {
      getPatientData(currentId)
    }
  }, [currentId])

  // Ao fechar a modal ele reseta os valores dos validatores, o id e os dados sobre o endereço
  useEffect(() => {
    if (!isModalAddVisible && !isModalEditVisible && !isModalViewVisible && !isModalDeleteVisible) {
      setIsNameValid(true)
      setIsBirthdateValid(true)
      setIsEmailValid(true)
      setIsPostalCodeValid(true)
      setIsNumberValid(true)

      setPage(1)
      setCurrentId("")
      setPostalCode("")
      setStreet("")
      setNumber("")
      setNeighborhood("")
      setCity("")
      setState("")
    }
  }, [isModalAddVisible, isModalEditVisible, isModalViewVisible, isModalDeleteVisible])

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
    if (postalCode) fetchDataFromViaCEP()
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
    if (!postalCodeValid) toastError("Invalid postal code")

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
      setMaxPages(await getCountDocuments())
      setData(await listAllPatients(page))
    }, 100)
  }

  //Chamado ao carregar a página pela primeira vez
  useEffect(() => {
    listPatients()
  }, [page])

  const handleSubmitAddNewPatient = async (event: React.FormEvent<HTMLFormElement>) => {
    if (await handleSubmitForm(event, validateInputs, createPatient)) {
      listPatients()
      setIsModalAddVisible(false)
    }
  }

  const handleSubmitEditPatient = async (event: React.FormEvent<HTMLFormElement>) => {
    if (await handleSubmitForm(event, validateInputs, updatePatient, currentId)) {
      listPatients()
      setIsModalEditVisible(false)
    }
  }

  const handleSubmitDeletePatient = async () => {
    if (await deletePatient(currentId)) {
      listPatients()
      setIsModalDeleteVisible(false)
    }
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
        <SearchBar
          setData={setData}
        />
        <Table
          setEditModalVisible={setIsModalEditVisible}
          setViewModalVisible={setIsModalViewVisible}
          setDeleteModalVisible={setIsModalDeleteVisible}
          setCurrentId={setCurrentId}
          setPage={setPage}
          page={page}
          maxPages={maxPages}
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
        <CustomModal
          isVisible={isModalViewVisible}
          setIsVisible={setIsModalViewVisible}
          title='View Patient'
        >
          <Input value={name} label='Name' type='text' />
          <Input value={birthdate} label='Birthdate' type='date' />
          <Input value={email} label='E-mail' type='text' />
          <Input value={postalCode} label='Postal Code' type='text' />
          <Input label='Street' type='text' value={street} isStatic={true} />
          <Input label='Number' type='text' value={number} />
          <Input label='Neighborhood' type='text' value={neighborhood} isStatic={true} />
          <Input label='City' type='text' value={city} isStatic={true} />
        </CustomModal>
        <CustomModal
          isVisible={isModalDeleteVisible}
          setIsVisible={setIsModalDeleteVisible}
          title='Delete patient?'
        >
          <Form
            onSubmit={handleSubmitDeletePatient}
            buttonText='DELETE PATIENT'
          >
            <div className='App__text'>
              Are you sure you want to delete "{name}"? This patient will be deleted immediately. You can't undo this action
            </div>
          </Form>
        </CustomModal>
        <ToastContainer />
      </div>
    </div >
  );
}

export default App;
