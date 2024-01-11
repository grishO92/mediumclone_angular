import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getPopularTagsResponseInterface } from '../types/getPopularTagsResponse.interface';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  private http = inject(HttpClient);

  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http
      .get<getPopularTagsResponseInterface>(url)
      .pipe(map((res) => res.tags));
  }
}
