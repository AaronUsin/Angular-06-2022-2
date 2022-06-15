import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValitudAutodComponent } from './valitud-autod.component';

describe('ValitudAutodComponent', () => {
  let component: ValitudAutodComponent;
  let fixture: ComponentFixture<ValitudAutodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValitudAutodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValitudAutodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
