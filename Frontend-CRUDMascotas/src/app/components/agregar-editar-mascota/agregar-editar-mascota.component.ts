import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Mascota } from '../../interface/mascota';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit {

  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(private fb: FormBuilder,
              private mascotaService: MascotaService,
              private _snackBar: MatSnackBar,
              private router: Router,
              private aRoute: ActivatedRoute ) {
    this.form = this.fb.group({
      nombre: ['',Validators.required],
      color: ['',Validators.required],
      raza: ['',Validators.required],
      edad: ['',Validators.required],
      peso: ['',Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id!= 0) {
      this.operacion = 'Editar';
      this.obtenerMascota(this.id);
    }
  }

  obtenerMascota(id: number) {
    this.loading = true;
    this.mascotaService.getMascota(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre,
        raza: data.raza,
        color: data.color,
        edad: data.edad,
        peso: data.peso
      })
      this.loading = false;
    });
  }

  agregarEditarMascota() {
    
    const mascota: Mascota = {
      nombre: this.form.value.nombre,
      color : this.form.get('color')?.value,
      raza : this.form.get('raza')?.value,
      edad : this.form.get('edad')?.value,
      peso : this.form.get('peso')?.value
    }

    if (this.id != 0) {
      this.loading = true;
      mascota.id = this.id;
      this.mascotaService.updateMascota(this.id, mascota).subscribe(data =>  {
        this.loading = false;
        this.mensajeExito('actualizada');
        this.router.navigate(['/listMascotas']);
      });
    } else {
      this.mascotaService.addMascota(mascota).subscribe(data => {
        this.mensajeExito('agregada');
        this.router.navigate(['/listMascotas']);
      });
    }
    
  }

  mensajeExito(text: string) {
    this._snackBar.open(`La mascota fue ${text} con exito`, '', {
      duration: 4000,
      horizontalPosition: 'center'
    });
  }
}
