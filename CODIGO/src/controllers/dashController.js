var dashModel = require("../models/dashModel");

var filtro = null
var segundoFiltro = null

function filtroMissao(req, res) {
    var id = req.body.ong

    filtro = id
    res.json({mensagem: `Filtro de id, recebido`})
}

function listarMissoes(req, res) {

    dashModel.listarMissoes(filtro).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarMissoes(req, res) {

    dashModel.listarMissoes(filtro).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function filtroDados(req, res) {
    var missao = req.body.missao

    segundoFiltro = missao
    res.json({mensagem: `Filtro de id, recebido`})
}


function buscarDados(req, res) {

    dashModel.buscarDados(filtro, segundoFiltro)
        .then(function (resultado) {

            // precisamos informar que o resultado voltará para o front-end como uma resposta em json
            res.json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            })
}

function listarVoluntarios(req, res) {

    dashModel.listarVoluntarios(filtro, segundoFiltro).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    listarMissoes,
    filtroMissao,
    buscarDados,
    filtroDados,
    listarVoluntarios

}