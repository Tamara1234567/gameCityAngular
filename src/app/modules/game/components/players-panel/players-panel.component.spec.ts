import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersPanelComponent } from './players-panel.component';

describe('PlayersPanelComponent', () => {
  let component: PlayersPanelComponent;
  let fixture: ComponentFixture<PlayersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
