import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpaceImageResponse } from './space-image-response';

@Injectable({
  providedIn: 'root'
})
export class SpaceApiService {

  constructor(private http: HttpClient) { }

  nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  getSpaceImage() {
    
    return this.http.get<SpaceImageResponse>(this.nasaUrl);
  }
}
