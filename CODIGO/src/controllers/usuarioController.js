var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {

    var email = req.body.email;

    usuarioModel.autenticar(email)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                res.json({
                    id: resultado[0].id,
                    email: resultado[0].email,
                    fk_ONG: resultado[0].fk_ONG
                })
            }

        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

let filtroAtual = null; // variavel temporária (você pode usar sessões ou banco depois)
let SegundoFiltro = null;

function receberFiltro(req, res) {
    var filtro = req.body.id;

    filtroAtual = filtro;
    res.json({ mensagem: 'Filtro recebido com sucesso' });
};

function listarOngs(req, res) {

    usuarioModel.listarOngs(filtroAtual)
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

function listarOngsIndex(req, res) {

    usuarioModel.listarOngsIndex()
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

function listarMissoes(req, res) {

    usuarioModel.listarMissoes(filtroAtual)
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

function adicionarONG(req, res) {
    var codigo = req.body.codigo;
    var email = req.body.email

    usuarioModel.cadastrarVinculo(codigo, email)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}




function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nome;
    var codigo = req.body.codigo
    var senha = req.body.senha;
    var email = req.body.email;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(nome, email, senha, codigo)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

    usuarioModel.cadastrarVinculo(codigo, email)
        .then(
            function (resultado) {

            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    autenticar,
    cadastrar,
    listarOngs,
    listarOngsIndex,
    listarMissoes,
    receberFiltro,
    adicionarONG,

}