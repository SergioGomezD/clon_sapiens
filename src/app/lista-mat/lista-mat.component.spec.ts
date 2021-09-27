import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMatComponent } from './lista-mat.component';

describe('ListaMatComponent', () => {
  let component: ListaMatComponent;
  let fixture: ComponentFixture<ListaMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
