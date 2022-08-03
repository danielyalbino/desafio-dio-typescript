// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
employee.code = 10;
employee.name = "John"; */

// Solução abaixo.

interface Employee {
    code: number,
    name: string
}

let empObj = {} as Employee;
empObj.code = 10;
empObj.name = "John";

// console.log(empObj.code, empObj.name)
