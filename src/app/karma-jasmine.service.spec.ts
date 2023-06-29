import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  //Sumar
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });

  //Restar
  it('debería restar dos números correctamente', () => {
    const resultado = service.restar(3, 2);
    expect(resultado).toBe(1);
  });

  it('debería restar números negativos correctamente', () => {
    const resultado = service.restar(-5, -3);
    expect(resultado).toBe(-2);
  });

  it('debería restar un número positivo y un número negativo correctamente', () => {
    const resultado = service.restar(10, -5);
    expect(resultado).toBe(15);
  });

  //Multiplicar
  it('debería multiplicar dos números correctamente', () => {
    const resultado = service.multiplicar(3, 2);
    expect(resultado).toBe(6);
  });

  it('debería multiplicar números negativos correctamente', () => {
    const resultado = service.multiplicar(-5, -3);
    expect(resultado).toBe(15);
  });

  it('debería multiplicar un número positivo y un número negativo correctamente', () => {
    const resultado = service.multiplicar(10, -5);
    expect(resultado).toBe(-50);
  });

  //Dividir
  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividir(6, 2);
    expect(resultado).toBe(3);
  });

  it('debería dividir números negativos correctamente', () => {
    const resultado = service.dividir(-9, -3);
    expect(resultado).toBe(3);
  });

  it('debería dividir un número positivo y un número negativo correctamente', () => {
    const resultado = service.dividir(10, -5);
    expect(resultado).toBe(-2);  
  });

  //Numero par
  it('debería reconocer un número par', () => {
    const resultado = service.numeroPar(8);
    expect(resultado).toBe("Es par");
  });

  //Palíndromo
  it('debería ser palíndromo', () => {
    const resultado = service.palindromo("ojo");
    expect(resultado).toBe("Es palíndromo");
  });
  //Factorial
  it('debería dar el factorial de un número', () => {
    const resultado = service.factorial(5);
    expect(resultado).toBe(120);
  });
  //Maximo numero
  it('el primer número debería ser mayor', () => {
    const resultado = service.maximoNumero(12, 3);
    expect(resultado).toBe("El número mayor es 12");
  });
  it('el segundo número debería ser mayor', () => {
    const resultado = service.maximoNumero(3, 7);
    expect(resultado).toBe("El número mayor es 7");
  });
  it('los dos números deberían ser iguales', () => {
    const resultado = service.maximoNumero(3, 3);
    expect(resultado).toBe("Los números son iguales");
  });
  //Cadena a mayúscula
  it('debería estar en mayúsculas', () => {
    const resultado = service.convertirAMayuscula("Hola caracola");
    expect(resultado).toBe("HOLA CARACOLA");
  });
  it('debería estar en mayúscula y aceptar puntos y comas' , () => {
    const resultado = service.convertirAMayuscula("Hola, caracola!");
    expect(resultado).toBe("HOLA, CARACOLA!");
  });
  it('debería mantenerse igual si la cadena ya está en mayúscula', () => {
    const resultado = service.convertirAMayuscula("HOLA CARACOLA");
    expect(resultado).toBe("HOLA CARACOLA");
  })
  //Número primo
  it('debería detectar que el número es primo', () => {
    const resultado = service.numeroPrimo(5);
    expect(resultado).toBe("Es primo");
  });
  it('debería detectar que el número no es primo', () => {
    const resultado = service.numeroPrimo(6);
    expect(resultado).toBe("No es primo");
  });
  //Número positivo
  it('debería detectar que es un número positivo', () => {
    const resultado = service.numeroPositivo(2);
    expect(resultado).toBe(true);
  });
  it('debería detectar que no es un número positivo', () => {
    const resultado = service.numeroPositivo(-2);
    expect(resultado).toBe(false);
  });
  it('debería detectar que 0 es positivo', () => {
    const resultado = service.numeroPositivo(0);
    expect(resultado).toBe(true);
  });
  //Cantidad array
  it('debería dar la cantidad de elementos de un array', () => {
    const resultado = service.listaArray([1,2,3,4,5]);
    expect(resultado).toBe(5);
  });
  it('debería dar 0 de cantidad en el array', () => {
    const resultado = service.listaArray([]);
    expect(resultado).toBe(0);
  });
  //Comprobar substring
  it('debería detectar que contiene un substring', () => {
    const resultado = service.comprobarSubstring("Hola");
    expect(resultado).toBe(true);
  });
  it('debería detectar que contiene más de un substring', () => {
    const resultado = service.comprobarSubstring("Hola caracola");
    expect(resultado).toBe(false);
  });
  //Promedio array de números
  it('debería dar el promedio de números positivos', () => {
    const resultado = service.promedioNumeros([5,6,7,4,3,2]);
    expect(resultado).toBe(4.5);
  });
  it('debería dar el promedio de números negativos', () => {
    const resultado = service.promedioNumeros([-2,-3,-4]);
    expect(resultado).toBe(-3);
  });
  it('debería dar el promedio de números positivos y uno negativo', () => {
    const resultado = service.promedioNumeros([1,2,3,4,5,6,7,-8]);
    expect(resultado).toBe(2.5);
  });
  //Array caracteres
  it('debería dar un array de caracteres', () => {
    const resultado = service.arrayCaracteres("hola");
    expect(resultado).toBe(["h", "o", "l", "a"]);
  });
  it('debería dar un array con caracteres sin mayúsculas', () => {
    const resultado = service.arrayCaracteres("Hola Caracola");
    expect(resultado).toBe(["h", "o", "l", "a", "c", "a", "r", "a", "c", "o", "l", "a"]);
  });
  it('debería dar un array con caracteres sin comas', () => {
    const resultado = service.arrayCaracteres("Hola, caracola");
    expect(resultado).toBe(["h", "o", "l", "a", "c", "a", "r", "a", "c", "o", "l", "a"]);
  });
  //Suma digitos
  it('debería dar como resultado la suma de los dígitos', () => {
    const resultado = service.sumaDigitos(25);
    expect(resultado).toBe(7);
  });
  //Anagrama
  it('debería detectar que es un anagrama', () => {
    const resultado = service.anagrama("casa", "saca");
    expect(resultado).toBe(true);
  });
  it('debería detectar que uno es más largo que otro', () => {
    const resultado = service.anagrama("casa", "sacas");
    expect(resultado).toBe(false);
  });
  it('debería detectar que no es un anagrama', () => {
    const resultado = service.anagrama("hola", "jeje");
    expect(resultado).toBe(false);
  });
  //calcular area
  it('debería calcular un polígono de cinco lados', () => {
    const resultado = service.calcularArea(3,3,5);
    expect(resultado).toBe(22.5);
  });
  it('debería calcular un polígono de seis lados', () => {
    const resultado = service.calcularArea(4,3,6);
    expect(resultado).toBe(36);
  })
  //moda array
  it('debería detectar que hay un número repetido', () => {
  const resultado = service.modaArray([1,2,3,4,4,5,6]);
  expect(resultado).toBe(4);
  });
  it('debería detectar que hay un único número', () => {
    const resultado = service.modaArray([3]);
    expect(resultado).toBe(3);
  })
  it('debería detectar que hay un número repetido más que otro', () => {
    const resultado = service.modaArray([2,2,2,3,3,3,4,4,4,4]);
    expect(resultado).toBe(4);
  })
});
