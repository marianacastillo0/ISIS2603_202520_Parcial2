import { Component, OnInit, Output } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorService } from '../emprendedor.service';

@Component({
  selector: 'app-emprendedor-list',
  standalone: false,
  templateUrl: './emprendedor-list.component.html',
  styleUrl: './emprendedor-list.component.css'
})
export class EmprendedorListComponent implements OnInit {
  // Lista de emprendedores quemada, recuerden que tiene que crear un servicio para obtenerlos del API
  // Por lo tanto, el contenido de esta lista luego lo deben eliminar
  emprendedores: Emprendedor[]=[]
  
  @Output() emprendedorSeleccionado: Emprendedor | null = null;
  seleccionado = false;
  
  seleccionarEmprendedor(emprendedor: Emprendedor): void {
    this.emprendedorSeleccionado = emprendedor;
    this.seleccionado = true;
  }


  constructor(private svc: EmprendedorService) { }
  ngOnInit(){
    this.svc.getEmprendedores().subscribe((data =>{
      this.emprendedores = [data];
    }));
  }
}
