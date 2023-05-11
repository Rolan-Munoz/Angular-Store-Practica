import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Producto } from '../producto.model';




@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss']
})
export class ProductoCardComponent {


  

  @Input() producto?: Producto;
  @Output() click: EventEmitter<number> = new EventEmitter<number>();

  public pulsarBoton():void {
    this.click.emit(this.producto?.getId());
  }

  


}
