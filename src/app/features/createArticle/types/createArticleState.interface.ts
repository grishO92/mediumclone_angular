import { BackEndErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackEndErrorsInterface | null;
}
