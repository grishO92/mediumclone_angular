import { Injectable, Input, inject } from '@angular/core';
import queryString from 'query-string';
import { environment } from 'src/environments/environment';
import { feedActions } from '../components/feed/store/actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  private store = inject(Store);

  getFeed(apiUrl: string, currentPage: number, limit: number): void {
    const offset = currentPage * limit - limit;
    const parsedUrl = queryString.parseUrl(apiUrl);
    const stringifiedParams = queryString.stringify({
      limit: limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(feedActions.getFeed({ url: apiUrlWithParams }));
  }
}
