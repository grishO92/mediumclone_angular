import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import { PopularTagsService } from '../services/popularTags.service';
import { popularTagsActions } from './actions';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

export const popularTagsEffect = createEffect(
  (
    actions$ = inject(Actions),
    popularTagsService = inject(PopularTagsService)
  ) => {
    return actions$.pipe(
      ofType(popularTagsActions.getPopularTags),
      switchMap(() => {
        return popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return popularTagsActions.getPopularTagsSuccess({ popularTags });
          }),
          catchError(() => {
            return of(popularTagsActions.getPopularTagsFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
