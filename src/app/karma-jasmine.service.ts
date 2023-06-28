import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }

  restar(a: number, b:number): number {
    return a-b;
  }

  multiplicar(a:number, b:number): number{
    return a*b;
  }
  dividir(a:number, b:number): number {
    return a/b;
  }
  //Función para verificar si un número es par
  numeroPar(a:number): string{
    if(a % 2 == 0){
      return "Es par"
    }
  }
  //Función para verificar si una cadena es un palíndromo
  palindromo(a:string): string{
    var palabra:string = a.toLowerCase();
    var palabraRev = palabra.split('').reverse().join('');
    if(palabra == palabraRev){ 
      return "Es palíndromo"
    }
  }
  //Función para calcular el factorial de un número
  factorial(a:number):number{
    var resultado = 1;
    var i;
    for(i = 1; i <= a; i++){
      resultado = resultado *1;
    }
    return resultado;
  }
}
