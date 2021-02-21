import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PhotosUtilManager } from '../Services/photo-util.service';
import { GenerateImageComponent } from './generate-image.component';

describe('GenerateImageComponent', () => {
  let component: GenerateImageComponent;
  let fixture: ComponentFixture<GenerateImageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule ],
      declarations: [ GenerateImageComponent ],
      providers: [PhotosUtilManager, HttpClient]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    spyOn(router, 'navigate');

    fixture = TestBed.createComponent(GenerateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
