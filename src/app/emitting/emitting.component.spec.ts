import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmittingComponent } from './emitting.component';

describe('EmittingComponent', () => {
  let component: EmittingComponent;
  let fixture: ComponentFixture<EmittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmittingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
