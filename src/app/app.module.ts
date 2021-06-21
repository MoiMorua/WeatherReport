import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './pages/report/report.component';
//HTTP REQUESTS
import { HttpClientModule } from '@angular/common/http';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    TemperatureComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
