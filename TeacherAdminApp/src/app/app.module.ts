import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AsignaturesComponent } from './components/core/containers/asignatures/asignatures.component';
import { ModulesComponent } from './components/core/containers/modules/modules.component';
import { ActivitiesComponent } from './components/core/containers/activities/activities.component';
import { ResourcesComponent } from './shared/layouts/resources/resources.component';
import { ModalAsignaturesComponent } from './components/core/layouts/modal-asignatures/modal-asignatures.component';
import { ModalActivitiesComponent } from './components/core/layouts/modal-activities/modal-activities.component';
import { ModalModulesComponent } from './components/core/layouts/modal-modules/modal-modules.component';
import { LoginComponent } from './components/home/containers/login/login.component';
import { ForgetPasswordComponent } from './components/home/layouts/forget-password/forget-password.component';
import { MenuTemplate1Component } from './components/menu/layouts/menu-template1/menu-template1.component';
import { AppRoutesModule } from './app.routes';
import { ModalGenericoComponent } from './shared/layouts/modal-generico/modal-generico.component';


@NgModule({
  declarations: [
    AppComponent,
    AsignaturesComponent,
    ModulesComponent,
    ActivitiesComponent,
    ResourcesComponent,
    ModalGenericoComponent,
    ModalAsignaturesComponent,
    ModalActivitiesComponent,
    ModalModulesComponent,
    LoginComponent,
    ForgetPasswordComponent,
    MenuTemplate1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ForgetPasswordComponent,
    ModalGenericoComponent,
    ModalModulesComponent,
    ModalActivitiesComponent,
    ModalAsignaturesComponent
	]
})
export class AppModule { }
