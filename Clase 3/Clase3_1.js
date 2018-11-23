var Circulo = /** @class */ (function () {
    function Circulo(contexto) {
        this._nombre = "Circulo";
        this.radio = Math.random() * 100 + 20;
        this._color = "yellow";
        this.contexto = contexto;
        this._x = Math.random() * 100 + 10;
        this._y = Math.random() * 100 + 10;
    }
    Circulo.prototype.pintar = function () {
        this.contexto.fillStyle = this._color;
        this.contexto.arc(this._x, this._y, this.radio, 0, Math.PI * 2);
        this.contexto.fill();
        this.contexto.stroke();
    };
    Circulo.prototype.setRadio = function (radio) {
        this.radio;
    };
    Circulo.prototype.getRadio = function () {
        return this.radio;
    };
    Object.defineProperty(Circulo.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    return Circulo;
}());
var canvas = document.getElementById("canvas");
var colores;
(function (colores) {
    colores[colores["red"] = 0] = "red";
    colores[colores["blue"] = 1] = "blue";
    colores[colores["yellow"] = 2] = "yellow";
    colores[colores["white"] = 3] = "white";
})(colores || (colores = {}));
if (canvas.getContext) {
    //c.nombre = "circulo2"  no se puede hacer, porque readonly hace el atributo constante.
    var c = new Circulo(canvas.getContext("2d"));
    c.color = colores[Math.round(Math.random() * 3)]; // se usa el setter implicito
    c.setRadio(20); // se usa el setter explicito   
    console.log("El color es " + c.color); //getter implicito
    console.log("El radio es " + c.getRadio()); //getter explicito
    c.pintar();
}
