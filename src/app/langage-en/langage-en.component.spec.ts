import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangageENComponent } from './langage-en.component';

describe('LangageENComponent', () => {
  let component: LangageENComponent;
  let fixture: ComponentFixture<LangageENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangageENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangageENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
