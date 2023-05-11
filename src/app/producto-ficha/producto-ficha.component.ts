import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../producto.model';
import { ProductosService } from '../services/productos.service';



@Component({
  selector: 'app-producto-ficha',
  templateUrl: './producto-ficha.component.html',
  styleUrls: ['./producto-ficha.component.scss']
})
export class ProductoFichaComponent implements OnInit  {
  idArticulo?: String;
  producto?: Producto;
  
  

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) {
    
  }

  ngOnInit(): void {
    this.idArticulo = this.route.snapshot.paramMap.get('idArticulo') ?? undefined ;
    if (this.idArticulo) {
      const id = Number(this.idArticulo);
      this.productosService.obtenerProductoPorId(id).subscribe(producto => {
        this.producto = producto;
      });
  }
}
}