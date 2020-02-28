//módulo
let listaDePets = [];

function adicionaPet (nome){
    listaDePets.push(nome);

    console.log(listaDePets);

    return true;
}
//retorna true/false

module.exports = {adicionaPet, listaDePets};
//por padrao sempre é exportado como objeto, nesse objeto especifico as coisas que podem ser vistas/usadas por quem importa-la

//FAZER FUNÇÃO LISTAR PETS CADASTRADOS NO SISTEMA em uma nova rota
//FUNÇÃO BUSCA PET PELO NOME