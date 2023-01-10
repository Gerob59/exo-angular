import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeComponent } from './components/employe/employe.component';
import { ButtonComponent } from './components/button/button.component';
import { CallApiComponent } from './components/call-api/call-api.component';
import { HorlogeComponent } from './components/horloge/horloge.component';
import { HorlogeMenuComponent } from './components/horloge-menu/horloge-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    ButtonComponent,
    CallApiComponent,
    HorlogeComponent,
    HorlogeMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
