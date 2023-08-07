import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  range(pagesCount: number): number[] {
    return [...Array(pagesCount).keys()].map((el) => el + 1);
  }
}
