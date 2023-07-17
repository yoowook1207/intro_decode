import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlyerComponent } from './flyer/flyer.component';
import { HeroComponent } from './section/hero/hero.component';
import { BlockComponent } from './section/block/block.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    FlyerComponent,
    HeroComponent,
    BlockComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
