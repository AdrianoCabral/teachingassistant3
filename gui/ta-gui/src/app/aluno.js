"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno() {
        this.clean();
    }
    Aluno.prototype.clean = function () {
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.metas = new Map();
    };
    Aluno.prototype.clone = function () {
        var aluno = new Aluno();
        aluno.metas = new Map();
        aluno.copyFrom(this);
        return aluno;
    };
    Aluno.prototype.copyFrom = function (from) {
        this.nome = from.nome;
        this.cpf = from.cpf;
        this.email = from.email;
        this.copyMetasFrom(from.metas);
    };
    Aluno.prototype.copyMetasFrom = function (from) {
        this.metas = new Map();
        for (var key in from) {
            this.metas[key] = from[key];
        }
    };
    return Aluno;
}());
exports.Aluno = Aluno;
