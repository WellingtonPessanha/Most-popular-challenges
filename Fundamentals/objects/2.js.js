/*
Retornar a propriedade do objeto 

function myFunction(a, b) {

    return 
}

function myFunction(a, b) {
   const x = {
     b: 'Cadeira'
   }
   
   return a.hasOwnProperty(b)
}

*/

function myFunction(a, b) {

    return b in a 
}

console.log(myFunction({x: 'a', y: 'b', z: undefined}, 'z'))