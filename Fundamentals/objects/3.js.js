
/*
Retornar o valor da propriedade com chave igual ao valor da string

function myFunction(obj, key) {

    return 
}

*/

function myFunction(obj, key) {
 
    return obj[key]
}
console.log(myFunction({ country: "Sweden", continent: "Europe" }, "country"))