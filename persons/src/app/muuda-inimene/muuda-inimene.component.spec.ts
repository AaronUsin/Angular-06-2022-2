import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaInimeneComponent } from './muuda-inimene.component';

describe('MuudaInimeneComponent', () => {
  let component: MuudaInimeneComponent;
  let fixture: ComponentFixture<MuudaInimeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuudaInimeneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaInimeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
