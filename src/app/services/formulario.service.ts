import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, orderBy } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

export interface Formulario {
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  telefono: string;
  fechaNacimiento: Date;
  ciudad: string;
  pais: string;
  genero: string;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private firestore: Firestore) { }

  getFormularios(): Observable<Formulario[]> {
    const formularioRef = collection(this.firestore, 'formularios');
    const q = query(formularioRef, orderBy('createdAt'));
    return collectionData(q, { idField: 'id' }) as Observable<Formulario[]>;
  }

  sendFormulario(formulario: Formulario) {
    const formularioRef = collection(this.firestore, 'formularios');
    const newFormulario: Formulario = {
      ...formulario,
      createdAt: Date.now()
    };
    return addDoc(formularioRef, newFormulario);

  }
}
