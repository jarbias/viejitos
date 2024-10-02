export default class Cl_vfundacion {
  constructor (controlador) {
      this.vista = document.GetElementById("fundacionform");
      this.tabla = document.GetElementById("fundacionform_tabla");
      this.agregar = document.GetElementById("fundacionform_agregar");
      this.donantes = document.GetElementById("fundacionform_donantes");
      this.totald = document.GetElementById("fundacionform_totald");
      this.totalbs = document.GetElementById("fundacionform_totalbs");
     this.btaceptar = document.GetElementById("fundacionform_btaceptar");
     this.agregar.onclick = () => controlador.vistadonantes();    
  }  
  mostrar() {
      this.vista.hidden = false;
  }
  ocultar() {
      this.vista.hidden = true;
  }
    
    reportedonantes({
    n,
    cd,
    cb,
    devolvermayor,
    devolvertotald,
    devolvertotalbs
   
  }){

 this.tabla.innerHTML += `
    <tr>
      <td>${n}</td>
      <td>${cd}</td>
      <td>${cb}</td>
      <td>${devolvertotalbs}</td>
      <td>${devolvertotald}</td>
      <td>${devolvermayor}</td>
    </tr>`;
    this.lbldevolvermayor.innerHTML = devolvermayor;
    this.lbldevolvertotald.innerHTML = devolvertotald;
    this.lbldevolvertotalbs.innerHTML = devolvertotalbs;
  }


}
