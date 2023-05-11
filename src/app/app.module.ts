import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoCardComponent } from './producto-card/producto-card.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductoFichaComponent } from './producto-ficha/producto-ficha.component';
import { CurrencyPipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    ProductoListComponent,
    ProductoCardComponent,
    CarruselComponent,
    BannerComponent,
    CategoriasComponent,
    ProductoFichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CurrencyPipe,
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
