import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './pages/report/report.component';
//HTTP REQUESTS
import { HttpClientModule } from '@angular/common/http';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { SunComponent } from './components/sun/sun.component';
import { MoonComponent } from './components/moon/moon.component';
import { RainComponent } from './components/rain/rain.component';
import { SnowComponent } from './components/snow/snow.component';
@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    TemperatureComponent,
    WeatherCardComponent,
    CloudComponent,
    SunComponent,
    MoonComponent,
    RainComponent,
    SnowComponent
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
