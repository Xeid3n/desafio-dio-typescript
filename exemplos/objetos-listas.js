"use strict";
const pessoa = {
    nome: 'Abel',
    idade: 31,
    profissao: 'cantor'
};
pessoa.idade = 25;
const lamar = {
    nome: 'Lamar',
    idade: 25,
    profissao: 'produtor'
};
const aaryan = {
    nome: 'Aaryan',
    idade: 25,
    profissao: 'Cantor'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Cantor"] = 2] = "Cantor";
    Profissao[Profissao["Produtor"] = 3] = "Produtor";
    Profissao[Profissao["Desenvolvedora"] = 4] = "Desenvolvedora";
    Profissao[Profissao["Padeiro"] = 5] = "Padeiro";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Atriz
};
const maria = {
    nome: 'Maria',
    idade: 24,
    profissao: Profissao.Professora
};
const jessica = {
    nome: 'Jessica',
    idade: 26,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
};
const monica = {
    nome: 'Monica',
    idade: 27,
    materias: ['Matemática discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
