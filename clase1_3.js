function calcular_bono(monto, porc) {
    if (porc === void 0) { porc = 10; }
    if (monto > 1000)
        return monto += monto * porc / 100;
    else
        return monto;
}
var a;
var b;
a = calcular_bono(1500);
b = calcular_bono(1500, 20);
console.log("El valor de a es: " + a);
console.log("El valor de b es: " + b);
