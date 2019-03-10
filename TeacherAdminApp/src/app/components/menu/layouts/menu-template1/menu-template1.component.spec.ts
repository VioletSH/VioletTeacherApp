import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTemplate1Component } from './menu-template1.component';

describe('MenuTemplate1Component', () => {
  let component: MenuTemplate1Component;
  let fixture: ComponentFixture<MenuTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
