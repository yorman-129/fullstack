import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Administrative } from '../models/administrative';
import { AdministrativeService } from '../service/administrative.service';

@Component({
  selector: 'app-editar-administrative',
  templateUrl: './editar-administrative.component.html',
  styleUrls: ['./editar-administrative.component.css']
})
export class EditarAdministrativeComponent implements OnInit {

  administrative!: Administrative;
  constructor(
    private administrativeService: AdministrativeService,
    private activatedRoute: ActivatedRoute,
    private toastr : ToastrService,
    private router : Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.administrativeService.search(id).subscribe(
      data=>{
        this.administrative=data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(this.administrative)
    this.administrativeService.update(id, this.administrative).subscribe(
      data => {
        this.toastr.success('Producto Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
