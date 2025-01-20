import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomlibUsersComponent } from './customlib-users.component';

describe('CustomlibUsersComponent', () => {
  let component: CustomlibUsersComponent;
  let fixture: ComponentFixture<CustomlibUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomlibUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomlibUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
