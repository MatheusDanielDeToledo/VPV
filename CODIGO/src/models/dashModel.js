var database = require("../database/config");

function listarMissoes(id) {

    var instrucaoSql = `
            select *,
            CONCAT( year(data_missao),'/', MONTH(data_missao),'/', DAY(data_missao)) as data 
            from missao where fk_ONG = ${id};

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDados(id, missao) {

    var instrucaoSql = `
        select itens.nome, quantidade_itens, expectativa_itens from itens_missao
            join itens 
                on fk_itens = itens.id
            join missao
                on fk_missao = missao.id
            where missao.fk_ONG = ${id}
            and
            missao.nome = '${missao}' 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarVoluntarios(id, missao) {

    var instrucaoSql = `
        select count(p.id) as totalVoluntarios from presenca p
            join itens_missao im
                on p.fk_missao = im.fk_missao
            join missao m
                on im.fk_missao = m.id
            where p.fk_ong = ${id}
            and
            m.nome = '${missao}' 
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarMissoes,
    buscarDados,
    listarVoluntarios
}
