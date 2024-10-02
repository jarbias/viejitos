export default class Fundacion {
    constructor (){
   this.acumd = 0;
   this.acombs = 0;
   this.mayor = 0;
   this.nombrem="";
    }
    procesardonantes (d) {
        this.acumd += d.totald();
        this.acombs += d.totalbs();
        if ( d.totald() > this.mayor) {
            this.mayor = d.cantd;
            this.nombrem = d.nombre;
        }
    }
    devolvermayor() {
        return this.nombrem;
    }
devolvertotald() {
    return this.acumd;
}
devolvertotalbs() {
    return this.acombs;
}
}