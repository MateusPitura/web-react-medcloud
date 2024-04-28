import React, { useState } from 'react';
import './App.css';
import Table from './components/Table/Table.tsx';
import CustomModal from './components/Modal/CustomModal.tsx';
import Header from './components/Header/Header.tsx';
import Input from './components/Input/Input.tsx';
import { patient } from './types/patient.ts';

function App() {

  const [isModalAddVisible, setIsModalAddVisible] = useState<boolean>(false);
  const [isModalEditVisible, setIsModalEditVisible] = useState<boolean>(false);
  const [editingData, setEditingData] = useState<patient>();

  return (
    <div className='App'>
      <div className='App__container'>
        <Header
          title="Patient Management"
          buttonText='ADD NEW PATIENT'
          action={() => setIsModalAddVisible(true)}
        />
        <Table 
          setModalVisible={()=>setIsModalEditVisible(true)}
          setEditingData={setEditingData}
        />
        <CustomModal
          isVisible={isModalAddVisible}
          setIsVisible={setIsModalAddVisible}
          title='New Patient'
          buttonText='SAVE'
        >
          <Input label='Name' type='text' />
          <Input label='Birthdate' type='date' />
          <Input label='Email' type='email' />
          <Input label='Address' type='string' />
        </CustomModal>
        <CustomModal
          isVisible={isModalEditVisible}
          setIsVisible={setIsModalEditVisible}
          title='Edit Patient'
          buttonText='SAVE CHANGES'
        >
          <Input value={editingData?.name} label='Name' type='text' />
          <Input value={editingData?.birthdate} label='Birthdate' type='date' />
          <Input value={editingData?.email} label='Email' type='email' />
          <Input value={editingData?.address} label='Address' type='string' />
        </CustomModal>
      </div>
    </div>
  );
}

export default App;
