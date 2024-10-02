import Cl_vfundacion from "./Cl_vfundacion";
import Cl_vdonantes from "./Cl_vdonantes";
import Donantes from "./Donantes";
import Fundacion from "./Fundacion";
 export default class Controlador {
     constructor () {
     this.mFundacion = new Fundacion();
     this.vfundacion = new Cl_vfundacion(this);
     this.vdonantes = new Cl_vdonantes(this);
     
    }


     mostrarvistafundacion() 
     {
         this.vfundacion.mostrar();
         this.vdonantes.ocultar();
     }

     mostrarvistadonantes() 
     {
         this.vdonantes.mostrar();
         this.vfundacion.ocultar();
     }
    agregardonantes({n,cd,cb}) {
        let donante = new Donantes(n,cd,cb);
        this.mFundacion.procesardonantes(donante);
        this.vfundacion.reportedonantes({
            n: donante.nombre,
            cd: donante.cantd,
            cb: donante.cantbs,
            devolvermayor: this.mFundacion.devolvermayor(),
            devolvertotald: this.mFundacion.devolvertotald(),
            devolvertotalbs: this.mFundacion.devolvertotalbs()
        });
        this.mostrarvistafundacion();
    }


 }