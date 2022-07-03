import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaPoodeComponent } from './muuda-poode.component';

describe('MuudaPoodeComponent', () => {
  let component: MuudaPoodeComponent;
  let fixture: ComponentFixture<MuudaPoodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuudaPoodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuudaPoodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
