/*
	ENCAPSULAMIENTO: El encapsulamiento se trata de la protección de los datos,
	se trata de que una clase mantenga su estado oculto y de que este sólo pueda
	ser accedido o alterado por medio de métodos públicos.
*/

/**
 * En este ejemplo se maneja el encapsulamiendo al hacer privado el
 * atributo nombre.
 */
export class Pato {
  // Atributo privado
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  // Método público para obtener el nombre del pato
  public getNombre(): string {
    return this.nombre;
  }

  // Método público para establecer el nombre del pato
  public setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

	// Método común para hacer un sonido de pato
	public saludar(): void {
		console.log("¡Cuac cuac!");
	}
}

/**
 * ABSTRACCIÓN: La abstracción se trata de la simplificación de los objetos,
 * así para la creasíon de de un objeto sólo tomamos las caracteristicas que
 * nos son necesarioas y obviamos las que no los són.
 * 
 * El ejemplo anterior es la abstracción de una clase con la cual podemos crear
 * un pato con determinado nombre
 */

/**
 * HERENCIA: La erencia se trata de la creación de nuevas clases aprovechando las clases
 * existentes. A estas nuevas clases se les llama subclases
 * 
 * En el siguiente ejemplo se crea una subclase PatoMigratorio el cual grega el atributo
 * destino y el getter para obtener este destino.
 */

// Subclase PatoMigratorio que hereda de la clase Pato
export class PatoMigratorio extends Pato {
  private destino: string;

  constructor(nombre: string, destino: string) {
    super(nombre);
    this.destino = destino;
  }

  // Método adicional para obtener el destino del pato migratorio
  public getDestino(): string {
    return this.destino;
  }

	// Sobrescribe el método saludar de la clase base
	public hacerSonido(): void {
		console.log("¡Cuacker cuacker!");
	}
}

/**
 * POLIMORFISMO: El polimorfismo el el principio que permite a los objetos responder de diferentes
 * maneras a un mismo mensaje o método, en otras palabras comportarse de manera diferente de acuerdo
 * a la circunstancia.
 * 
 * En los dos jemplos anteriores de Pato y PatoMigratorio se puede oservarel polimorfismo la 
 * sobreescribir el metodo saludar en la subclase PatoMigratorio; un pato saluda diciendo
 * Cuac Cuac y el otro lo hace diciendo Cuacker cuacker.
 */

/**
 * MODULARIDAD: La modularidad se trata de la capacidad de dividir un programa en componenetes
 * pequeños que se encarguen de funciones particulares.
 * 
 * PRINCIPIO DE OCULTACIÓN: Esto hace referencia al mismo encapsulamiento y se trata de la 
 * capacidad de occultar el estado dentro de una clase.
 * 
 * CLASE: Una clase es una plantilla que puede ser usada para crear objetos.
 * 
 * ATRIBUTO: un atributo es una caracteristica que se le da a un objeto. ejemplo: en una clase
 * Carro la cantidad de llantas que este tiene.
 * 
 * EVENTO: Creo que en este caso se desea saber qué es un método; un método se refiere a una función
 * que abita dentro de una clase, se trata de una acción que pued ser tomada por el objeto que se 
 * crea a partir de la clase.
 */

/**
 * BIBLIOGRAFÍA:
 * Los 4 principios fundamentales de la programación orientada a Objetos POO. (2022, octubre 29).
 * Diseño de Paginas Web Cusco. }
 * https://webdesigncusco.com/los-4-principios-fundamentales-de-la-programacion-orientada-a-objetos-poo/
 */