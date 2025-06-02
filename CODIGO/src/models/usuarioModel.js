var database = require("../database/config")

function autenticar(email) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email)
    var instrucaoSql = `
        SELECT usuario.id, fk_ONG, fk_USUARIO, email, senha FROM vinculo
            join usuario
                on fk_USUARIO = usuario.id
            where email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, codigo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, codigo);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into USUARIO (nome, email, senha) values
            ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarVinculo(codigo, email) {
    instrucaoSql = `
        insert into VINCULO (fk_ONG, fk_USUARIO) values
            ('${codigo}', (select id from usuario where email = '${email}'))
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarOngs(id) {
    instrucaoSql = `
        select o.nome, od.foto_url, o.fk_dono from vinculo
            join ong o
                on vinculo.fk_ONG = o.id
            join usuario u    
                on vinculo.fk_USUARIO = u.id
            join ong od
                on o.fk_dono = od.id
            where fk_USUARIO = ${id}
            ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarOngsIndex() {
    instrucaoSql = `
        select o.nome, od.foto_url from ong o
            join ong od
                on o.fk_dono = od.id;
            
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarMissoes() {

}

module.exports = {
    autenticar,
    cadastrar,
    cadastrarVinculo,
    listarOngs,
    listarOngsIndex,
    listarMissoes
};