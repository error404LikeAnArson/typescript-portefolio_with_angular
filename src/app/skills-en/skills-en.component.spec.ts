import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsENComponent } from './skills-en.component';

describe('SkillsENComponent', () => {
  let component: SkillsENComponent;
  let fixture: ComponentFixture<SkillsENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
