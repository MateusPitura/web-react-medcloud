import React from 'react';
import './App.css';
import ButtonPrimary from './components/ButtonPrimary.tsx';

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
        <main className='App__main'>
          <header className='App__contentHeader'>
            <div>ID</div>
            <div>Name</div>
            <div>Birthdate</div>
            <div>E-mail</div>
            <div>Address</div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </header>
          <main>
            <div>1</div>
            <div>Mateus Pitura</div>
            <div>19/02/2004</div>
            <div>mateus@gmail.com</div>
            <div>Rua Jasmim, 124 - Contorno, Ponta Grossa - PR</div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </main>
        </main>
      </div>
    </div>
  );
}

export default App;
