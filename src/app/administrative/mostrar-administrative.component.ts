import { Component, OnInit } from '@angular/core';
import { Administrative } from '../models/administrative';
import { AdministrativeService } from '../service/administrative.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-mostrar-administrative',
  templateUrl: './mostrar-administrative.component.html',
  styleUrls: ['./mostrar-administrative.component.css']
})
export class MostrarAdministrativeComponent implements OnInit {

  administrative: Administrative[]=[];

  constructor(private administrativeServie: AdministrativeService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarAdministrative();
  }
  cargarAdministrative(): void{
    this.administrativeServie.lista().subscribe(
      data => { this.administrative=data; console.log(data) }, err => console.log(err)
    )
  }

  borrar(id: number){
    this.administrativeServie.delete(id).subscribe(
      data => {
        this.toastr.success('Administrative eliminado', 'ok',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });this.cargarAdministrative()},
      err =>{
        console.log("12123");
        this.toastr.error(err, 'fail',{
          timeOut: 3000, positionClass: 'toast-top-center'
      });
    }
)}




}

