import type { FormData } from './Formulario';

interface Props {
  data: FormData[];
}

export default function ListaUsuarios({ data }: Props) {
  if (data.length === 0) return <p>No hay datos aún</p>;

  return (
<ul className="lista-usuarios">
  {data.map((d, i) => (
    <li key={i}>
      {d.nombre} - {d.correo}
    </li>
  ))}
</ul>
  );
}
