import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewExamsComponent } from './user-view-exams.component';

describe('UserViewExamsComponent', () => {
  let component: UserViewExamsComponent;
  let fixture: ComponentFixture<UserViewExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewExamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
