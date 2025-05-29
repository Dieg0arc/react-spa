// Importamos las funciones necesarias de vitest y testing-library/react
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
// Importamos la aplicación que queremos probar
import App from '../App';

// Define un grupo de pruebas relacionadas con el componente App
describe('App', () => {
  // Define una prueba individual con el nombre "renders the form correctly"
  it('renders the form correctly', () => {
    // render(<App />) crea un DOM virtual del componente, y que getByPlaceholderText('Nombre') busca el <input> esperado
    const { getByPlaceholderText } = render(<App />);
    // Verificamos que el campo de entrada con el placeholder "Nombre" está presente
    expect(getByPlaceholderText('Nombre')).toBeDefined();
  });
});
