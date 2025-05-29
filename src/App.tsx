import { useState } from 'react';
import Formulario from './components/Formulario';
import type { FormData } from './components/Formulario';
import ListaUsuarios from './components/ListaUsuarios';


function App() {
  const [data, setData] = useState<FormData[]>([]);

  const agregarDato = (nuevo: FormData) => {
    setData([...data, nuevo]);
  };

  return (
    <div className="app-container">
      <h1 className="titulo">Registrate</h1>
      <h3 className='descripcion'>ingresa tus datos para entrar a la lista</h3>
      <Formulario onSubmit={agregarDato} />
      <br />
      <h3 className='list'>Lista de los resgistrados: </h3>
      <ListaUsuarios data={data} />
    </div>
  );
}

export default App;
