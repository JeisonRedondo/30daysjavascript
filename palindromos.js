/**En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

Recibirás un único parámetro: un array de palabras.Si no hay ningún palíndromo en la lista, la función debe devolver null.Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.*/

/*Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.*/

// Ejemplo 1:

// Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

// Output: "racecar"

// Ejemplo 2:

// Input: findLargestPalindrome(["Platzi", "javascript", "html", "css","aibofibia"])

// Output: null

const wordsTest1 = ["level", "racecar", "world", "hello", "ana", "apocopa", "aibofobia"];
const wordsTest = ["leveel", "racecarr", "worldrt", "hello", "anta", "apocopera", "aiboftobia"];

function findLargestPalindrome(words) {
    // Tu código aquí 👈

    function reverseString(string) {
        return string.split("").reverse().join("");
    };

    function palindromoExist(word) {
        return word === reverseString(word);
    }

    const palindrome =words.reduce((acumulator, char) => {


        if (palindromoExist(char)) {
            if (char.length > acumulator.length) {
                acumulator = char;
            }
        }
        return acumulator;

    },"")

    return (palindrome == "" ? null : palindrome);

}

findLargestPalindrome(wordsTest);