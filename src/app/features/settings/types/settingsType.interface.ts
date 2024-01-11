import { BackEndErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface SettingsTypeInterface {
  isSubmitting: boolean;
  validationErrors: BackEndErrorsInterface | null;
}
