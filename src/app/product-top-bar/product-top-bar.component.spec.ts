import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopBarComponent } from './product-top-bar.component';

describe('ProductTopBarComponent', () => {
  let component: ProductTopBarComponent;
  let fixture: ComponentFixture<ProductTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
