import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SliderComponent} from './slider/slider.component';
import {CommonModule} from "@angular/common";
import {BodyComponent} from './body/body.component';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
