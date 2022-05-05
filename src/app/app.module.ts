import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CompteRenduComponent} from './compteRendu/compteRendu.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning/planning.component';



@NgModule({
  declarations: [AppComponent, ConsultationComponent, PlanningComponent, CompteRenduComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CommonModule, FormsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {} 
