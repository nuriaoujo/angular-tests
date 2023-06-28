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
  //Función para obtener el máximo de dos números
  maximoNumero(a:number, b:number): string | undefined{
    if(a>b){
      return "El número mayor es " + a;
    } else if(a==b){
      return "Los números son iguales";
    } else if(a<b){
      return "El número mayor es " + b;
    }
  }
  //Función para convertir una cadena a mayúsculas
  convertirAMayuscula(a:string): string {
    if(a == a.toUpperCase()){
      return a;
    } else {
      return a.toUpperCase();
    }
  }
  //Función para verificar si un número es primo
  numeroPrimo(a: number): string {
    if (a <= 1) {
      return "No es primo";
    }
    for (let i = 2; i <= Math.sqrt(a) + 1; i++) {
      if (a % i === 0) {
        return "No es primo";
      }
    }
    return "Es primo";
  }
  
}
