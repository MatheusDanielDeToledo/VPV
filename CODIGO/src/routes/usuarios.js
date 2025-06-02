var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/listarOngs", function (req, res) {
    usuarioController.listarOngs(req, res);
});

router.get("/listarOngsIndex", function (req, res) {
    usuarioController.listarOngsIndex(req, res);
});

router.post("/enviarFiltroOng", function (req, res) {
    usuarioController.receberFiltro(req, res);
});

router.post("/adicionarONG", function(req, res) {
    usuarioController.adicionarONG(req, res);
})

module.exports = router;