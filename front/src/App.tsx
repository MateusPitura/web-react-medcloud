import React, { useState } from 'react';
import './App.css';
import Table from './components/Table/Table.tsx';
import Modal from 'react-modal';
import Header from './components/Header/Header.tsx';
import Input from './components/Input/Input.tsx';

function App() {

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <div className='App'>
      <div className='App__container'>
        <Header
          title="Patient Management"
          buttonText='ADD NEW PATIENT'
          action={() => setIsModalVisible(true)}
        />
        <Table />
        <Modal
          isOpen={isModalVisible}
          className="App__modal"
        >
          <Header
            title="New Patient"
            buttonText='SAVE'
            action={() => setIsModalVisible(false)}
          />
          <Input
            label='Name'
            type='text'
          />
          <Input
            label='Birthdate'
            type='date'
          />
          <Input
            label='Email'
            type='email'
          />
          <Input
            label='Address'
            type='string'
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;
