import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { Formulario, FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NgIf, NgFor],
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})

export class RegistroPage implements OnInit {

  formularios: Formulario[] = [];
  formulario: Formulario = {
    nombre: '',
    apellido: '',
    edad: 0,
    email: '',
    genero: '',
    telefono: '',
    fechaNacimiento: new Date(),
    ciudad: '',
    pais: '',
    createdAt: 0
  };

  constructor(private formularioService: FormularioService) { }

  ngOnInit() {
    this.formularioService.getFormularios().subscribe(res => {
      this.formularios = res;
    });
  }

  sendFormulario() {
    if (this.formulario.nombre && this.formulario.apellido && this.formulario.edad && this.formulario.email && this.formulario.telefono && this.formulario.fechaNacimiento && this.formulario.ciudad && this.formulario.pais) {
      console.log(this.formulario);
      this.formularioService.sendFormulario(this.formulario)
      this.formulario = {
        nombre: '',
        apellido: '',
        edad: 0,
        email: '',
        telefono: '',
        genero: '',
        fechaNacimiento: new Date(),
        ciudad: '',
        pais: '',
        createdAt: 0
      };
    }
  }
}
