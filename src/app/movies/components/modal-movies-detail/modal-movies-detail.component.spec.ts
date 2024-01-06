import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMoviesDetailComponent } from './modal-movies-detail.component';

describe('ModalMoviesDetailComponent', () => {
  let component: ModalMoviesDetailComponent;
  let fixture: ComponentFixture<ModalMoviesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMoviesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMoviesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
