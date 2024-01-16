import myLogo from './assets/logoshorts.png';  // Ajusta la ruta según la ubicación real de tu imagen.
import React, { useState } from 'react';  // Importa React y el hook useState desde la biblioteca 'react'.
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa los estilos CSS de Bootstrap.
import './App.css';  // Importa los estilos CSS locales de la aplicación.

function App() {
  // Estado para almacenar el número de visitas.
  const [visits, setVisits] = useState('');

  // Estado para almacenar el RPM (Revenue Per Mille).
  const [rpm, setRpm] = useState(0.2);

  // Estado para almacenar el beneficio total calculado.
  const [totalProfit, setTotalProfit] = useState(null);

  // Función para calcular el beneficio total y actualizar el estado.
  const calculateProfit = () => {
    const profit = (visits / 1000) * rpm;  // Fórmula para calcular el beneficio.
    setTotalProfit(profit.toFixed(2));  // Actualiza el estado del beneficio total con el resultado redondeado a 2 decimales.
  };

  // Renderización del componente.
  return (
    <div className="container mt-5">
      <div className='header'>
      <img className='logo' src={myLogo} alt="Descripción de la imagen" />
      <h1 className="titulo">Calcular ganancias de Shorts</h1>
      </div>
      {/* Input para ingresar el número de visitas */}
      <div className="mb-3">
        <label htmlFor="visits" className="form-label">
          Number of Visits:
        </label>
        <input
          type="number"
          className="form-control"
          id="visits"
          value={visits}
          onChange={(e) => setVisits(e.target.value)}
        />
      </div>
      {/* Selección del tipo de RPM (Revenue Per Mille) */}
      <div className="mb-3">
        <label htmlFor="rpm" className="form-label">
          RPM Type:
        </label>
        <select
          className="form-select"
          id="rpm"
          value={rpm}
          onChange={(e) => setRpm(parseFloat(e.target.value))}
        >
          <option value={0.2}>RPM 0.2</option>
          <option value={0.3}>RPM 0.3</option>
        </select>
      </div>
      {/* Botón para calcular el beneficio total */}
      <button className="btn btn-primary" onClick={calculateProfit}>
        Calculate
      </button>
      {/* Muestra el beneficio total si está calculado */}
      {totalProfit !== null && (
        <div className="mt-3">
          <h4>Total Profit: ${totalProfit}</h4>
        </div>
      )}
    </div>
  );
}

export default App;  // Exporta el componente App para su uso en otros archivos. 
