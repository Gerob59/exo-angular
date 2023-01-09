import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './components/employe/employe.component';
import { ButtonComponent } from './components/button/button.component';
import { CallApiComponent } from './components/call-api/call-api.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    ButtonComponent,
    CallApiComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
