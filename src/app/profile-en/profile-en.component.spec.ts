import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileENComponent } from './profile-en.component';

describe('ProfileENComponent', () => {
  let component: ProfileENComponent;
  let fixture: ComponentFixture<ProfileENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileENComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
