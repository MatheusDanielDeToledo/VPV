var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/filtroMissao", function (req, res) {
    dashController.filtroMissao(req, res);
});

router.post("/filtroDados", function (req, res) {
    dashController.filtroDados(req, res);
});

router.post("/atualizar_itens", function (req, res) {
    dashController.atualizar_itens(req, res);
});

router.get("/buscarDados", function (req, res) {
    dashController.buscarDados(req, res);
});

router.get("/listarMissoes", function (req, res) {
    dashController.listarMissoes(req, res);
})

router.get("/listarVoluntarios", function (req, res) {
    dashController.listarVoluntarios(req, res);
})

module.exports = router;