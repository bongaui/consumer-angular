import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BongaUIModule } from '@bongaui/angular';
import { defineCustomElements } from '@bongaui/core/loader';

import { AppComponent } from './app.component';
defineCustomElements();

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BongaUIModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
