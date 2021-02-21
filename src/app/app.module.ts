import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// 3rd party librabry with MIT license
import { CarouselModule } from 'ngx-owl-carousel-o';

// Service Files
import { XmlUtil } from './Services/xml-util.service';
import { PhotosUtilManager } from './Services/photo-util.service';

// Components
import { AppComponent } from './app.component';
import { HouseInsuranceComponent } from './Insurance Policies/house-insurance/house-insurance.component';
import { TravelInsuranceComponent } from './Insurance Policies/travel-insurance/travel-insurance.component';
import { CarInsuranceComponent } from './Insurance Policies/car-insurance/car-insurance.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuoteFormComponent } from './quotation-form/quote-form.component';
import { GenerateImageComponent } from './generate-image/generate-image.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { AppRoutingModule } from './app.routing ';

@NgModule({
  declarations: [
    AppComponent,
    HouseInsuranceComponent,
    TravelInsuranceComponent,
    CarInsuranceComponent,
    HomePageComponent,
    QuoteFormComponent,
    GenerateImageComponent,
    ToolbarComponent,
  ],
  imports: [
    CarouselModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [PhotosUtilManager, XmlUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
