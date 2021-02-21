import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HouseInsuranceComponent } from './Insurance Policies/house-insurance/house-insurance.component';
import { QuoteFormComponent } from './quotation-form/quote-form.component';
import { TravelInsuranceComponent } from './Insurance Policies/travel-insurance/travel-insurance.component';
import { CarInsuranceComponent } from './Insurance Policies/car-insurance/car-insurance.component';

const routes: Routes = [
    {
      path: '',
      component: HomePageComponent,
    },
    {
      path: 'house-insurance',
      component: HouseInsuranceComponent,
    },
    {
      path: 'travel-insurance',
      component: TravelInsuranceComponent,
    },
    {
      path: 'car-insurance',
      component: CarInsuranceComponent,
    },
    {
      path: 'quote',
      component: QuoteFormComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
