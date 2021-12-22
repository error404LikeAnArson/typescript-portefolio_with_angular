import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkENComponent } from './framework-en.component';

describe('FrameworkENComponent', () => {
  let component: FrameworkENComponent;
  let fixture: ComponentFixture<FrameworkENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
