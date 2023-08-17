import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlyerComponent } from './flyer/flyer.component';
import {NgOptimizedImage} from "@angular/common";
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    FlyerComponent,
    SectionComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
