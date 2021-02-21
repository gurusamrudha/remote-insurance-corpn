import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotosApi } from 'src/app/Models/photosApi.model';

@Injectable()
export class PhotosUtilManager {
  constructor(private readonly http: HttpClient) {}

  fetch(): Observable<PhotosApi> {
    const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=3`;

    return this.http.get<PhotosApi>(api);
  }

}
