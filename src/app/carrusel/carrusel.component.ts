import { Component } from '@angular/core';
import { Imagen } from '../imagen.model';
import { ImagenService } from '../services/imagen.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {

imagenes: Imagen[] = [];

  constructor(
    private imagenService: ImagenService
  ) {}

  ngOnInit(): void {
    this.obtenerImagenRest();
  }

  private obtenerImagenRest() {
    this.imagenService.ObtenerImagenRest().subscribe(
      (data) => {
        data.forEach((imagen) => {
          const productoIncluir: Imagen = new Imagen (imagen.id, imagen.imagen);
            this.imagenes.push(productoIncluir);
        })
      }
    )
  }

}
