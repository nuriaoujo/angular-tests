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
  //Función para verificar si un número es positivo
  numeroPositivo(a:number): boolean {
    return a<=0;
  }
  //Función para obtener el número de elementos en un array
  listaArray(a: any[]): number {
    return a.length;
  }

  //Función para verificar si una cadena contiene un substring
  comprobarSubstring(a: string): boolean {
    var substring = a.split(' ');
    if(substring.length == 1){
      return true;
    } else {
      return false;
    }
  }
  //Función para obtener el promedio de un array de números
  promedioNumeros(a: any[number]): number {
    var cantidadNumeros = a.length;
    var numeros = a.map(Number);
    var suma = numeros.reduce(function (a:number, b:number) {
        return a + b;
    }, 0);
    return suma / cantidadNumeros;
  }

  //Función para convertir una cadena en un array de caracteres
  arrayCaracteres(a:string): any[string]{
    let palabra = a.toLowerCase();
    let caracteres = palabra.split('').filter(function (caracter) {
      return caracter.trim() !== '';
    });
    return caracteres;
  }
  //Función para calcular la suma de los dígitos de un número
  sumaDigitos(a:number): number {
    let digitos = a.toString().split(''); //separamos los digitos
    var numeros = digitos.map(Number);
    var suma = numeros.reduce(function (a:number, b:number) {
        return a + b;
    }, 0);
    return suma;
  }

  //Función para verificar si una cadena es un anagrama de otra(mismas letras pero distintas posiciones)
  anagrama(a:string, b:string): boolean {
    let palabraA = a.split('');
    let palabraB = b.split('');
    if(palabraA.length == palabraB.length){
      palabraA.sort();
      palabraB.sort();
      let nuevaPalabraA = palabraA.join('');
      let nuevaPalabraB = palabraB.join('');
      if(nuevaPalabraA == nuevaPalabraB){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  //Función para calcular el área de un polígono regular(apotema, longitud_lado, numero_lados)
  calcularArea(apotema:number, longitud_lado:number, numero_lados:number): number {
    let perimetro = longitud_lado * numero_lados;
    return (perimetro * apotema)/2;
  }
  //Función para encontrar la moda (valor más frecuente) en un array de números
  modaArray(a: any[number]): number | undefined {
    let frecuencia: number = 0;
    let moda: number | undefined;
    let frecuencias: { [key: number]: number } = {};
  
    for (let i = 0; i < a.length; i++) {
      let num = a[i];
      frecuencias[num] = (frecuencias[num] || 0) + 1;
      if (frecuencias[num] > frecuencia) {
        frecuencia = frecuencias[num];
        moda = num;
      }
    }
  
    return moda;
  }
  //Función para calcular el número de días entre dos fechas
  calcularFecha(fecha1: Date, fecha2: Date): number {
    let fechaTotal = fecha1.getTime() - fecha2.getTime()
    return Math.abs(Math.floor(fechaTotal / (1000 * 60 * 60 * 24)));
  }
}
