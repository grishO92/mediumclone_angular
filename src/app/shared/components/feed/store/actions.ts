import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { getFeedResponseInterface } from '../types/getFeedResponse.interface';

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get feed': props<{ url: string }>(),
    'Get feed success': props<{ feed: getFeedResponseInterface }>(),
    'Get feed failure': emptyProps(),
  },
});
