import { Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inscription', pathMatch: 'full' },
  { path: 'inscription', component: InscriptionComponent },
];
