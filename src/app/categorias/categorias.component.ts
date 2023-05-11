import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categorias } from '../categorias.model';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categorias: Categorias[] = [];

  categoria?: string;

  constructor(
    private categoriasService: CategoriasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.obtenerCategoriasRest()
  }

  private obtenerCategoriasRest() {
    this.categoriasService.ObtenerCategoriasRest().subscribe((data) => {
      data.forEach((categorias) => {
        const categoriaIncluir: Categorias = new Categorias (categorias.id, categorias.imagen, categorias.categoria);
        this.categorias.push(categoriaIncluir)
      })
    })
    
  }
  navegarCategoria() {
  this.router.navigate(['categoria']);
  }
}
