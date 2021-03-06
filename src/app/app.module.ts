import { ServerComponent } from './server/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WindowAlertComponent } from './window-alert/window-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServersComponent } from './servers/servers.component';
import { Practice3Component } from './practice3/practice3.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WindowAlertComponent,
    SuccessAlertComponent,
    ServersComponent,
    Practice3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
