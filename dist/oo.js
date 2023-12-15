"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// function Pokemon(nomePokemon, tipoPokemon)
// {
//     this.nome = nomePokemon;
//     this.tipo = tipoPokemon;
// }
// const pikachu = new Pokemon("Pikachu", "elétrico")
var Pokemon = /*#__PURE__*/function () {
  function Pokemon(nomePokemon, tipoPokemon) {
    _classCallCheck(this, Pokemon);
    _defineProperty(this, "nome", '');
    _defineProperty(this, "tipo", '');
    _defineProperty(this, "hp", 100);
    this.nome = nomePokemon;
    this.tipo = tipoPokemon;
  }
  _createClass(Pokemon, [{
    key: "atacar",
    value: function atacar(nomeAtaque) {
      console.log("".concat(this.nome, " atacou com ").concat(nomeAtaque));
    }
  }, {
    key: "foiAtacado",
    value: function foiAtacado() {
      this.hp -= 10;
    }
  }, {
    key: "exibeHp",
    value: function exibeHp() {
      console.log(this.hp);
    }
  }]);
  return Pokemon;
}();
var Pikachu = /*#__PURE__*/function (_Pokemon) {
  _inherits(Pikachu, _Pokemon);
  var _super = _createSuper(Pikachu);
  function Pikachu() {
    _classCallCheck(this, Pikachu);
    return _super.call(this, 'Pikachu', 'elétrico');
  }
  _createClass(Pikachu, [{
    key: "atacar",
    value: function atacar() {
      console.log("".concat(this.nome, " atacou com choque do trov\xE3o"));
    }
  }]);
  return Pikachu;
}(Pokemon);
var PikachuAsh = new Pikachu();
console.log(PikachuAsh.hp);
PikachuAsh.foiAtacado();
console.log(PikachuAsh.hp);
PikachuAsh.atacar();
var pikachu = new Pokemon('Pikachu', 'elétrico');
// pikachu.nome = 'Pikachu'
// pikachu.tipo = 'elétrico'
console.log(pikachu);
pikachu.atacar('choque do trovão');
PikachuAsh.foiAtacado();
PikachuAsh.foiAtacado();
PikachuAsh.foiAtacado();
PikachuAsh.exibeHp();
console.log(PikachuAsh);
console.log(PikachuAsh instanceof Pikachu);