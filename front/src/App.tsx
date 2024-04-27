import React from 'react';
import './App.css';
import ButtonPrimary from './components/ButtonPrimary/ButtonPrimary.tsx';
import Table from './components/Table/Table.tsx';

function App() {
  return (
    <div className='App'>
      <div className='App__container'>
        <header className='App__header'>
          <div className='App__headerTexts'>
            <div className='App__headerTitle'>Patient Management</div>
            <div className='App__headerButton'>
              <ButtonPrimary title="Add new patient"/>
            </div>
          </div>
          <div className='App__divider'></div>
        </header>
        <Table/>
      </div>
    </div>
  );
}

export default App;
