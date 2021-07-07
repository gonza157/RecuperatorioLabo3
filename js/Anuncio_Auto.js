import { Anuncio } from "./Anuncio.js";

export class Anuncio_Auto extends Anuncio{
    constructor(id,titulo,transaccion,descripcion,precio,pago,puertas,kms,potencia){
        super(id,titulo,transaccion,descripcion,precio);
        this.pago = pago;
        this.puertas = puertas;
        this.kms = kms;
        this.potencia = potencia
        
    }
};