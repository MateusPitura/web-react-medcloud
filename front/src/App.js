import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='App__container'>
        <header>
          <div>Patient Management</div>
          <button>Add new patient</button>
          <div className='App__divider'></div>
        </header>
        <body>
          <header>
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
          <body>
            <div>1</div>
            <div>Mateus Pitura</div>
            <div>19/02/2004</div>
            <div>mateus@gmail.com</div>
            <div>Rua Jasmim, 124 - Contorno, Ponta Grossa - PR</div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </body>
        </body>
      </div>
    </div>
  );
}

export default App;
