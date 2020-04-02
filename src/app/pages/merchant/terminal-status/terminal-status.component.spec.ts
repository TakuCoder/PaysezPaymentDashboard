import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalStatusComponent } from './terminal-status.component';

describe('TerminalStatusComponent', () => {
  let component: TerminalStatusComponent;
  let fixture: ComponentFixture<TerminalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
