// Como podemos melhorar o esse código usando TS? 
//resposta:

/*observação: deixei o campo enum profissao vazio após perceber que ele esta ligado ao codigo do
"objetos-listas" na pasta de exemplos e foi lá que eu coloquei o "Padeiro"*/

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

enum Profissao {
    
}



let pessoa1: Pessoa = {
    nome: "Maria",
    idade:  29,
    profissao: Profissao.Atriz
};

let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}


let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}