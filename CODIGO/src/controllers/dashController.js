var dashModel = require("../models/dashModel");

var filtro = null;
var segundoFiltro = null;

function filtroMissao(req, res) {
  var id = req.body.ong;

  filtro = id;
  res.json({ mensagem: `Filtro de id, recebido` });
}

function listarMissoes(req, res) {
  dashModel
    .listarMissoes(filtro)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function listarMissoes(req, res) {
  dashModel
    .listarMissoes(filtro)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function filtroDados(req, res) {
  var missao = req.body.missao;

  segundoFiltro = missao;
  res.json({ mensagem: `Filtro de id, recebido` });
}

function buscarDados(req, res) {
  dashModel
    .buscarDados(filtro, segundoFiltro)
    .then(function (resultado) {
      // precisamos informar que o resultado voltará para o front-end como uma resposta em json
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function listarVoluntarios(req, res) {
  dashModel
    .listarVoluntarios(filtro, segundoFiltro)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function atualizar_itens(req, res) {
  var itens_nome = req.body.itens_nome;
  var itens_atualizar = req.body.itens_atualizar;

  console.log(itens_nome);
  console.log(itens_atualizar);
  console.log(segundoFiltro);

  dashModel
    .atualizar_itens(itens_nome, itens_atualizar, segundoFiltro, filtro)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function criar_missao(req, res) {
  var nome = req.body.nome;
  var tipo = req.body.tipo;
  var data_antes = req.body.data;

  var data_final = `${data_antes[0][2]}-${data_antes[0][1]}-${data_antes[0][0]}`;

  console.log(nome);
  console.log(tipo);
  console.log(data_antes);
  console.log(data_final);

  dashModel
    .criar_missao(nome, tipo, data_final, filtro)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function adicionar_iten(req, res) {
  var nome = req.body.nome;
  var quantidade = 0

  console.log(nome);

  dashModel
    .adicionar_iten(nome,quantidade, quantidade, filtro, segundoFiltro)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function add_iten(req, res) {
  var nome = req.body.nome;

  console.log(nome);

  dashModel
    .add_iten(nome)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function listar_itens(req, res) {
  dashModel
    .listarItens()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  listarMissoes,
  filtroMissao,
  buscarDados,
  filtroDados,
  listarVoluntarios,
  atualizar_itens,
  criar_missao,
  adicionar_iten,
  listar_itens,
  add_iten
};
