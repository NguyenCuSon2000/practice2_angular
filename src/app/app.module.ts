import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { Main1Component } from './main1/main1.component';
import { Footer1Component } from './footer1/footer1.component';
import { Header2Component } from './header2/header2.component';
import { Slider2Component } from './slider2/slider2.component';
import { Main2Component } from './main2/main2.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Main1Component,
    Footer1Component,
    Header2Component,
    Slider2Component,
    Main2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
