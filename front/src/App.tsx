import React, { useState } from 'react';
import './App.css';
import ButtonPrimary from './components/ButtonPrimary/ButtonPrimary.tsx';
import Table from './components/Table/Table.tsx';
import Modal from 'react-modal';
import Divider from './components/Divider/Divider.tsx';
import Header from './components/Header/Header.tsx';

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
        </Modal>
      </div>
    </div>
  );
}

export default App;
