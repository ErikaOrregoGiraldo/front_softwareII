import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPacienteComponent } from './Features/registrar-paciente/infraestructure/UI/registrar-paciente/registrar-paciente.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPacienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
