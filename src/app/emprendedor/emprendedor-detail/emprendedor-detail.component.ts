  import { Component, Input } from '@angular/core';
  import { Emprendedor } from '../emprendedor';
  import { EmprendedorDetail } from '../emprendedor-detail';
  import { ActivatedRoute } from '@angular/router';
  import { OnInit } from '@angular/core';
  import { EmprendedorService } from '../emprendedor.service';

  @Component({
    selector: 'app-emprendedor-detail',
    standalone: false,
    templateUrl: './emprendedor-detail.component.html',
    styleUrl: './emprendedor-detail.component.css'
  })
  export class EmprendedorDetailComponent implements OnInit {
    
    // Lista de emprendedores detallados quemada, recuerden que tiene que crear un servicio para obtenerlos del API
    // Por lo tanto, el contenido de esta lista luego lo deben eliminar
    // emprendedor-detail.component.ts
    emprendedor: Emprendedor | null = null;
    
    // Cuando el componente recibe un nuevo emprendedor, busca su detalle en la lista quemada
    // notese que esto es solo un placeholder hasta que implementen el servicio y el API
    constructor(private route: ActivatedRoute, private svc: EmprendedorService) {}
    
    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.svc.getEmprendedorById(id).subscribe(e => this.emprendedor = e)
  ;
    } 

  }
