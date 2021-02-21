import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subject, throwError } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { OwlOptions } from 'ngx-owl-carousel-o';

import { PhotosApi } from '../Models/photosApi.model';
import { PhotosUtilManager } from '../Services/photo-util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-image',
  templateUrl: './generate-image.component.html',
  styleUrls: ['./generate-image.component.css']
})
export class GenerateImageComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();

  @Input()
  policyType: string;

  apiData: PhotosApi;
  // custom properties provided by ngx-owl-carousel-o
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: true
  };

  ngOnInit(): void {
    // Wasted lot of time searching for right resolution pic. Found this was the best way to deal at this situation.
    // This might use high resolution images to be displayed as a banner
    this.photoUtil.fetch().pipe(
      takeUntil(this.destroy$),
    ).subscribe(res => this.apiData = res,
      err => throwError(err));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  navigateTo($event: number): void {
    const policyName = $event === 1 ? '/house-insurance' : $event === 2 ? '/travel-insurance' : '/car-insurance';

    this.router.navigateByUrl(policyName);
  }

  constructor(private readonly photoUtil: PhotosUtilManager, private router: Router) {}

}
