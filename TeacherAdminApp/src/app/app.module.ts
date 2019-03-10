import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { RequestCrud } from './shared/services/abstracts/request-crud.service.ts/request-crud.service.ts.component';
import { Alerts } from './shared/services/alerts.service.ts/alerts.service.ts.component';
import { Auth } from './shared/services/auth.service.ts/auth.service.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    AsignaturesComponent,
    ModulesComponent,
    ActivitiesComponent,
    ResourcesComponent,
    ModalAsignaturesComponent,
    ModalActivitiesComponent,
    ModalModulesComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RequestCrud.Service.TsComponent,
    Alerts.Service.TsComponent,
    Auth.Service.TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
