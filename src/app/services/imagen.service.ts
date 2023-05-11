import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntImagen } from '../imagen.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(
    private http: HttpClient
  ) { }

  public ObtenerImagenRest(): Observable<IntImagen[]> {
    const urlEndPoint: string = "http://localhost:3002/carrusel"
    return this.http.get<IntImagen[]>(urlEndPoint);
  }
}
