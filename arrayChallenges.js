/*1- AlwaysHungry..
Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"
en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez. */

function alwaysHungry(arr) {
    let count = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] === keyWord){
            console.log("Yummy");
            count = count +1;
        }
    }
    if (count === 0){
        console.log("I'm hungry");
    }
}

let count = 0;
let keyWord = "food";

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"




/*2- HighPass..
Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.*/

function highPass(arr, cutoff) {
var filteredArr = [];
for(i=0;i<arr.length; i++){
    if(arr[i]>cutoff){
        filteredArr.push(arr[i]);
    }
}
return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]




/*3- Better than Average...
Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio. */

function betterThanAverage(arr) {
// calculate the average
var sum = 0;
for(i=0; i<arr.length;i++){
    sum += arr[i];
}
let average = sum / arr.length;
console.log(sum);
console.log(average);

// count how many values are greated than the average
var count = 0
for(i=0;i<arr.length; i++){
    if(arr[i]>average){
        count++;
    }
}
return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4 




/*4- Reverse..
Escribe una función que invierta los valores de un arreglo y los devuelva. */

function reverse(arr) {
// your code here
let newArr = [];
for(let i=arr.length-1; i>=0; i--){
    newArr.push(arr[i]);
}
arr=newArr;
return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]




/*5- Arreglo de Fibonacci
Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. Escribe una función que 
devuelva un arreglo de números de Fibonacci hasta una longitud dada n. Los números de Fibonacci se calculan sumando 
los dos últimos valores de la secuencia. Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente 
valor en la secuencia es.*/

function fibonacciArray(n) {
// the [0, 1] are the starting values of the array to calculate the rest from
var fibArr = [0, 1];
for(i=0; i<n-2; i++){
    let sum = fibArr[i] + fibArr[i+1]
    fibArr.push(sum);
}
// your code here
return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]