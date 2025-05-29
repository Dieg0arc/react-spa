import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

export interface FormData {
  nombre: string;
  correo: string;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

export default function Formulario({ onSubmit }: Props) {
  const [form, setForm] = useState<FormData>({ nombre: '', correo: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.correo) return;
    onSubmit(form);
    setForm({ nombre: '', correo: '' });
  };

  return (
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
  );
}
