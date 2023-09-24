import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ArticleRequestInterface } from 'src/app/shared/services/articleRequest.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackEndErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export const createArticleActions = createActionGroup({
  source: 'create article',
  events: {
    'Create article': props<{ request: ArticleRequestInterface }>(),
    'Create article success': props<{ article: ArticleInterface }>(),
    'Create article failure': props<{ errors: BackEndErrorsInterface }>(),
  },
});
