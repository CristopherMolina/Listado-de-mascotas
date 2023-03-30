import { Component, OnDestroy, OnInit } from '@angular/core';
import { MascotaService } from '../../service/mascota.service';
import { Mascota } from '../../interface/mascota';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  id!: number;
  mascota!: Mascota;

  routeSub!: Subscription;

  constructor(private mascotaService: MascotaService,
              private aRoute: ActivatedRoute) {
                //opcion para obtener id por ruta
                //this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
              }
  
  ngOnInit(): void {
    //obtener id de ruta, recomendable
    this.routeSub = this.aRoute.params.subscribe(data => {
      this.id = data['id'];
      this.obtenerMascota();
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }


  obtenerMascota() {
    this.loading = true;
    this.mascotaService.getMascota(this.id).subscribe(data => {
      this.loading = false;
      this.mascota = data;

    }, error => {
      this.loading = false;
      alert("Ups ocurrio un error");
    });
  }

}
