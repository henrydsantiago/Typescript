var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figura = /** @class */ (function () {
    function Figura(context, x, y) {
        if (x == undefined)
            this._x = Math.random() * 150 + 20;
        else
            this._x = x;
        this._y = (y == undefined) ? Math.random() * 150 : y;
        this._context = context;
    }
    Object.defineProperty(Figura, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Figura._color = "orange";
    return Figura;
}());
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(contexto, tamLados) {
        var _this = _super.call(this, contexto) || this;
        _this._tamLados = tamLados;
        return _this;
    }
    Object.defineProperty(Triangulo.prototype, "tamLados_1", {
        get: function () {
            return this._tamLados;
        },
        set: function (value) {
            this._tamLados = value;
        },
        enumerable: true,
        configurable: true
    });
    Triangulo.prototype.mover = function () {
        this.x++;
        this.y++;
    };
    Triangulo.prototype.dibujar = function () {
        this._context.fillStyle = Figura.color;
        this._context.beginPath();
        this._context.moveTo(this.x, this.y);
        this._context.lineTo(this.x, this.y + this._tamLados);
        this._context.lineTo(this.x + this._tamLados, this.y + this._tamLados);
        this._context.closePath();
        this._context.fill();
        //this._context.stroke()
    };
    return Triangulo;
}(Figura));
var Triangulito = /** @class */ (function (_super) {
    __extends(Triangulito, _super);
    function Triangulito(contexto, nombre) {
        var _this = _super.call(this, contexto, 300) || this;
        _this.nombre = nombre;
        return _this;
    }
    //se sobreescribe el metodo de la superclase Triangulo
    Triangulito.prototype.dibujar = function () {
        _super.prototype.dibujar.call(this);
        this._context.fillStyle = "black";
        this._context.font = "25px arial";
        this._context.fillText(this.nombre, this.x + this.tamLados_1 / 8, this.y + this.tamLados_1 * 0.8);
    };
    return Triangulito;
}(Triangulo));
var canvas = document.getElementById("canvas");
var colors;
(function (colors) {
    colors[colors["black"] = 0] = "black";
    colors[colors["skyblue"] = 1] = "skyblue";
    colors[colors["pink"] = 2] = "pink";
    colors[colors["green"] = 3] = "green";
})(colors || (colors = {}));
if (canvas.getContext) {
    var t1 = new Triangulito(canvas.getContext("2d"), "Henry");
    Figura.color = colors[Math.round(Math.random() * 3)];
    t1.dibujar();
    var t = new Triangulo(canvas.getContext("2d"), 40);
    Figura.color = colors[Math.round(Math.random() * 3)];
    t.dibujar();
    Figura.color = colors[Math.round(Math.random() * 3)];
    for (var i = 1; i <= 2; i++) {
        new Triangulo(canvas.getContext("2d"), 30).dibujar();
        new Triangulito(canvas.getContext("2d"), i.toString()).dibujar();
    }
}
