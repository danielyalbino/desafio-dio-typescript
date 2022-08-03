// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
// Solução abaixo.

interface pessoas {
    idade: number;
    nome: string;
    profissao: string;
}

let pessoa1 = {} as pessoas;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz";

let pessoa2 = {} as pessoas;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {} as pessoas;
pessoa3.nome = "laura";
pessoa3.idade = 32;
pessoa3.profissao = "Atriz";

let pessoa4 = {} as pessoas;
pessoa4.nome = "carlos";
pessoa4.idade = 19;
pessoa4.profissao = "padeiro";

//console.log(pessoa1, pessoa2, pessoa3, pessoa4)
