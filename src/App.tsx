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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Formulario React + Vite + TypeScript</h1>
      <Formulario onSubmit={agregarDato} />
      <ListaUsuarios data={data} />
    </div>
  );
}

export default App;
