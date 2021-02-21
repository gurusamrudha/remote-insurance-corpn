import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { QuotesModel } from '../Models/quotes.model';
import { XmlUtil } from '../Services/xml-util.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private xmlUtil: XmlUtil) { }

  ngOnInit(): void {
    // Initialise Form
    this.form = this.fb.group({
      policy: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
      age: [null, Validators.required],
      sex: [''],
      phone: [null],
      address: [''],
      city: [''],
      zip: ['']
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  /**
   * Takes an uploaded xml file
   * @param $event: takes an .xml file
   */
  onUploadXml($event: any): void {
    const inputEl = $event.target as HTMLInputElement;
    if (!inputEl.files || !inputEl.files.length) {
      return;
    }

    const quoteConfig: File = Array.from(inputEl.files)[0];

    this.xmlUtil.fileToXml(quoteConfig).pipe(
      takeUntil(this.destroy$),
      map((xml: XMLDocument) => {
      return this.getFileInfo(xml);

    })).subscribe((quote: QuotesModel) => {

      this.form.patchValue({
            policy: quote.policy,
            email: quote.email,
            name: quote.name,
            age: quote.age,
            sex: quote.sex,
            phone: quote.phone,
            address: quote.address,
            city: quote.city,
            zip: quote.zip });

      this.form.updateValueAndValidity();
    });
    inputEl.value = null;
  }

  /**
   * Parse each particular tags/attributes values
   * @param xml an parsed XMLDocument
   */
  getFileInfo(xml: XMLDocument): QuotesModel {
    const policy = this.xmlUtil.getTag(xml, 'Policy').textContent;
    const email = this.xmlUtil.getTag(xml, 'Email').textContent;
    const name = this.xmlUtil.getTag(xml, 'Name').textContent;
    const age = Number(this.xmlUtil.getTag(xml, 'Age').textContent);
    const sex = this.xmlUtil.getTag(xml, 'Sex').textContent;
    const phone = Number(this.xmlUtil.getTag(xml, 'Phone').textContent);
    const address = this.xmlUtil.getTag(xml, 'Address').textContent;
    const city = this.xmlUtil.getTag(xml, 'City').textContent;
    const zip = this.xmlUtil.getTag(xml, 'Zip').textContent;

    const quote: QuotesModel = { policy, email, name, age, sex, phone, address, city, zip };

    return quote;
  }

  // Submit Form
  submit(): void {
    console.log(this.form.value);
  }

}
