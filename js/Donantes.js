export default class Donantes {
    constructor ({n,cd,cb}) {
        this.nombre = n;
        this.cantd=cd;
        this.cantbs=cb;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set cantd(cd) {
        this._cantd = cd;
    }
    get cantd() {
        return this._cantd;
    }
    set cantbs(cb) {
        this._cantbs = cb;
    }
    get cantbs() {
        return this._cantbs;
    }
     totalbs() {
        return this.cantbs + (this.cantd * 40) ;
    }
    totald() {
        return this.cantd + (this.cantbs / 40);
     }
    
}