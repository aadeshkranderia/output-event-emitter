import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherChildComponenetComponent } from './another-child-componenet.component';

describe('AnotherChildComponenetComponent', () => {
  let component: AnotherChildComponenetComponent;
  let fixture: ComponentFixture<AnotherChildComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherChildComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherChildComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
