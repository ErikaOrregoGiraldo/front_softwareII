import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

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
      lastname: new FormControl('', [Validators.required, Validators.minLength(3),]),
      documentType: new FormControl('Cédula de ciudadanía', [ Validators.required ]),
      documentNumber: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
      birthDate: new FormControl('', [ Validators.required ]),
      age: new FormControl('', [ Validators.required, this.minAgeValidator() ]),
      phone: new FormControl('', [ Validators.required ]),
      bloodType: new FormControl('', [ Validators.required ]),
      weight: new FormControl('', [ Validators.required ]),
      height: new FormControl('', [ Validators.required ]),
      gender: new FormControl('', [ Validators.required ]),
      activity: new FormControl('No'),
      vaccine: new FormControl('Si'),
      disability: new FormControl('No'),
      typeDisability: new FormControl(''),
      allergies: new FormControl('No'),
      allergiesType: new FormControl(''),
      medicines: new FormControl('No'),
    });
  }

  minAgeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const age = control.value;
      if (age !== null && age < 0) {
        return { 'minAge': true };
      }
      return null;
    };
  }

  sendForm() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      console.log('El formulario es inválido');
    }
  }
}
