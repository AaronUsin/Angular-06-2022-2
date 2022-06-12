import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UusComponent } from './uus.component';

describe('UusComponent', () => {
  let component: UusComponent;
  let fixture: ComponentFixture<UusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
