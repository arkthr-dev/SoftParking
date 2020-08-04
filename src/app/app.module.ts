import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CTAComponent } from './components/cta/cta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    HeroComponent,
    HomeComponent,
    TestimonialsComponent,
    CTAComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
