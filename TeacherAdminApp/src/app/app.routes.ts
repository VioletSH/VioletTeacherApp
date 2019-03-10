import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './components/core/containers/modules/modules.component';
import { AsignaturesComponent } from './components/core/containers/asignatures/asignatures.component';
import { ActivitiesComponent } from './components/core/containers/activities/activities.component';

export const ROUTES: Routes = [
	{ path: 'modules', component: ModulesComponent },
	{ path: 'asignatures', component: AsignaturesComponent },
    { path: 'activities', component: ActivitiesComponent },
];


export class AppRoutesModule { }