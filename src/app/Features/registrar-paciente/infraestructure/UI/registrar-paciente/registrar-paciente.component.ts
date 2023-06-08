import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css'],
})
export class RegistrarPacienteComponent implements OnInit {
  formulario!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  sendForm() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      console.log('El formulario es inválido');
    }
  }
}
