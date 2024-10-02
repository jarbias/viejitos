export default class Donantes {
    
    constructor (controlador) {
        this.vista = document.GetElementById("donantesform");
        this.innombre = document.GetElementById("donantesform_innombre");
        this.incantd = document.GetElementById("donantesform_incantd");
        this.incantbs = document.GetElementById("donantesform_incantbs");
        this.btaceptar = document.GetElementById("donantesform_btaceptar");
        
        this.btaceptar.onclick = () => 
             controlador.agregardonantes({
                nombre: this.innombre.value,
                cantd: this.incantd.value,
                cantbs: this.incantbs.value,
            });
            this.ocultar();
           } 
     mostrar() {
        this.vista.hidden = true;
    }

     ocultar() {
        this.vista.hidden = false;
     }   
    
    
}