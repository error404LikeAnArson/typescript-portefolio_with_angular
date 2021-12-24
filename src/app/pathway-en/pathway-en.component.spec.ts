import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathwayENComponent } from './pathway-en.component';

describe('PathwayENComponent', () => {
  let component: PathwayENComponent;
  let fixture: ComponentFixture<PathwayENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathwayENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathwayENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
