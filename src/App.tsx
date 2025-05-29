import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormData {
  nombre: string;
  correo: string;
}

function App() {
  const [form, setForm] = useState<FormData>({ nombre: '', correo: '' });
  const [data, setData] = useState<FormData[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.correo) return;
    setData([...data, form]);
    setForm({ nombre: '', correo: '' });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Formulario React + Vite + TypeScript</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          name="correo"
          type="email"
          placeholder="Correo"
          value={form.correo}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {data.map((d, i) => (
          <li key={i}>
            {d.nombre} - {d.correo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
