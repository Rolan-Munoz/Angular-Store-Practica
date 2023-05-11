import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFichaComponent } from './producto-ficha.component';

describe('ProductoFichaComponent', () => {
  let component: ProductoFichaComponent;
  let fixture: ComponentFixture<ProductoFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
