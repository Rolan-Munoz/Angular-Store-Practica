import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto.model';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {


  productos: Producto[] =[];

  constructor(
    private productoService: ProductosService,
    private router: Router
  ) {}

  ngOnInit(): void {
      this.obtenerPoductosRest();
  }

  private obtenerPoductosRest() {
    this.productoService.obtenerProductosRest().subscribe(
      (data) => {
        data.forEach((producto) => {
          const productoIncluir: Producto = new Producto (producto.id, producto.nombre, producto.precio, producto.descripcion,
            producto.categoria, producto.imagen, producto.favorito, producto.tallas, producto.precioRebajado);
            this.productos.push(productoIncluir);
        })
      }
    )
  }

  navegarAFicha(idArticulo: number): void {
    this.router.navigate(['productos', idArticulo]);
    }

  


}
