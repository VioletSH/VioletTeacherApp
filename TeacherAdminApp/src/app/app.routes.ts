import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './components/core/containers/modules/modules.component';
import { AsignaturesComponent } from './components/core/containers/asignatures/asignatures.component';
import { ActivitiesComponent } from './components/core/containers/activities/activities.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/home/containers/login/login.component';

export const ROUTES: Routes = [
	{ path: 'home', component: LoginComponent },
	{ path: 'modules', component: ModulesComponent },
	{ path: 'asignatures', component: AsignaturesComponent },
	{ path: 'activities', component: ActivitiesComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
	imports: [
		RouterModule.forRoot(
			ROUTES,
			
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutesModule { }
