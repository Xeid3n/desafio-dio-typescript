const pessoa = {
    nome: 'Abel',
    idade: 31,
    profissao: 'cantor'
}

pessoa.idade = 25;

const lamar: {nome: string, idade: number, profissao: string} = {
    nome: 'Lamar',
    idade: 25,
    profissao: 'produtor'
}

const aaryan: {nome: string, idade: number, profissao: string} = {
    nome: 'Aaryan',
    idade: 25,
    profissao: 'Cantor'
}

enum Profissao {
    Professora, 
    Atriz, 
    Cantor,
    Produtor,
    Desenvolvedora,
    Padeiro
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Atriz
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 24,
    profissao: Profissao.Professora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 26,
    profissao: Profissao.Desenvolvedora,
    materias:['Matemática discreta', 'Programação']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 27,
    materias:['Matemática discreta', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);