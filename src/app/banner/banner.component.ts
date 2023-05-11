import { Component } from '@angular/core';
import { Banner } from '../banner.models';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  banner: Banner[] = [];

  constructor(
    private bannerService: BannerService
  ) {}

  ngOnInit(): void {
    this.obtenerBannerRest();
  }

  private obtenerBannerRest() {
    this.bannerService.ObtenerBannerRest().subscribe(
      (data) => {
        data.forEach((imagen) => {
          const productoIncluir: Banner = new Banner (imagen.id, imagen.imagen);
            this.banner.push(productoIncluir);
        })
      }
    )
  }

}
