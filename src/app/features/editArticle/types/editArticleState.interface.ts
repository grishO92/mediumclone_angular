import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackEndErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface EditArticleStateInterface {
  article: ArticleInterface | null;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackEndErrorsInterface | null;
}
