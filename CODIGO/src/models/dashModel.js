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
            where fk_missao = (select id from missao where nome = '${missao}' and fk_ong = ${id}) 
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function criar_missao(nome, tipo, data, id) {
  var instrucaoSql = `
        insert into missao (nome, tipo, data_missao, fk_ong) values
            ('${nome}', '${tipo}', '${data}', '${id}')
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function listarItens() {
  var instrucaoSql = `
        select nome from itens      
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function add_iten(nome) {
  var instrucaoSql = `
        insert into itens (nome) values 
            ('${nome}')      
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function adicionar_iten(nome, qtd_real, qtd_esperada, id, missao) {
  var instrucaoSql = `
          insert into itens_missao (fk_missao, fk_itens, quantidade_itens,  expectativa_itens) values
            ((select id from missao where nome = '${missao}' and fk_ong = '${id}'), (select id from itens where nome = '${nome}'), ${qtd_real}, ${qtd_esperada})
      `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizar_itens(iten, quantidade, missao, id) {
  var mensagem = "";

  for (let i = 0; i < iten.length; i++) {
    mensagem += `update itens_missao set quantidade_itens = ${quantidade[i].nova_quantidade} where fk_missao = (select id from missao where nome = '${missao}' and fk_ong = ${id}) and fk_itens = (select id from itens where nome = '${iten}');`;
  }

  var instrucaoSql = mensagem;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  listarMissoes,
  buscarDados,
  listarVoluntarios,
  atualizar_itens,
  criar_missao,
  adicionar_iten,
  listarItens,
  add_iten
};
