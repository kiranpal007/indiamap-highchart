// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';

@NgModule({
  declarations:[AppComponent],
  imports: [
    BrowserModule,
    ChartModule // add ChartModule to your imports
  ],
  bootstrap:[AppComponent]
})
export class AppModule {}
