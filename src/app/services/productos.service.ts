import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../producto.interface';
import { Producto } from '../producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http: HttpClient
  ) { }

  public obtenerProductosRest(): Observable<IProducto[]> {
    const urlEndPoint: string = "http://localhost:3002/productos"
    return this.http.get<IProducto[]>(urlEndPoint);
  }

  public obtenerProductoPorId(id: number): Observable<Producto> {
    const urlEndPoint: string = `http://localhost:3002/productos/${id}`
    return this.http.get<Producto>(urlEndPoint);
  }
}
