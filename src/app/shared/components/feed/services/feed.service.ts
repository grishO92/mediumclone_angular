import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { getFeedResponseInterface } from '../types/getFeedResponse.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private http = inject(HttpClient);

  getFeed(url: string): Observable<getFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<getFeedResponseInterface>(fullUrl);
  }
}
