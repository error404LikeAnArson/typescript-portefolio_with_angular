import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsENComponent } from './projects-en.component';

describe('ProjectsENComponent', () => {
  let component: ProjectsENComponent;
  let fixture: ComponentFixture<ProjectsENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
