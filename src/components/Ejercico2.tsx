export default class Sumador {
  // Atributos privados
  private numero1: number;
  private numero2: number;

  constructor(num1: number | undefined, num2: number | undefined) {
		if (num1 === undefined) {
			this.numero1 = 0
		} else {
			this.numero1 = num1;
		}

		if (num2 === undefined) {
			this.numero2 = 0;
		} else {
			this.numero2 = num2;;
		}
    
  }

  // Método privado para realizar la suma
  private _sumar(): number {
    return this.numero1 + this.numero2;
  }

  // Método público para obtener el resultado de la suma
  public obtenerSuma(): number {
    return this._sumar();
  }
}