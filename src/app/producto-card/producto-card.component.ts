import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Producto } from '../producto.model';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss']
})
export class ProductoCardComponent {

  constructor(private currencyPipe: CurrencyPipe) {}

  transformarPrecio(price: number): string {
    const transformedPrice = this.currencyPipe.transform(price, 'EUR', 'symbol', '1.2-2', 'es-ES');
    return transformedPrice !== null ? transformedPrice : '';
  }
  
  transformarPecioRebajado(discountedPrice: number | string): string {
    if (typeof discountedPrice === 'number') {
      const transformedPrice = this.currencyPipe.transform(discountedPrice, 'EUR', 'symbol', '1.2-2', 'es-ES');
      return transformedPrice !== null ? transformedPrice : '';
    } else {
      return '';
    }
  }
  
  

  @Input() producto?: Producto;
  @Output() click: EventEmitter<number> = new EventEmitter<number>();

  public pulsarBoton():void {
    this.click.emit(this.producto?.getId());
  }

  


}
