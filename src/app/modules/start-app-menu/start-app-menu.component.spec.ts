import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAppMenuComponent } from './start-app-menu.component';

describe('StartAppMenuComponent', () => {
  let component: StartAppMenuComponent;
  let fixture: ComponentFixture<StartAppMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartAppMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
