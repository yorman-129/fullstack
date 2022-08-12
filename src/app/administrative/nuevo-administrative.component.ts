import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Administrative } from '../models/administrative';
import { AdministrativeService } from '../service/administrative.service';

@Component({
  selector: 'app-nuevo-administrative',
  templateUrl: './nuevo-administrative.component.html',
  styleUrls: ['./nuevo-administrative.component.css']
})
export class NuevoAdministrativeComponent implements OnInit {
  id=0;
  nombreCompleto ='';
  cargo='';
  salario= 0;
  tipoContrato = 0;
  telefono = '';
  direccion= '';


  constructor(private administrativeService: AdministrativeService,
     private toastr: ToastrService, 
     private router: Router) { }

  ngOnInit(): void {

  }


  onCreat(): void{
    const administrative = new Administrative(this.id,this.cargo,this.direccion,this.nombreCompleto,this.salario,this.telefono,this.tipoContrato);
    this.administrativeService.save(administrative).subscribe(
      data => {
          this.toastr.success('Administrative created', 'ok',{
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/'])
      }, err => {
        this.toastr.error(err, 'fail',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    )
  }
}
