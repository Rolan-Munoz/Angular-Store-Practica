import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductoFichaComponent } from './producto-ficha/producto-ficha.component';
import { ProductoListComponent } from './producto-list/producto-list.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'categoria', component: ProductoListComponent},
  { path: 'productos/:idArticulo', component: ProductoFichaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
