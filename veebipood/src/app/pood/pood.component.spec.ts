import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoodComponent } from './pood.component';

describe('PoodComponent', () => {
  let component: PoodComponent;
  let fixture: ComponentFixture<PoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
