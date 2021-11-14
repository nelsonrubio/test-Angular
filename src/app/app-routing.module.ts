import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { CrearEstudiantesComponent } from './crear-estudiantes/crear-estudiantes.component';


const routes: Routes = [
  { path: '', component: PersonajesComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'crear-estudiantes', component: CrearEstudiantesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
