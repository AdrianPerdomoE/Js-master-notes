"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camiseta = void 0;
class Camiseta {
    constructor(color, modelo, marca, precio) {
        this.talla = "l";
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    cambiar_talla(newtalla) {
        this.talla = newtalla;
    }
    get_talla() {
        return this.talla;
    }
}
exports.Camiseta = Camiseta;
var camiseta = new Camiseta("red", "manga larga", "nike", 10);
camiseta.color = "azul";
camiseta.modelo = "manga corta";
camiseta.marca = "reebook";
camiseta.precio = 34;
camiseta.cambiar_talla("m");
//# sourceMappingURL=Camiseta.js.map