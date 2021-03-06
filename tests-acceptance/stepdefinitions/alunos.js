"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var sleep = (function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); });
var sameCPF = (function (elem, cpf) { return elem.element(protractor_1.by.name('cpflist')).getText().then(function (text) { return text === cpf; }); });
var sameName = (function (elem, name) { return elem.element(protractor_1.by.name('nomelist')).getText().then(function (text) { return text === name; }); });
var pAND = (function (p, q) { return p.then(function (a) { return q.then(function (b) { return a && b; }); }); });
cucumber_1.defineSupportCode(function (_a) {
    var _this = this;
    var Given = _a.Given, When = _a.When, Then = _a.Then;
    Given(/^I am at the students page$/, function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get("http://localhost:4200/")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, expect(protractor_1.browser.getTitle()).to.eventually.equal('TaGuo')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.$("a[name='alunos']").click()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    Given(/^I cannot see a student with CPF "(\d*)" in the students list$/, function (cpf) { return __awaiter(_this, void 0, void 0, function () {
        var allcpfs, samecpfs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allcpfs = protractor_1.element.all(protractor_1.by.name('cpflist'));
                    return [4 /*yield*/, allcpfs];
                case 1:
                    _a.sent();
                    samecpfs = allcpfs.filter(function (elem) {
                        return elem.getText().then(function (text) { return text === cpf; });
                    });
                    return [4 /*yield*/, samecpfs];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, samecpfs.then(function (elems) { return expect(Promise.resolve(elems.length)).to.eventually.equal(0); })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    When(/^I try to register the student "([^\"]*)" with CPF "(\d*)"$/, function (name, cpf) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.$("input[name='namebox']").sendKeys(name)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.$("input[name='cpfbox']").sendKeys(cpf)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.buttonText('Adicionar')).click()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    Then(/^I can see "([^\"]*)" with CPF "(\d*)" in the students list$/, function (name, cpf) { return __awaiter(_this, void 0, void 0, function () {
        var allalunos;
        return __generator(this, function (_a) {
            allalunos = protractor_1.element.all(protractor_1.by.name('alunolist'));
            allalunos.filter(function (elem) { return pAND(sameCPF(elem, cpf), sameName(elem, name)); }).then(function (elems) { return expect(Promise.resolve(elems.length)).to.eventually.equal(1); });
            return [2 /*return*/];
        });
    }); });
});
