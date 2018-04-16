import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzformComponent } from './nzform.component';

describe('NzformComponent', () => {
  let component: NzformComponent;
  let fixture: ComponentFixture<NzformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
