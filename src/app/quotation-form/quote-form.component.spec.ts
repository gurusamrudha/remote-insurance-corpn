import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { XmlUtil } from '../Services/xml-util.service';

import { QuoteFormComponent } from './quote-form.component';

describe('QuotePageComponent', () => {
  let component: QuoteFormComponent;
  let fixture: ComponentFixture<QuoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ QuoteFormComponent ],
      providers: [XmlUtil]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
