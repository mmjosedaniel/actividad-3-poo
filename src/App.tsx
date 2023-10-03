import { useState } from 'react';
import Sumador from './components/Ejercico2'

function App() {
	const [ primerNumero, setPrimerNumero ] = useState<number>();
	const [ segundoNumero, setSegundoNumero ] = useState<number>();
	const [ resultado, setResultado ] = useState<number>();
	
	function handleSumar() {
		const sumador = new Sumador(primerNumero, segundoNumero);
		setResultado(sumador.obtenerSuma());
		console.log(sumador.obtenerSuma())
	}

  return (
    <div >
			<div>
				<label htmlFor="primer-numero">Primer número</label>
				<input 
					type="number"
					id="primer-numero"
					placeholder="escriba el primer número"
					onChange={ (e) =>  setPrimerNumero(+e.target.value)}
					value={primerNumero}
				/>
			</div>

			<div>
				<label htmlFor="segundo-numero">Segundo número</label>
				<input
					type="number"
					id="segundo-numero"
					placeholder="escriba el segundo número"
					onChange={ (e) =>  setSegundoNumero(+e.target.value)}
					value={segundoNumero}
				/>
			</div>

			<div>
				<button onClick={() => handleSumar()}>Sumar</button>
			</div>
			<div>
				<h2>{resultado}</h2>
			</div>
    </div>
  );
}

export default App;
